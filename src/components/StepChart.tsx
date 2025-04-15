
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { format } from "date-fns";

interface StepData {
  date: string;
  steps: number;
  distance: number;
}

interface StepChartProps {
  data: StepData[];
  showDistance?: boolean;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-border bg-card p-3 shadow-md">
        <p className="font-medium">{format(new Date(label), "EEE, MMM d")}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name === "steps" 
              ? `${entry.value?.toLocaleString()} steps` 
              : `${entry.value} km`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const StepChart = ({ data, showDistance = true }: StepChartProps) => {
  return (
    <div className="h-[300px] w-full rounded-xl border border-border/50 bg-card p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(value) => format(new Date(value), "EEE")} 
            tick={{ fill: "hsl(var(--muted-foreground))" }} 
            stroke="hsl(var(--border))"
          />
          <YAxis 
            yAxisId="left" 
            tick={{ fill: "hsl(var(--muted-foreground))" }} 
            stroke="hsl(var(--border))"
          />
          {showDistance && (
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              tick={{ fill: "hsl(var(--muted-foreground))" }} 
              stroke="hsl(var(--border))"
            />
          )}
          <Tooltip content={<CustomTooltip />} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="steps"
            name="steps"
            stroke="#F97316"
            strokeWidth={2}
            dot={{ r: 4, fill: "#F97316", stroke: "#F97316" }}
            activeDot={{ r: 6, stroke: "#F97316", strokeWidth: 2 }}
          />
          {showDistance && (
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="distance"
              name="distance"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ r: 4, fill: "#8B5CF6", stroke: "#8B5CF6" }}
              activeDot={{ r: 6, stroke: "#8B5CF6", strokeWidth: 2 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StepChart;
