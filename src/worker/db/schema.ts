import { integer, date, varchar, text, pgTable} from "drizzle-orm/pg-core"

export const postTable = pgTable(
    "posts", 
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        title: varchar({ length: 255 }).notNull(),
        slug: text('title').notNull(), // The URL friendly version of the title
        excerpt: text(),
        date: date().notNull(), 
        category: varchar({ length: 255 }), 
        image: varchar({ length: 255 }).notNull()
    }, 
    (table) => { // 

    });