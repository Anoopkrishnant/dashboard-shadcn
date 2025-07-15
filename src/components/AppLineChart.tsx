"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { month: "January", gifts: 50, coupons: 80, discounts: 120, sales: 100 },
  { month: "February", gifts: 40, coupons: 90, discounts: 110, sales: 130 },
  { month: "March", gifts: 60, coupons: 100, discounts: 140, sales: 150 },
  { month: "April", gifts: 70, coupons: 120, discounts: 160, sales: 170 },
  { month: "May", gifts: 65, coupons: 110, discounts: 150, sales: 160 },
  { month: "June", gifts: 75, coupons: 130, discounts: 180, sales: 190 },
];

const chartConfig = {
  gifts: { label: "Gifts", color: "#A78BFA" },
  coupons: { label: "Coupons", color: "#F87171" },
  discounts: { label: "Discounts", color: "#34D399" },
  sales: { label: "Sales", color: "#60A5FA" },
} satisfies ChartConfig;

const AppLineChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        {(Object.keys(chartConfig) as (keyof typeof chartConfig)[]).map(
          (key) => (
            <Line
              key={key}
              dataKey={key}
              type="monotone"
              stroke={chartConfig[key].color}
              strokeWidth={2}
              dot={false}
            />
          )
        )}
      </LineChart>
    </ChartContainer>
  );
};

export default AppLineChart;
