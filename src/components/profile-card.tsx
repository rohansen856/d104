import styles from "@/styles/profile-card.module.css"

import Image from "next/image"

import { profileColor } from "@/lib/profile-color"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface ProfileCardProps {
    name?: string
    lang?: "c" | "cpp" | "java" | "typescript" | "javascript"
}

export function ProfileCard({ name, lang }: ProfileCardProps) {
    return (
        <div className="w-[250px] min-w-[250px] h-[400px] border-b border-slate-700 dark:border-white text-black dark:text-white overflow-hidden">
            <div className="w-full h-full mt-20 bg-slate-600 dark:bg-slate-900 flex flex-col items-center border border-slate-700 dark:border-white">
                <div className="rounded-full w-[120px] h-[120px] bg-slate-900 dark:bg-white translate-y-[-60px] flex">
                    <div className="m-auto rounded-full bg-slate-900 h-[115px] w-[115px] overflow-hidden">
                        <Avatar className="w-full h-full">
                            <AvatarImage
                                src="/sandip.jpeg"
                                alt="@shadcn"
                                className="object-contain"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div className="translate-y-[-60px] w-full flex flex-col items-center px-2">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <span
                        className={`w-full relative ${styles.ring} ${
                            styles[profileColor[lang || "cpp"]]
                        }`}
                    >
                        <p className=" w-full text-center">
                            {lang?.toUpperCase()} Developer
                        </p>
                    </span>
                    <span className="w-full h-8 rounded-3xl p-2 flex justify-around">
                        <span
                            className={`${styles.line} ${styles["neon_white"]}`}
                        >
                            <Image
                                src="/c.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                        <span
                            className={`${styles.line} ${styles["neon_purple"]}`}
                        >
                            <Image
                                src="/cpp.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                        <span
                            className={`${styles.line} ${styles["neon_red"]}`}
                        >
                            <Image
                                src="/java.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                        <span
                            className={`${styles.line} ${styles["neon_blue"]}`}
                        >
                            <Image
                                src="/typescript.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
