import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { absoluteUrl } from "@/lib/utils"
import { Home } from "@/components/profile/home-1"

import { ProfileForm } from "./profile-form"

export default async function SettingsProfilePage() {
    const session = await auth()
    if (!session?.user || !session.user.id)
        return redirect(absoluteUrl("/login"))

    return (
        <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start">
            <div>
                <ProfileForm id={session.user.id} />
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
