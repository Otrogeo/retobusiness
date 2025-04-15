
import React from "react";
import Layout from "@/components/Layout";
import StepChart from "@/components/StepChart";
import CircularProgress from "@/components/CircularProgress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet } from "lucide-react";

// Mock data
const profileData = {
  user: {
    name: "Alex Runner",
    steps: 8734,
    goal: 10000,
    distance: 6.8,
    distanceGoal: 8,
    fitTokens: 240,
  },
  history: [
    { date: "2025-04-08", steps: 9234, distance: 7.3 },
    { date: "2025-04-09", steps: 8723, distance: 6.9 },
    { date: "2025-04-10", steps: 7812, distance: 6.2 },
    { date: "2025-04-11", steps: 9145, distance: 7.2 },
    { date: "2025-04-12", steps: 6789, distance: 5.4 },
    { date: "2025-04-13", steps: 7543, distance: 6.0 },
    { date: "2025-04-14", steps: 8734, distance: 6.8 },
  ],
};

const Profile = () => {
  const stepsProgress = Math.round((profileData.user.steps / profileData.user.goal) * 100);
  const distanceProgress = Math.round((profileData.user.distance / profileData.user.distanceGoal) * 100);

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{profileData.user.name}</h1>
          <p className="text-muted-foreground">Your fitness analytics and betting dashboard</p>
        </div>
        <Button variant="outline" className="border border-tron-blue animate-glow">
          <Wallet className="mr-2 h-4 w-4" />
          {profileData.user.fitTokens} FITtokens
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Today's Steps</CardTitle>
            <CardDescription>Daily step count progress</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-6">
            <CircularProgress value={stepsProgress} size={150} strokeWidth={10} color="#F97316">
              <div className="text-center">
                <div className="text-3xl font-bold neon-orange-text">{profileData.user.steps.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">of {profileData.user.goal.toLocaleString()}</div>
              </div>
            </CircularProgress>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Distance Walked</CardTitle>
            <CardDescription>Daily kilometers tracked</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-6">
            <CircularProgress value={distanceProgress} size={150} strokeWidth={10} color="#8B5CF6">
              <div className="text-center">
                <div className="text-3xl font-bold neon-violet-text">{profileData.user.distance} km</div>
                <div className="text-sm text-muted-foreground">of {profileData.user.distanceGoal} km</div>
              </div>
            </CircularProgress>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle>Current Bets</CardTitle>
            <CardDescription>Active predictions on your performance</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[220px]">
            <div className="text-center mb-6">
              <p className="text-muted-foreground">No active bets yet</p>
            </div>
            <Button>Place a Bet</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7-Day History</h2>
        <StepChart data={profileData.history} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Betting Options</h2>
        <Tabs defaultValue="self">
          <TabsList className="mb-4">
            <TabsTrigger value="self">Bet on Yourself</TabsTrigger>
            <TabsTrigger value="others">Bet on Others</TabsTrigger>
          </TabsList>
          <TabsContent value="self">
            <Card>
              <CardHeader>
                <CardTitle>Create a Personal Challenge</CardTitle>
                <CardDescription>Set a goal and stake FITtokens to earn rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="steps-goal">Steps Goal</Label>
                    <Input id="steps-goal" type="number" placeholder="10000" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="duration">Duration (days)</Label>
                    <Input id="duration" type="number" placeholder="7" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="stake">FITtoken Stake</Label>
                    <Input id="stake" type="number" placeholder="50" />
                  </div>
                  <Button className="mt-2">Create Challenge</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="others">
            <Card>
              <CardHeader>
                <CardTitle>Support Other Athletes</CardTitle>
                <CardDescription>Place bets on other users achieving their goals</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-[200px]">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground">Coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
