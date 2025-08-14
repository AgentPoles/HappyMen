import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-black text-5xl lg:text-7xl leading-tight">
                Empower Your{" "}
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Future
                </span>{" "}
                with HMT
              </h1>
              <p className="text-xl text-muted-foreground font-sans leading-relaxed">
                Join the movement of empowered men building wealth and community. HappyMen Token represents strength,
                positivity, and financial freedom.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/purchase">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-purple-600 text-white font-semibold text-lg px-8 py-6 group"
                >
                  Buy HMT Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold text-lg px-8 py-6 bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl">$2.5M</div>
                <div className="text-sm text-muted-foreground">Target Raise</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl">10,000+</div>
                <div className="text-sm text-muted-foreground">Community Members</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl flex items-center gap-1">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Rising
                </div>
                <div className="text-sm text-muted-foreground">Market Trend</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/successful-men-celebration.png"
                alt="Happy confident men celebrating success"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
