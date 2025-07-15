"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const chartConfig = {
  offline: {
    label: "Offline Sales",
    color: "var(--chart-2)",
  },
  online: {
    label: "Online Sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", offline: 1500, online: 8000 },
  { month: "February", offline: 1700, online: 5950 },
  { month: "March", offline: 6550, online: 8900 },
  { month: "April", offline: 4000, online: 1920 },
  { month: "May", offline: 1250, online: 1970 },
  { month: "June", offline: 6500, online: 1020 },
  { month: "July", offline: 1500, online: 8000 },
  { month: "August", offline: 700, online: 1950 },
  { month: "September", offline: 600, online: 8190 },
  { month: "October", offline: 890, online: 1920 },
  { month: "November", offline: 675, online: 1970 },
  { month: "December", offline: 7000, online: 10020 },
];

const AppAreaChart = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h1 className="text-lg font-medium mb-6">Total Discounts Given</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />

          <defs>
            <linearGradient id="fillOffline" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-offline)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-offline)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillOnline" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-online)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-online)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="online"
            type="natural"
            fill="url(#fillOnline)"
            fillOpacity={0.4}
            stroke="var(--color-online)"
            stackId="a"
          />
          <Area
            dataKey="offline"
            type="natural"
            fill="url(#fillOffline)"
            fillOpacity={0.4}
            stroke="var(--color-offline)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </motion.div>
  );
};

export default AppAreaChart;
