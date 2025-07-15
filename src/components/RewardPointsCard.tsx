"use client";

import { TrendingUp } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PolarGrid,
  PolarRadiusAxis,
  Label,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  {
    category: "rewards",
    points: 875,
    fill: "var(--chart-1)",
  },
];

const chartConfig = {
  rewards: {
    label: "Reward Points",
    color: "var(--chart-1)",
  },
  points: {
    label: "Points",
  },
} satisfies ChartConfig;

export default function RewardPointsRadialChart() {
  return (
    <motion.div
      className="p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Reward Points</CardTitle>
          <CardDescription>Current balance</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={100}
              innerRadius={80}
              outerRadius={140}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="points" background />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {chartData[0].points} pts
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-sm"
                          >
                            Reward Points
                          </tspan>
                        </text>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex-col gap-4 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium text-green-600 dark:text-green-500">
            +12% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none pb-4">
            Keep engaging to earn more points
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
