import { userData } from "@/lib/auth"
import { DashboardCard } from "@/components/dashboard-cards"

export async function DashboardInfo() {
    const user = userData()
    return (
        <div className="mt-5 flex h-auto w-full flex-wrap justify-center gap-4">
            <DashboardCard page="Home" id={user.id} />
            <DashboardCard page="Journey" id={user.id} />
            <DashboardCard page="Profile" id={user.id} />
            <DashboardCard page="Contact" id={user.id} />
        </div>
    )
}
