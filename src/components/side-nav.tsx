"use client"

import { Separator } from "@/components/ui/separator"

const container = {
    hidden: { x: -150 },
    show: { x: 0 },
}

export function SideNav({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <h1 className="m-auto ml-[-150px] hidden h-full  w-[150px] translate-x-[150px] font-heading text-7xl font-bold transition-transform delay-700 ease-out md:flex">
            <span className="m-auto max-w-full rotate-180">
                <p className="rotate-90">D104</p>
            </span>
            <Separator orientation="vertical" />
        </h1>
    )
}
