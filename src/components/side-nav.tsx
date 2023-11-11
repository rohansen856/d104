"use client"

import { Separator } from "@/components/ui/separator"

const container = {
    hidden: { x: -150 },
    show: { x: 0 },
}

export function SideNav({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <h1 className="font-heading m-auto text-7xl font-bold  h-full w-[150px] ml-[-150px] hidden md:flex transition-transform ease-out delay-700 translate-x-[150px]">
            <span className="rotate-180 m-auto max-w-full">
                <p className="rotate-90">D104</p>
            </span>
            <Separator orientation="vertical" />
        </h1>
    )
}
