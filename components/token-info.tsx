import { Card } from "@/components/ui/card"
import { Coins, Users, Shield, Zap } from "lucide-react"

export function TokenInfo() {
  const features = [
    {
      icon: Coins,
      title: "Deflationary Mechanism",
      description: "2% of every transaction is burned, creating scarcity and value appreciation",
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "HMT holders vote on key decisions and shape the future of HappyMen",
    },
    {
      icon: Shield,
      title: "Audited & Secure",
      description: "Smart contracts audited by leading security firms for your peace of mind",
    },
    {
      icon: Zap,
      title: "Utility & Rewards",
      description: "Stake HMT to earn rewards and access exclusive community benefits",
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              HappyMen Token?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for the modern man who values community, growth, and financial empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-lg transition-shadow border-violet-600/10 hover:border-violet-600/30"
            >
              <feature.icon className="h-12 w-12 text-violet-600 mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="font-heading font-bold text-3xl mb-4">Ready to Join the Movement?</h3>
          <p className="text-lg mb-6 opacity-90">Stand tall with HappyMen and be part of something greater</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold text-2xl">1 HMT = $0.05</div>
              <div className="text-sm opacity-75">Launch Price</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold text-2xl">50M</div>
              <div className="text-sm opacity-75">Total Supply</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-bold text-2xl">30%</div>
              <div className="text-sm opacity-75">IDO Allocation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
