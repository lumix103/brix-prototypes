"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CircleUser,
  LogOut,
  MessageSquare,
  Settings,
  X,
  Moon,
  Sun,
  View,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

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
  User,
  CreditCard,
  ShoppingBag,
  Globe,
  Star,
  MonitorUp,
  Network,
  Store,
} from "lucide-react";

import {
  HomeIcon,
  BookmarkIcon,
  ViewfinderCircleIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function DashboardPage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("xm-fitness");
  const [theme, setTheme] = useState("light");

  const businesses = [
    { id: "xm-fitness", name: "XM FITNESS" },
    { id: "acme-corp", name: "ACME CORPORATION" },
    { id: "tech-solutions", name: "TECH SOLUTIONS" },
    { id: "green-energy", name: "GREEN ENERGY CO." },
  ];

  const [activeTab, setActiveTab] = useState("SALES");

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="relative w-48 bg-gray-100 border-r border-gray-200">
        <div className="flex flex-col h-full">
          <div className="h-24 p-4 flex items-center gap-4 border-b border-gray-300">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <h1 className=" font-bold">XM FITNESS</h1>
          </div>
          {/* Menu items */}
          {[
            { desc: "HOME", icon: HomeIcon },
            { desc: "FAVORITES", icon: BookmarkIcon },
            { desc: "CONNECT", icon: ChatBubbleLeftRightIcon },
            { desc: "NETWORK", icon: Network },
            { desc: "POINT SHOP", icon: TicketIcon },
            { desc: "BOUNTIES", icon: ViewfinderCircleIcon },
            { desc: "FAQ'S", icon: QuestionMarkCircleIcon },
            { desc: "MENU", icon: Bars3Icon },
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
              <item.icon className="size-6" /> <p>{item.desc}</p>
            </button>
          ))}

          <div className="ml-1 mt-auto flex flex-row gap-4 items-center">
            <div className="flex flex-col items-center py-4">
              <Button
                variant="ghost"
                className="self-start text-primary"
                onClick={() => setIsProfileOpen(true)}
              >
                <CircleUser className="size-6" />
              </Button>
            </div>
            <Button
              variant="ghost"
              className="flex items-center gap-2 rounded-lg px-3 py-2 justify-start hover:bg-muted"
              onClick={() => setIsSettingsOpen(true)}
            >
              <Settings className="size-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6">
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

        <section className="mb-8">
          <h3 className="mb-4 text-xl font-bold">QUICK ACTIONS</h3>
          <div className="h-px bg-gray-800 w-full mb-4"></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Liked BRIX'S</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">23</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  SEE MORE
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Points</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">115,583</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  SHOP
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  3 <span className="text-base font-normal">messages</span>
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  CHAT
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="mb-4 text-xl font-bold">Recent Activity</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-3xl">XM FITNESS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row justify-around">
                  <div className="flex flex-col gap-1 w-1/3 text-left">
                    <p className="text-xl">Time Spent</p>
                    <p>34 hours</p>
                  </div>
                  <div className="flex flex-col gap-1 w-1/3 text-left">
                    <p className="text-xl">Last Visited</p>
                    <p>3/23/2025</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Visit
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">XM FITNESS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1 border w-1/3 text-center">
                  <p className="text-xl">Time Spent</p>
                  <p>34 hours</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Visit
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">XM FITNESS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1 border w-1/3 text-center">
                  <p className="text-xl">Time Spent</p>
                  <p>34 hours</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Visit
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      {/* Profile Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Account Information</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <div className="p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                <CircleUser className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">BRIX PAGE SELECTED</p>
                <Select
                  value={selectedBusiness}
                  onValueChange={setSelectedBusiness}
                >
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select business" />
                  </SelectTrigger>
                  <SelectContent>
                    {businesses.map((business) => (
                      <SelectItem key={business.id} value={business.id}>
                        {business.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mb-4 w-full" variant="outline">
              Switch to Consumer Account
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
              <Button variant="outline" size="sm">
                Feedback/Support
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-md px-3 py-2 hover:bg-muted"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-md px-3 py-2 hover:bg-muted"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-md px-3 py-2 hover:bg-muted"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Purchases
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-md px-3 py-2 hover:bg-muted"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  LANGUAGE
                </Button>
              </li>
            </ul>

            <Separator className="my-4" />

            <div className="space-y-4">
              <Label className="text-base">Theme</Label>
              <RadioGroup
                defaultValue="light"
                value={theme}
                onValueChange={setTheme}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label
                    htmlFor="light"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Sun className="h-4 w-4" />
                    Light
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label
                    htmlFor="dark"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Moon className="h-4 w-4" />
                    Dark
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
