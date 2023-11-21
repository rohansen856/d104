"use client"

import { CardTitle } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LangGraph } from "./lang-graph"
import { ViewGraph } from "./view-graph"
import { ClubGraph } from "./club-graph"

export function Overview() {
  return (
<Tabs defaultValue="lang">
  <div className="flex flex-row justify-between items-center w-full relative">
  <CardTitle className="m-5">Overview</CardTitle>
  <TabsList className="bg-black mr-2">
    <TabsTrigger className="data-[state=active]:outline outline-white outline-1" value="lang">Languages</TabsTrigger>
    <TabsTrigger className="data-[state=active]:outline outline-white outline-1" value="views">Views</TabsTrigger>
    <TabsTrigger className="data-[state=active]:outline outline-white outline-1" value="clubs">Clubs</TabsTrigger>
  </TabsList>
  </div>
  <TabsContent value="lang"><LangGraph/></TabsContent>
  <TabsContent value="views"><ViewGraph/></TabsContent>
  <TabsContent value="clubs"><ClubGraph/></TabsContent>
</Tabs>
  )
}
