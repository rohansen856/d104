import { cookies } from "next/headers"

export async function logOut(): Promise<void> {
    "use server"
    cookies().delete("email")
    cookies().delete("password")
}
