import { cookies } from "next/headers"

interface userDataProps {
    id: string | undefined
    email: string | undefined
    password: string | undefined
}

export function userData(): userDataProps {
    const data = {
        id: cookies().get("id")?.value,
        email: cookies().get("email")?.value,
        password: cookies().get("password")?.value,
    } as userDataProps
    return data
}
