
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Footprints } from "lucide-react";
import CircularProgress from "./CircularProgress";

interface GlobalStatsCardProps {
  totalSteps: number;
  totalUsers: number;
  dailyGoalCompletion: number;
}

const GlobalStatsCard = ({ totalSteps, totalUsers, dailyGoalCompletion }: GlobalStatsCardProps) => {
  return (
    <Card className="border-accent/20">
      <CardHeader>
        <CardTitle className="text-xl">Platform Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Footprints className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-medium text-muted-foreground">Total Steps</h3>
            </div>
            <p className="text-2xl font-bold neon-orange-text">
              {totalSteps.toLocaleString()}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-secondary" />
              <h3 className="text-sm font-medium text-muted-foreground">Active Users</h3>
            </div>
            <p className="text-2xl font-bold neon-violet-text">
              {totalUsers.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <CircularProgress value={dailyGoalCompletion} size={120}>
            <div className="text-center">
              <span className="text-2xl font-bold">{dailyGoalCompletion}%</span>
              <p className="text-xs text-muted-foreground">Daily Goals Met</p>
            </div>
          </CircularProgress>
        </div>
      </CardContent>
    </Card>
  );
};

export default GlobalStatsCard;
