import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrendingSidebar() {
  const cookingTokens = [
    { name: "RAY", symbol: "RAY", change: "+8.59%", volume: "$57.8M", rank: 1 },
    { name: "PENGU", symbol: "PENGU", change: "+3.27%", volume: "$27.4M", rank: 2 },
    { name: "USELESS", symbol: "USELESS", change: "+7.18%", volume: "$21.0M", rank: 3 },
  ]

  const launchpadRunners = [
    { name: "BELIEVE", symbol: "BELIEVE", change: "+144x", mc: "$2.28M" },
    { name: "UPRIGHT", symbol: "UPRIGHT", change: "+74x", mc: "$1.29M" },
    { name: "AGI", symbol: "AGI", change: "+145x", mc: "$1.31M" },
  ]

  return (
    <aside className="w-80 bg-slate-900 border-l border-slate-800 p-4">
      {/* Cooking Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-orange-400" />
            <span className="font-medium">Cooking</span>
          </div>
          <Button variant="ghost" className="text-slate-400 text-sm">
            More
          </Button>
        </div>

        <div className="space-y-3">
          {cookingTokens.map((token, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <span className="text-slate-400 text-sm">#{token.rank}</span>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{token.symbol.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-green-400 text-sm">{token.change}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">Vol</div>
                <div className="text-sm">{token.volume}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Launchpad Runners Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium">Launchpad Runners</span>
          <Button variant="ghost" className="text-slate-400 text-sm">
            More
          </Button>
        </div>

        <div className="space-y-3">
          {launchpadRunners.map((token, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{token.symbol.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium">{token.symbol}</div>
                  <div className="text-green-400 text-sm">{token.change}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">MC</div>
                <div className="text-sm">{token.mc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </aside>
  )
}
