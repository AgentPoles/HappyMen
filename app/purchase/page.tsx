import { PurchaseInterface } from "@/components/purchase-interface"
import { Navigation } from "@/components/navigation"

export default function PurchasePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <PurchaseInterface />
      </main>
    </div>
  )
}
