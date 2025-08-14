import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">HM</span>
            </div>
            <span className="font-heading font-bold text-xl">HappyMen</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/#tokenomics" className="text-muted-foreground hover:text-foreground transition-colors">
              Tokenomics
            </Link>
            <Link href="/#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </Link>
          </div>

          <Link href="/purchase">
            <Button className="bg-violet-600 hover:bg-purple-600 text-white font-semibold">Buy HMT Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
