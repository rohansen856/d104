import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NEXT_PUBLIC_APP_URL: z.string().url().optional(),
        DATABASE_URL: z.string().min(10),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().url().optional(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        DATABASE_URL: process.env.DATABASE_URL,
    },
})
