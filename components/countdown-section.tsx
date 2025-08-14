"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set IDO launch date (7 days from now for demo)
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-4xl mb-4">IDO Launching In</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Don't miss your chance to be part of the HappyMen revolution
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <Card key={item.label} className="p-6 bg-card border-violet-600/20">
              <div className="font-heading font-black text-4xl text-violet-600 mb-2">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">{item.label}</div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-xl p-6 border border-violet-600/20">
          <h3 className="font-heading font-bold text-xl mb-2">Early Bird Special</h3>
          <p className="text-muted-foreground">First 1000 participants get 20% bonus tokens + exclusive HappyMen NFT</p>
        </div>
      </div>
    </section>
  )
}
