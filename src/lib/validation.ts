import { createInsertSchema } from "drizzle-zod"

import { profile, users } from "@/lib/schema"

// Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
export const insertUserSchema = createInsertSchema(users, {
    id: (schema) => schema.id.positive(),
    email: (schema) => schema.email.email(),
    password: (schema) => schema.password.min(5),
})

export const insertProfileSchema = createInsertSchema(profile, {
    id: (schema) => schema.id.positive(),
    name: (schema) => schema.name.min(3).max(15),
    image: (schema) => schema.image.url(),
    mainSkill: (schema) => schema.mainSkill.nullable(),
    secSkills: (schema) => schema.secSkills.array().default([]),
})
