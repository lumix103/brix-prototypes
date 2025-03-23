"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 286, mobile: 280, sales: 100 },
  { month: "February", desktop: 505, mobile: 500, sales: 200 },
  { month: "March", desktop: 337, mobile: 320, sales: 300 },
  { month: "April", desktop: 173, mobile: 190, sales: 400 },
  { month: "May", desktop: 309, mobile: 330, sales: 500 },
  { month: "June", desktop: 314, mobile: 340, sales: 600 },
];

const chartConfig = {
  desktop: {
    label: "Vistors",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Joined",
    color: "hsl(var(--chart-2))",
  },
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function BoostedBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Boosted Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Boosted Sales increased average by an average of 20% compared to
          unboosted stats <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total boosted stats for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
