"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUpDown, Settings, Zap, Clock, RotateCcw, ChevronDown } from "lucide-react"

export function SwapInterface() {
  const [activeTab, setActiveTab] = useState("instant")

  return (
    <div className="max-w-md mx-auto">
      <Card className="bg-slate-800 border-slate-700 p-6">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-slate-900 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("instant")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "instant" ? "bg-green-400 text-black" : "text-slate-400 hover:text-white"
            }`}
          >
            <Zap className="h-4 w-4" />
            <span>Instant</span>
          </button>
          <button
            onClick={() => setActiveTab("trigger")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "trigger" ? "bg-green-400 text-black" : "text-slate-400 hover:text-white"
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>Trigger</span>
          </button>
          <button
            onClick={() => setActiveTab("recurring")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "recurring" ? "bg-green-400 text-black" : "text-slate-400 hover:text-white"
            }`}
          >
            <RotateCcw className="h-4 w-4" />
            <span>Recurring</span>
          </button>
        </div>

        {/* Settings */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-400">Ultra V2</span>
          </div>
          <Button variant="ghost" size="icon" className="text-slate-400">
            <Settings className="h-4 w-4" />
          </Button>
        </div>

        {/* Selling Section */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-400 mb-2 block">Selling</label>
            <div className="bg-slate-900 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">$</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">USDC</span>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-500">0.00</div>
                  <div className="text-sm text-slate-500">$0</div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap Arrow */}
          <div className="flex justify-center">
            <Button variant="ghost" size="icon" className="bg-slate-700 hover:bg-slate-600 rounded-full">
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Buying Section */}
          <div>
            <label className="text-sm text-slate-400 mb-2 block">Buying</label>
            <div className="bg-slate-900 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">S</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">SOL</span>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-500">0</div>
                  <div className="text-sm text-slate-500">$0</div>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Button */}
          <Button className="w-full bg-green-400 hover:bg-green-500 text-black font-medium py-3 text-lg">
            Connect
          </Button>

          {/* Token Info */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xs">$</span>
              </div>
              <div>
                <div className="text-sm font-medium">USDC</div>
                <div className="text-xs text-slate-400">EPjF...Dt1v</div>
              </div>
              <div className="text-right">
                <div className="text-sm">$0.99979</div>
                <div className="text-xs text-red-400">0%</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-xs">S</span>
              </div>
              <div>
                <div className="text-sm font-medium">SOL</div>
                <div className="text-xs text-slate-400">So11...1112</div>
              </div>
              <div className="text-right">
                <div className="text-sm">$182.14</div>
                <div className="text-xs text-green-400">0.2%</div>
              </div>
            </div>
          </div>

          {/* Open Swap Page Link */}
          <div className="pt-4">
            <button className="flex items-center justify-between w-full text-left text-slate-400 hover:text-white">
              <span>Open Swap page</span>
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
