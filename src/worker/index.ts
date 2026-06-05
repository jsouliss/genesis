import { Hono } from 'hono'
import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres"
import { postTable } from "./db/schema"

type Bindings = {
    HYPERDRIVE: Hyperdrive
}

const app = new Hono<{ Bindings: Bindings }>()

// Access environment values
app.get('/api/health', (c) => c.json({ status: "ok" }))

app.get('/api/posts', (c) => c.json({   }))

export default app