import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
} from "drizzle-orm/pg-core"

export const users = pgTable(
    "users",
    {
        id: serial("id").primaryKey(),
        email: text("email").notNull(),
        password: text("password").notNull(),
        createdAt: timestamp("created_at").notNull().defaultNow(),
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex("unique_email").on(users.email),
        }
    }
)
