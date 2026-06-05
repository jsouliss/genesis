import { integer, date, varchar, text, pgTable} from "drizzle-orm/pg-core"

export const postTable = pgTable("posts", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 255 }).notNull(),
    excerpt: text(),
    date: date().notNull(), 
    category: varchar({ length: 255 }), 
    image: varchar({ length: 255 }).notNull()
});