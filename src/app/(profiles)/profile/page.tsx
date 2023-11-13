import { Home } from "@/components/profile/home-1"
import { Journey } from "@/components/profile/journey-1"
import { Skills } from "@/components/profile/skills-1"

export default function ProfilePage() {
    return (
        <div className="h-auto w-full overflow-x-hidden">
            <Home />
            <Journey />
            <Skills />
        </div>
    )
}
