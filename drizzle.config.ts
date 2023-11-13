import type { Config } from "drizzle-kit"

import { env } from "@/env.mjs"

export default {
    schema: "./src/lib/schema.ts",
    out: "./drizzle/migrations",
    driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        connectionString: env.DATABASE_URL,
    },
} satisfies Config
