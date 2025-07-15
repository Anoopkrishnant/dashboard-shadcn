"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const chartConfig = {
  discounts: {
    label: "Discounts",
    color: "var(--chart-1)",
  },
  offers: {
    label: "Offers",
    color: "var(--chart-2)",
  },
  vouchers: {
    label: "Vouchers",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", discounts: 1200, offers: 800, vouchers: 500 },
  { month: "February", discounts: 1500, offers: 1100, vouchers: 700 },
  { month: "March", discounts: 1800, offers: 1200, vouchers: 650 },
  { month: "April", discounts: 900, offers: 1300, vouchers: 600 },
  { month: "May", discounts: 1700, offers: 1250, vouchers: 800 },
  { month: "June", discounts: 2000, offers: 1400, vouchers: 900 },
];

const AppBarChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h1 className="text-lg font-medium mb-6">Total Benefits Distributed</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
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
          <Bar dataKey="discounts" fill="var(--color-discounts)" radius={4} />
          <Bar dataKey="offers" fill="var(--color-offers)" radius={4} />
          <Bar dataKey="vouchers" fill="var(--color-vouchers)" radius={4} />
        </BarChart>
      </ChartContainer>
    </motion.div>
  );
};

export default AppBarChart;
