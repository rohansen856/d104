"use client"
import { motion } from "framer-motion"

import { Separator } from "@/components/ui/separator"

const container = {
    hidden: { x: -150 },
    show: { x: 0 },
}

export function SideNav({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <motion.h1
            className="font-heading m-auto text-7xl font-bold h-full w-[150px] hidden md:flex"
            variants={container}
            transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "ease-out",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            }}
            initial="hidden"
            animate="show"
        >
            <span className="rotate-180 m-auto max-w-full">
                <p className="rotate-90">D104</p>
            </span>
            <Separator orientation="vertical" />
        </motion.h1>
    )
}
