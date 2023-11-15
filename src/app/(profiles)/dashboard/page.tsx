import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { NoProfile } from "@/components/no-profile"

export default function Dashboard() {
    return (
        <main className="flex min-h-[80vh] w-full">
            <DashboardSidebar />
            <section className="2xl:[w-350px] mx-2 flex min-h-full w-0 flex-1 flex-col items-center overflow-x-hidden rounded-md pt-2 lg:w-[300px]">
                <h1 className="3xl:text-5xl text-lg underline lg:text-2xl">
                    Build Your Portfolio With Minimal Steps
                </h1>
                <NoProfile />
            </section>
        </main>
    )
}
