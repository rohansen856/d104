import { eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/lib/db"
import { profile } from "@/lib/schema"
import { insertProfileSchema } from "@/lib/validation"

const routeContextSchema = z.object({
    params: z.object({
        userId: z.string(),
    }),
})

export async function POST(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        // Validate the route context.
        const { params } = routeContextSchema.parse(context)

        // Get the request body and validate it.
        const body = await req.json()
        const payload = insertProfileSchema.parse(body)

        // Update the user.
        await db.insert(profile).values({
            id: payload.id,
            name: payload.name,
            image: payload.image,
            mainSkill: payload.mainSkill,
            secSkills: payload.secSkills as string[],
        })

        return new Response(JSON.stringify(params), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}

export async function GET(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        // Validate the route context.
        const { params } = routeContextSchema.parse(context)

        const payload = Number(params.userId)

        // Update the user.
        const data = await db
            .select()
            .from(profile)
            .where(eq(profile.id, payload))
        if (!data || data.length <= 0)
            return new Response(null, { status: 404 })

        return new Response(JSON.stringify(params), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}
