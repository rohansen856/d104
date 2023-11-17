import { redirect } from "next/navigation"

import { marketingConfig } from "@/config/marketing"
import { userData } from "@/lib/auth"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const user = userData()

    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />

                    <UserAccountNav
                        user={{
                            name: user.email,
                            email: user.email as string,
                            image: "/sandip.jpeg",
                        }}
                        // logout={}
                    />
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter className="bg-background" />
        </div>
    )
}
