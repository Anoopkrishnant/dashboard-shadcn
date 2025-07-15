"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const fuelData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 450 },
  { name: "Wed", value: 500 },
  { name: "Thu", value: 300 },
  { name: "Fri", value: 600 },
];

export default function FuelExpensesCard() {
  return (
    <Card className="bg-card text-card-foreground border shadow-md rounded-xl">
      <CardHeader>
        <CardTitle>Fuel Expencess </CardTitle>
        <CardDescription>As of today</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <h2 className="text-2xl font-bold mt-1"> ₹19,307</h2>
        <p className="text-orange-500 text-sm mt-1">+10.4% from last week</p>
        <div className="mt-4 h-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={fuelData}>
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#FFA500"
                fill="#FFA500"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
