import { Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
            <span className="text-xl font-bold">Jupiter</span>
          </div>

          <nav className="flex items-center space-x-6">
            <a href="#" className="text-green-400 font-medium">
              Swap
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Pro
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Perps
            </a>
            <a href="#" className="text-slate-400 hover:text-white flex items-center gap-1">
              Lend
              <span className="bg-green-500 text-xs px-1.5 py-0.5 rounded text-black font-medium">Beta</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              Portfolio
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              More
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search tokens or wallet"
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400 w-64"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-400">Watchlist</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="text-slate-400">SOL</span>
                <span className="text-white">$182.14</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-slate-400">JUP</span>
                <span className="text-white">$0.52578</span>
              </div>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>

          <Button className="bg-green-400 hover:bg-green-500 text-black font-medium">Connect</Button>
        </div>
      </div>
    </header>
  )
}
