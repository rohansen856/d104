import { RoadmapList } from "@/components/roadmap-item"

const items = [
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
]

export default function Component() {
    return (
        <div className="flex flex-col w-full min-h-screen p-4 md:p-6 lg:p-8">
            <h1 className="text-3xl font-bold mb-4">Roadmap</h1>
            {items ? (
                <ul className="relative grid gap-4">
                    <div className="absolute left-6 mt-8 h-[calc(100%+2rem)] w-1 bg-blue-700"></div>
                    {items.map((i) => (
                        <RoadmapList
                            key={i.feature}
                            feature={i.feature}
                            status={i.status}
                            difficulty={i.difficulty}
                        />
                    ))}
                </ul>
            ) : (
                ""
            )}
            <div className="flex items-center justify-between bg-white p-4 mt-4 rounded-lg shadow-md dark:bg-zinc-800">
                <div className="flex items-center gap-4">
                    <span className="w-5 h-5 rounded-full bg-blue-700"></span>
                    <svg
                        className=" w-6 h-6 text-red-500 dark:text-red-400"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                    </svg>
                    <div>
                        <h2 className="text-xl font-medium">Deploy</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            To be completed on 30th Jan 2023
                        </p>
                    </div>
                </div>
                <span className="text-sm font-medium bg-zinc-100 px-2 py-1 rounded-lg dark:bg-zinc-800">
                    Hard
                </span>
            </div>
        </div>
    )
}
