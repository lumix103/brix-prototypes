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
  FileImage,
  Link,
  Trash2,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
  const [activeTab, setActiveTab] = useState("AUTOMATIONS");

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
          <h2 className="text-xl font-bold mb-2">CMS OFFERS</h2>
          <div className="h-px bg-gray-800 w-full mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Free Meal Prep{" "}
                  <Button variant="outline">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </CardTitle>
                <CardDescription>Free</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 list-disc pl-4 space-y-2">
                  <li>Custom meal plans tailored to your dietary needs</li>
                  <li>Weekly grocery shopping lists included</li>
                  <li>Nutritional information and macros for each meal</li>
                  <li>Easy to follow recipes with step-by-step instructions</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Setup Automation</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Workout Routine{" "}
                  <Button variant="outline">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </CardTitle>
                <CardDescription>Subscribtion</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 list-disc pl-4 space-y-2">
                  <li>
                    Personalized workout plans based on your fitness goals
                  </li>
                  <li>Video demonstrations of all exercises</li>
                  <li>Progressive overload tracking and adjustments</li>
                  <li>Mix of strength training and cardio routines</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Setup Automation</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  1 on 1 Coaching{" "}
                  <Button variant="outline">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </CardTitle>
                <CardDescription>One Time Payment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 list-disc pl-4 space-y-2">
                  <li>
                    Weekly one-on-one sessions with a certified fitness coach
                  </li>
                  <li>Customized nutrition and workout planning</li>
                  <li>24/7 chat support for questions and motivation</li>
                  <li>Monthly progress tracking and goal adjustments</li>
                  <li>Access to exclusive coaching resources and materials</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Setup Automation</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold mb-2">CMS EDITS</h2>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
          </div>
          <div className="h-px bg-gray-800 w-full mb-4"></div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg mb-2">
                        New Fitness Classes Added!
                      </h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      We're excited to announce new fitness classes being added
                      to our schedule. Starting next week, members will have
                      access to High-Intensity Interval Training (HIIT), Yoga
                      Flow, and Strength Training sessions. Check the schedule
                      for exact times and availability.
                    </p>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-col gap-2">
                          <Button variant="ghost" size="sm">
                            <FileImage className="h-4 w-4" /> Image
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Link className="h-4 w-4" /> Link
                          </Button>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>

                <div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg mb-2">
                        Equipment Maintenance Update
                      </h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Our regular equipment maintenance is scheduled for this
                      weekend. All cardio machines and weight equipment will be
                      serviced to ensure optimal performance and safety for our
                      members. The gym will remain open during this time.
                    </p>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-col gap-2">
                          <Button variant="ghost" size="sm">
                            <FileImage className="h-4 w-4" /> Image
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Link className="h-4 w-4" /> Link
                          </Button>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>

                <div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg mb-2">
                        Holiday Hours Notice
                      </h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Please note our adjusted hours for the upcoming holiday
                      season. We will be operating on a modified schedule from
                      December 24th through January 2nd. See the front desk for
                      detailed hours.
                    </p>
                    <HoverCard>
                      <HoverCardTrigger>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex flex-col gap-2">
                          <Button variant="ghost" size="sm">
                            <FileImage className="h-4 w-4" /> Image
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Link className="h-4 w-4" /> Link
                          </Button>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
