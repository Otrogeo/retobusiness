import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  steps: number;
  goal: number;
  progress: number;
  fitTokens: number;
  change: number;
}

interface LeaderboardTableProps {
  users: LeaderboardUser[];
  className?: string;
}

const LeaderboardTable = ({ users, className }: LeaderboardTableProps) => {
  const getRowStyle = (rank: number) => {
    if (rank === 1) return "border-l-4 border-l-yellow-500";
    if (rank === 2) return "border-l-4 border-l-gray-400";
    if (rank === 3) return "border-l-4 border-l-amber-700";
    return "";
  };

  const getRankElement = (rank: number) => {
    if (rank === 1) return <Trophy className="h-4 w-4 text-yellow-500" />;
    if (rank === 2) return <Trophy className="h-4 w-4 text-gray-400" />;
    if (rank === 3) return <Trophy className="h-4 w-4 text-amber-700" />;
    return rank;
  };

  return (
    <div className={cn("rounded-xl border border-border/50 bg-card", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Rank</TableHead>
            <TableHead>User</TableHead>
            <TableHead className="text-right">Steps</TableHead>
            <TableHead className="text-right">Progress</TableHead>
            <TableHead className="text-right">FITtokens</TableHead>
            <TableHead className="text-right">Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className={cn(getRowStyle(user.rank))}>
              <TableCell className="font-medium flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  {getRankElement(user.rank)}
                </div>
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-right">{user.steps.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <Badge variant={user.progress >= 100 ? "default" : "default"} className={user.progress >= 100 ? "bg-green-500/20 text-green-500 hover:bg-green-500/30" : ""}>
                  {user.progress}%
                </Badge>
              </TableCell>
              <TableCell className="text-right font-semibold neon-blue-text">{user.fitTokens}</TableCell>
              <TableCell className="text-right">
                <span className={user.change > 0 ? "text-green-500" : user.change < 0 ? "text-red-500" : "text-muted-foreground"}>
                  {user.change > 0 ? "+" : ""}{user.change}
                  {user.change > 0 && <ArrowUp className="ml-1 inline h-3 w-3" />}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardTable;
