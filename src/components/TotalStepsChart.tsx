
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StepChart from "./StepChart";
import { addDays, format, subDays } from "date-fns";

type TimeRange = "daily" | "weekly" | "monthly";

// Mock data generator
const generateMockData = (days: number) => {
  const data = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: format(date, "yyyy-MM-dd"),
      steps: Math.floor(Math.random() * 50000) + 150000,
      distance: +(Math.random() * 30 + 20).toFixed(1)
    });
  }
  return data;
};

const TotalStepsChart = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("daily");
  
  const getDays = (range: TimeRange) => {
    switch (range) {
      case "daily": return 7;
      case "weekly": return 28;
      case "monthly": return 90;
    }
  };

  return (
    <Card className="border-accent/20">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <CardTitle className="text-xl">Platform Activity</CardTitle>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={timeRange === "daily" ? "default" : "outline"}
            onClick={() => setTimeRange("daily")}
          >
            Daily
          </Button>
          <Button
            size="sm"
            variant={timeRange === "weekly" ? "default" : "outline"}
            onClick={() => setTimeRange("weekly")}
          >
            Weekly
          </Button>
          <Button
            size="sm"
            variant={timeRange === "monthly" ? "default" : "outline"}
            onClick={() => setTimeRange("monthly")}
          >
            Monthly
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <StepChart 
          data={generateMockData(getDays(timeRange))} 
          showDistance={false}
        />
      </CardContent>
    </Card>
  );
};

export default TotalStepsChart;
