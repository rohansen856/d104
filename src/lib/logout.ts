import { cookies } from "next/headers"

export async function logOut(): Promise<void> {
    cookies().delete("id")
    cookies().delete("email")
    cookies().delete("password")
}
