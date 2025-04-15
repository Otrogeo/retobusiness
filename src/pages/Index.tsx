
import React from "react";
import Layout from "@/components/Layout";
import StatCard from "@/components/StatCard";
import GlobalStatsCard from "@/components/GlobalStatsCard";
import TotalStepsChart from "@/components/TotalStepsChart";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

// Mock data for demonstration
const users = [
  {
    id: "1",
    name: "Alex Runner",
    avatar: "",
    steps: 8734,
    goal: 10000,
    rank: 1,
    trend: "up" as const,
  },
  {
    id: "2",
    name: "Sam Walker",
    avatar: "",
    steps: 7125,
    goal: 8000,
    rank: 2,
    trend: "up" as const,
  },
  {
    id: "3",
    name: "Taylor Steps",
    avatar: "",
    steps: 5680,
    goal: 7500,
    rank: 3,
    trend: "down" as const,
  },
  {
    id: "4",
    name: "Jamie Miles",
    avatar: "",
    steps: 4812,
    goal: 6000,
    rank: 4,
    trend: "neutral" as const,
  },
  {
    id: "5",
    name: "Morgan Pace",
    avatar: "",
    steps: 3945,
    goal: 5000,
    rank: 5,
    trend: "up" as const,
  },
  {
    id: "6",
    name: "Jordan Track",
    avatar: "",
    steps: 3100,
    goal: 5000,
    rank: 6,
    trend: "down" as const,
  },
];

const Index = () => {
  const globalStats = {
    totalSteps: 2847392,
    totalUsers: users.length,
    dailyGoalCompletion: 78
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Monitor fitness states and place predictions</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Prediction
        </Button>
      </div>

      <div className="grid gap-6">
        <GlobalStatsCard {...globalStats} />
        <TotalStepsChart />
      </div>

      <h2 className="text-xl font-semibold my-6">Active Participants</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <StatCard key={user.id} user={user} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
