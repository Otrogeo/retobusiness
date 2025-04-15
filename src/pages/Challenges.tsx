
import React from "react";
import Layout from "@/components/Layout";
import ChallengeCard from "@/components/ChallengeCard";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const activeChallenges = [
  {
    id: "1",
    title: "10K Daily",
    description: "Hit 10,000 steps every day for a week",
    participants: 124,
    duration: "7 days",
    reward: 500,
    progress: 71,
    status: "active" as const,
  },
  {
    id: "2",
    title: "Marathon Month",
    description: "Walk the equivalent of a marathon in 30 days",
    participants: 253,
    duration: "30 days",
    reward: 1200,
    progress: 45,
    status: "active" as const,
  },
  {
    id: "3",
    title: "Weekend Warrior",
    description: "Double your step count on weekends",
    participants: 87,
    duration: "4 weekends",
    reward: 350,
    progress: 25,
    status: "active" as const,
  },
];

const completedChallenges = [
  {
    id: "4",
    title: "Spring Sprint",
    description: "Increase your average daily steps by 20%",
    participants: 142,
    duration: "14 days",
    reward: 750,
    progress: 100,
    status: "completed" as const,
  },
  {
    id: "5",
    title: "Lunch Walk",
    description: "Take a 15-minute walk during lunch break",
    participants: 98,
    duration: "5 days",
    reward: 200,
    progress: 100,
    status: "completed" as const,
  },
];

const upcomingChallenges = [
  {
    id: "6",
    title: "Summer Steps",
    description: "Accumulate 300,000 steps in one month",
    participants: 56,
    duration: "30 days",
    reward: 1000,
    progress: 0,
    status: "upcoming" as const,
  },
  {
    id: "7",
    title: "Early Bird",
    description: "3,000 steps before 9am every day",
    participants: 73,
    duration: "14 days",
    reward: 400,
    progress: 0,
    status: "upcoming" as const,
  },
];

const Challenges = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Challenges</h1>
          <p className="text-muted-foreground">Compete in challenges to earn FITtokens</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Challenge
        </Button>
      </div>

      <Tabs defaultValue="active" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="upcoming">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="rounded-xl border border-border/50 bg-card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Create Your Own Challenge</h2>
        <p className="text-muted-foreground mb-6">
          Create a custom challenge for yourself or invite friends to compete. Set your own rules, duration, and rewards.
        </p>
        <Button>Start a Custom Challenge</Button>
      </div>
    </Layout>
  );
};

export default Challenges;
