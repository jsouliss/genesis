import { Hono } from 'hono'
import { Client } from "pg";
import { NodePgDatabase} from "drizzle-orm/node-postgres";
import { drizzle } from "drizzle-orm/node-postgres";
import { postTable } from "./db/schema";

type Bindings = {
    HYPERDRIVE: Hyperdrive
}

export async function getPosts(db: NodePgDatabase) {
    return db.select().from(postTable)
}

const app = new Hono<{ Bindings: Bindings }>()

// Access environment values
app.get('/api/health', (c) => c.json({ status: "ok" }))

app.get('/api/posts', async (c) => {
    // 1. Create a node-postgres client configured for Hyperdrive
    const client = new Client({ connectionString: c.env.HYPERDRIVE.connectionString });

    // 2. Connect the client
    await client.connect();

    // 3. Initialize Drizzle
    const db = drizzle(client);

    // 4. Use Drizzle
    const result = await getPosts(db); 

    // Remember to close the client if not reusing in a pool scenario
    await client.end();

    return c.json(result)
})

app.onError((err, c) => {
    console.error(err)
    return c.text('Custom Error Message', 500)
})


export default app