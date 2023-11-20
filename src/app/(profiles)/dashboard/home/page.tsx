import { redirect } from "next/navigation"
import axios from "axios"

import { auth } from "@/lib/auth"
import { absoluteUrl } from "@/lib/utils"
import { Home } from "@/components/profile/home-1"

import { ProfileForm } from "./profile-form"

async function homeData(id: string) {
    const { data } = await axios.patch(absoluteUrl(`/api/profile/home/${id}`))
    console.log("data", data.status)
    return data
}

export default async function SettingsProfilePage() {
    const session = await auth()
    if (!session?.user || !session.user.id)
        return redirect(absoluteUrl("/login"))

    const data = await homeData(session.user.id)

    return (
        <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start">
            <div>
                <ProfileForm
                    id={session.user.id}
                    data={
                        data as {
                            id: string
                            mainSkill: string
                            secSkills: string[]
                            bio: string
                        }
                    }
                />
            </div>
            <div className="m-2 border border-secondary">
                <Home
                    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, tenetur?"
                    image="/sandip.jpeg"
                    job="Web Developer"
                    name="Sandip"
                />
            </div>
        </div>
    )
}
