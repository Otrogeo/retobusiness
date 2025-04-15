
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Trophy } from "lucide-react";
import CircularProgress from "./CircularProgress";
import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  challenge: {
    id: string;
    title: string;
    description: string;
    participants: number;
    duration: string;
    reward: number;
    progress: number;
    status: "active" | "completed" | "upcoming";
  };
  className?: string;
}

const ChallengeCard = ({ challenge, className }: ChallengeCardProps) => {
  const statusStyles = {
    active: "border-accent/50 shadow-sm shadow-accent/20",
    completed: "border-green-500/50 shadow-sm shadow-green-500/20",
    upcoming: "border-muted/50"
  };

  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", statusStyles[challenge.status], className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{challenge.title}</CardTitle>
            <CardDescription>{challenge.description}</CardDescription>
          </div>
          <div className={cn(
            "px-2 py-1 rounded-md text-xs font-medium",
            challenge.status === "active" ? "bg-accent/20 text-accent" : 
            challenge.status === "completed" ? "bg-green-500/20 text-green-500" : 
            "bg-muted text-muted-foreground"
          )}>
            {challenge.status.charAt(0).toUpperCase() + challenge.status.slice(1)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-border/50 p-3">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Participants</p>
              <p className="font-medium">{challenge.participants}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/50 p-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-medium">{challenge.duration}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              <p className="font-semibold text-primary">{challenge.reward} FITtokens</p>
            </div>
            <p className="text-xs text-muted-foreground">Reward pool</p>
          </div>
          {challenge.status !== "upcoming" && (
            <CircularProgress 
              value={challenge.progress} 
              size={80} 
              color={challenge.status === "completed" ? "#22c55e" : "#1EAEDB"}
            >
              <div className="text-center">
                <span className="text-sm font-bold">{challenge.progress}%</span>
              </div>
            </CircularProgress>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          className="w-full" 
          variant={challenge.status === "upcoming" ? "default" : "outline"}
          disabled={challenge.status === "completed"}
        >
          {challenge.status === "upcoming" ? "Join Challenge" : challenge.status === "active" ? "View Progress" : "Completed"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
