"use client"

import { Separator } from "@/components/ui/separator"

export function SideNav({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <h1 className="m-auto hidden h-full w-[150px] font-heading text-7xl font-bold md:flex">
            <span className="m-auto max-w-full rotate-180">
                <p className="rotate-90">D104</p>
            </span>
            <Separator orientation="vertical" />
        </h1>
    )
}
