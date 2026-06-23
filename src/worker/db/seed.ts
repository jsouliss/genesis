import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { sql } from "drizzle-orm";
import { postTable } from "./schema.ts";

config({ path: ".env" });

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const posts: (typeof postTable.$inferInsert)[] = [
    {
      title: "Your First PostTitle",
      slug: "post-1",
      excerpt: "A brief overview of what the first post is about...",
      date: "2024-01-17",
      category: "Cybersecurity",
      image: "https://picsum.photos/400/300", // Placeholder for now
    },
    {
      title: "Your Second PostTitle",
      slug: "post-2",
      excerpt: "A brief overview of what the second post is about...",
      date: "2025-02-20",
      category: "Software Engineering",
      image: "https://picsum.photos/400/300", // Placeholder for now
    },
    {
      title: "Your Third PostTitle",
      slug: "post-3",
      excerpt: "A brief overview of what the third  post is about...",
      date: "2026-03-19",
      category: "Cybersecurity",
      image: "https://picsum.photos/400/300", // Placeholder for now
    },
  ];
  await db.execute(sql`TRUNCATE posts RESTART IDENTITY;`);
  await db.insert(postTable).values(posts);
  console.log("New post created!");
}

main();
