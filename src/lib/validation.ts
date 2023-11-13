import { createInsertSchema, createSelectSchema } from "drizzle-zod"

import { users } from "@/lib/schema"

// Schema for selecting a user - can be used to validate API responses
export const selectUserSchema = createSelectSchema(users)

// Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
export const insertUserSchema = createInsertSchema(users, {
    id: (schema) => schema.id.positive(),
    email: (schema) => schema.email.email(),
    password: (schema) => schema.password.min(5),
})
