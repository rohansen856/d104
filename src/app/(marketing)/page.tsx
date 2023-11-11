import Link from "next/link"
import Image from "next/image"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SideNav } from "@/components/side-nav"
import { TypeWriter } from "@/components/type-writer"

export default async function IndexPage() {
    return (
        <>
            <div className="w-full h-[80vh] z-[-20] fixed flex">
                <SideNav />
                <div className="relative w-full h-full flex">
                    <Image
                        src="/mask.png"
                        alt="hecker"
                        className="m-auto opacity-10"
                        width={450}
                        height={450}
                    />
                </div>
            </div>
            <section className="w-full md:pl-[150px] pt-24 md:pt-20 pl-0 overflow-hidden min-h-screen flex flex-col items-center">
                <div className="flex flex-col items-center space-y-6">
                    <h1 className="font-heading text-7xl sm:text-5xl md:text-6xl lg:text-7xl text-center bg-clip-text text-transparent animate-gradient">
                        The &nbsp;Heckers&nbsp;of&nbsp;IIITDMJ
                    </h1>
                    <h2 className="max-w-[42rem] h-16 text-2xl sm:text-3xl md:text-3xl lg:text-3xl leading-normal text-muted-foreground sm:leading-8 bg-clip-text">
                        <TypeWriter />
                    </h2>
                </div>
                <Link
                    href="/peoples"
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "mt-32 bg-primary text-xl rounded-xl"
                    )}
                >
                    Profile
                </Link>
            </section>
        </>
    )
}
