
import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import CircularProgress from "./CircularProgress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StatCardProps {
  user: {
    id: string;
    name: string;
    avatar: string;
    steps: number;
    goal: number;
    rank: number;
    trend: "up" | "down" | "neutral";
  };
  className?: string;
}

const StatCard = ({ user, className }: StatCardProps) => {
  const [currentCount, setCurrentCount] = useState(0);
  const percentComplete = Math.min(100, Math.round((user.steps / user.goal) * 100));
  const trendColor = user.trend === "up" ? "text-green-500" : user.trend === "down" ? "text-red-500" : "text-gray-500";
  
  // Animate step counter
  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(animationDuration / frameDuration);
    const stepIncrement = user.steps / totalFrames;
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(1, frame / totalFrames);
      setCurrentCount(Math.floor(progress * user.steps));
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [user.steps]);

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border border-border/50 bg-card p-6",
      "transition-all duration-200 hover:border-accent/50 hover:shadow-md hover:shadow-accent/10",
      className
    )}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"></div>
      
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-muted">
            <div className="flex h-full w-full items-center justify-center text-xs font-bold uppercase text-muted-foreground">
              {user.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center">
              Rank #{user.rank}
              {user.trend === "up" ? (
                <ArrowUp className={`ml-1 h-3 w-3 ${trendColor}`} />
              ) : user.trend === "down" ? (
                <ArrowDown className={`ml-1 h-3 w-3 ${trendColor}`} />
              ) : null}
            </p>
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="text-xs border-accent hover:bg-accent/20 hover:text-accent-foreground">
          Support
        </Button>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold neon-orange-text animate-count-up">
              {currentCount.toLocaleString()}
            </span>
            <span className="ml-1 text-muted-foreground">/ {user.goal.toLocaleString()}</span>
          </div>
          <p className="text-sm text-muted-foreground">Today's steps</p>
        </div>
        
        <CircularProgress value={percentComplete} size={80} strokeWidth={6}>
          <div className="text-center">
            <span className="text-lg font-bold">{percentComplete}%</span>
          </div>
        </CircularProgress>
      </div>
    </div>
  );
};

export default StatCard;
