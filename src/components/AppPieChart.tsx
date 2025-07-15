"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const chartConfig = {
  total: {
    label: "Total",
  },
  vouchers: {
    label: "Vouchers",
    color: "var(--chart-1)",
  },
  gifts: {
    label: "Gifts",
    color: "var(--chart-2)",
  },
  discounts: {
    label: "Discounts",
    color: "var(--chart-3)",
  },
  coupons: {
    label: "Coupons",
    color: "var(--chart-4)",
  },
  others: {
    label: "Others",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const chartData = [
  { type: "vouchers", count: 120, fill: "var(--chart-1)" },
  { type: "gifts", count: 80, fill: "var(--chart-2)" },
  { type: "discounts", count: 150, fill: "var(--chart-3)" },
  { type: "coupons", count: 60, fill: "var(--chart-4)" },
  { type: "others", count: 40, fill: "var(--chart-5)" },
];

const AppPieChart = () => {
  const totalCount = chartData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <motion.div
      className="p-2 border shadow-md rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h1 className="text-lg font-medium mb-6">Benefits Distribution</h1>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="type"
            innerRadius={60}
            strokeWidth={5}
          >
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
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalCount}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Total Issued
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-4 flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground text-center pb-4">
          Vouchers, gifts, discounts, coupons, and others issued in the last 6
          months
        </div>
      </div>
    </motion.div>
  );
};

export default AppPieChart;
