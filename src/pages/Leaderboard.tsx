
import React from "react";
import Layout from "@/components/Layout";
import LeaderboardTable from "@/components/LeaderboardTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

// Mock data
const dailyUsers = [
  { id: "1", rank: 1, name: "Alex Runner", steps: 8734, goal: 10000, progress: 87, fitTokens: 240, change: 2 },
  { id: "2", rank: 2, name: "Sam Walker", steps: 7125, goal: 8000, progress: 89, fitTokens: 180, change: 1 },
  { id: "3", rank: 3, name: "Taylor Steps", steps: 5680, goal: 7500, progress: 76, fitTokens: 120, change: -1 },
  { id: "4", rank: 4, name: "Jamie Miles", steps: 4812, goal: 6000, progress: 80, fitTokens: 90, change: 0 },
  { id: "5", rank: 5, name: "Morgan Pace", steps: 3945, goal: 5000, progress: 79, fitTokens: 75, change: 2 },
  { id: "6", rank: 6, name: "Jordan Track", steps: 3100, goal: 5000, progress: 62, fitTokens: 60, change: -2 },
  { id: "7", rank: 7, name: "Riley Sprint", steps: 2950, goal: 4000, progress: 74, fitTokens: 45, change: 1 },
  { id: "8", rank: 8, name: "Casey Jog", steps: 2780, goal: 3500, progress: 79, fitTokens: 30, change: 0 },
];

const weeklyUsers = [
  { id: "1", rank: 1, name: "Taylor Steps", steps: 52680, goal: 50000, progress: 105, fitTokens: 320, change: 2 },
  { id: "2", rank: 2, name: "Alex Runner", steps: 48734, goal: 50000, progress: 97, fitTokens: 290, change: -1 },
  { id: "3", rank: 3, name: "Sam Walker", steps: 47125, goal: 45000, progress: 105, fitTokens: 240, change: 0 },
  { id: "4", rank: 4, name: "Morgan Pace", steps: 43945, goal: 40000, progress: 110, fitTokens: 210, change: 3 },
  { id: "5", rank: 5, name: "Jamie Miles", steps: 38812, goal: 42000, progress: 92, fitTokens: 180, change: -1 },
  { id: "6", rank: 6, name: "Riley Sprint", steps: 36950, goal: 35000, progress: 106, fitTokens: 150, change: 1 },
  { id: "7", rank: 7, name: "Jordan Track", steps: 33100, goal: 35000, progress: 95, fitTokens: 120, change: -2 },
  { id: "8", rank: 8, name: "Casey Jog", steps: 28780, goal: 28000, progress: 103, fitTokens: 90, change: 0 },
];

const Leaderboard = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
          <p className="text-muted-foreground">Global rankings by steps and goal completion</p>
        </div>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <Card className="bg-gradient-to-b from-yellow-500/20 to-transparent border-yellow-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
              First Place
            </CardTitle>
            <CardDescription>Daily Leader</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mt-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-yellow-500 bg-yellow-500/20">
                <div className="flex h-full w-full items-center justify-center text-sm font-bold uppercase text-yellow-500">
                  {dailyUsers[0].name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{dailyUsers[0].name}</h3>
                <p className="text-sm text-muted-foreground">{dailyUsers[0].steps.toLocaleString()} steps</p>
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-yellow-500 font-semibold">{dailyUsers[0].fitTokens} FITtokens</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-b from-gray-400/20 to-transparent border-gray-400/30">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-gray-400" />
              Second Place
            </CardTitle>
            <CardDescription>Daily Runner-up</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mt-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gray-400 bg-gray-400/20">
                <div className="flex h-full w-full items-center justify-center text-sm font-bold uppercase text-gray-400">
                  {dailyUsers[1].name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{dailyUsers[1].name}</h3>
                <p className="text-sm text-muted-foreground">{dailyUsers[1].steps.toLocaleString()} steps</p>
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-gray-400 font-semibold">{dailyUsers[1].fitTokens} FITtokens</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-b from-amber-700/20 to-transparent border-amber-700/30">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-amber-700" />
              Third Place
            </CardTitle>
            <CardDescription>Daily Bronze</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mt-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-amber-700 bg-amber-700/20">
                <div className="flex h-full w-full items-center justify-center text-sm font-bold uppercase text-amber-700">
                  {dailyUsers[2].name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{dailyUsers[2].name}</h3>
                <p className="text-sm text-muted-foreground">{dailyUsers[2].steps.toLocaleString()} steps</p>
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-amber-700 font-semibold">{dailyUsers[2].fitTokens} FITtokens</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="daily">Daily Leaders</TabsTrigger>
          <TabsTrigger value="weekly">Weekly Leaders</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <LeaderboardTable users={dailyUsers} />
        </TabsContent>
        <TabsContent value="weekly">
          <LeaderboardTable users={weeklyUsers} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Leaderboard;
