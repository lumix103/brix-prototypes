"use client";

import { ComboboxDemo } from "@/components/Combobox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import {
  ArrowDown,
  ArrowUp,
  Search,
  House,
  HelpCircle,
  Zap,
  ShoppingCart,
  Share,
  Pencil,
  Menu,
  ChartLine,
  Lightbulb,
  Users,
  Copy,
  Plus,
  TrendingUpIcon,
  TrendingDownIcon,
} from "lucide-react";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { Badge } from "@/components/ui/badge";
import { TableDemo } from "@/components/tabledemo";
import { BoostedTableDemo } from "@/components/boosted-table";
import { BoostedBar } from "@/components/boosted-bar";
import { UnBoostedBar } from "@/components/unboosted-bar";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("SALES");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="relative w-48 bg-gray-100 border-r border-gray-200">
        <div className="flex flex-col h-full">
          <div className="h-24 p-4 flex items-center gap-4 border-b border-gray-300">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <h1 className=" font-bold">XM FITNESS</h1>
          </div>
          {/* Menu items */}
          {[
            { desc: "HOME", icon: House },
            { desc: "SALES", icon: ShoppingCart },
            { desc: "ANALYTICS", icon: ChartLine },
            { desc: "BOOST", icon: ArrowUp },
            { desc: "AUTOMATIONS", icon: Zap },
            { desc: "CMS", icon: Pencil },
            { desc: "TEAM", icon: Users },
            { desc: "FAQ'S", icon: Lightbulb },
            { desc: "SUPPORT", icon: HelpCircle },

            { desc: "MENU", icon: Menu },
          ].map((item) => (
            <button
              key={item.desc}
              className={`relative z-10 py-3 font-bold flex pl-4 gap-2 items-center text-center ${
                activeTab === item.desc
                  ? "bg-blue-500 text-white"
                  : "text-gray-900"
              }`}
              onClick={() => setActiveTab(item.desc)}
            >
              <item.icon /> <p>{item.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5"
                stroke="currentColor"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-black">
              WELCOME TO YOUR DASHBOARD JOSH.
            </h1>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH"
              className="pl-4 pr-10 py-2 w-64 rounded-full border border-gray-300 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Posting Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold ">Your Boosted Stats</h2>
            <Button>Create Boost</Button>
          </div>
          <div className="h-px bg-gray-800 w-full mb-4"></div>
          <div className="flex items-center gap-4 text-lg font-medium ml-2">
            <Card className="w-1/3">
              <CardHeader className="relative">
                <CardDescription>Boosted Sales</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  (+800 sales), +$5,000 more sold since boosted.
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    10%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Trending Up this month <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Boosted Sales for the last month.
                </div>
              </CardFooter>
            </Card>
            <Card className="w-1/3">
              <CardHeader className="relative">
                <CardDescription>Boosted Joined</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  (+800) 92% more joined since boosted.
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    10%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Trending Up this month <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Boosted Joined for the last month.
                </div>
              </CardFooter>
            </Card>
            <Card className="w-1/3">
              <CardHeader className="relative">
                <CardDescription>Boosted Vistors</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  (+800) 92% more vistors since boosted.
                </CardTitle>
                <div className="absolute right-4 top-4">
                  <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    10%
                  </Badge>
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Trending Up this month <TrendingUpIcon className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Boosted Vistors for the last month.
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mb-8 bg-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">BOOSTED ORDERS</h2>
          <div className="h-px bg-gray-800 w-full mb-4"></div>
          <BoostedTableDemo />
        </div>
        <div className="mb-8 flex gap-4 bg-white p-4 rounded-lg">
          <div className="w-1/2">
            <UnBoostedBar />
          </div>
          <div className="w-1/2">
            <BoostedBar />
          </div>
        </div>
      </div>
    </div>
  );
}
