import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { postTable } from "./schema.ts";

config({ path: ".env" });

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const posts: (typeof postTable.$inferInsert)[] = [
    {
      title: "Your First PostTitle",
      excerpt: "A brief overview of what the first post is about...",
      date: "2024-01-17",
      category: "Cybersecurity",
      image: "https://picsum.photos/400/300", // Placeholder for now
    },
    {
      title: "Your Second PostTitle",
      excerpt: "A brief overview of what the second post is about...",
      date: "2025-02-20",
      category: "Software Engineering",
      image: "https://picsum.photos/400/300", // Placeholder for now
    },
    {
      title: "Your Third PostTitle",
      excerpt: "A brief overview of what the third  post is about...",
      date: "2026-03-19",
      category: "Cybersecurity",
      image: "https://picsum.photos/400/300", // Placeholder for now
    },
  ];
  await db.insert(postTable).values(posts);
  console.log("New post created!");
}

main();

