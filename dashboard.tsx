"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("AUTOMATIONS")

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="relative w-48 bg-gray-100 border-r border-gray-200">
        <div className="flex flex-col h-full">

          {/* Menu items */}
          {["HOME", "SALES", "BOOST", "AUTOMATIONS", "SUPPORT", "SHARE", "EDIT", "MARKETPLACE", "MAIN MENU"].map(
            (item) => (
              <button
                key={item}
                className={`relative z-10 py-3 font-bold text-center ${
                  activeTab === item ? "bg-blue-500 text-white" : "text-gray-900"
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-black">WELCOME TO YOUR DASHBOARD JOSH.</h1>
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

        {/* Marketing Tools Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">MARKETING TOOLS</h2>
          <div className="h-px bg-gray-800 w-full mb-4"></div>
          <div className="flex items-center gap-4 text-lg font-medium ml-2">
            <span>EMAIL</span>
            <span className="text-gray-500">/</span>
            <span>SMS</span>
            <span className="text-gray-500">/</span>
            <span>ADS</span>
          </div>
        </div>

        {/* Posting Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">POSTING</h2>
          <div className="h-px bg-gray-800 w-full mb-4"></div>
          <div className="flex items-center gap-4 text-lg font-medium ml-2">
            <span>BRIX</span>
            <span className="text-gray-500">/</span>
            <span>SHARE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

