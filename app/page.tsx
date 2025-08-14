import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { TokenInfo } from "@/components/token-info"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CountdownSection />
        <TokenInfo />
      </main>
    </div>
  )
}
