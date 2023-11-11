import { ProfileCard } from "@/components/profile-card"

export default function Peoples() {
    return (
        <div className="grid gap-5 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 justify-center items-center">
            <ProfileCard name="Sayan Chakroborty" lang="java" />
            <ProfileCard name="Rohan Sen" lang="typescript" />
            <ProfileCard name="Sandip Mandal" lang="cpp" />
            <ProfileCard name="Ritankar Saha" lang="c" />
            <ProfileCard name="Shreyansh Yadav" lang="c" />
            <ProfileCard name="Vaibhav Sahu" lang="cpp" />
        </div>
    )
}
