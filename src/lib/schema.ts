import {
    integer,
    json,
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

export const profile = pgTable("profile", {
    id: integer("id").primaryKey(),
    name: text("name"),
    image: text("image"),
    mainSkill: text("main_skill"),
    secSkills: json("secondary_skills").$type<string[]>(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const home = pgTable("home", {
    id: serial("id").primaryKey(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})
