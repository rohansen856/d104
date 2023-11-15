import { cookies } from "next/headers"

interface userDataProps {
    email: string | undefined
    password: string | undefined
}

export function userData(): userDataProps {
    const data = {
        email: cookies().get("email")?.value,
        password: cookies().get("password")?.value,
    } as userDataProps
    return data
}
