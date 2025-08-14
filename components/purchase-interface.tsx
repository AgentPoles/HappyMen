"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, Wallet, Shield, Clock, Users, Gift, History, Calendar } from "lucide-react"

export function PurchaseInterface() {
  const [pusdAmount, setPusdAmount] = useState("")
  const [hmtAmount, setHmtAmount] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isWhitelisted, setIsWhitelisted] = useState(true)
  const [referralCode, setReferralCode] = useState("")

  const exchangeRate = 0.05 // 1 HMT = $0.05 PUSD
  const totalRaised = 1250000 // $1.25M raised
  const targetRaise = 2500000 // $2.5M target
  const progressPercentage = (totalRaised / targetRaise) * 100

  const handlePusdChange = (value: string) => {
    setPusdAmount(value)
    const numValue = Number.parseFloat(value) || 0
    setHmtAmount((numValue / exchangeRate).toFixed(2))
  }

  const handleHmtChange = (value: string) => {
    setHmtAmount(value)
    const numValue = Number.parseFloat(value) || 0
    setPusdAmount((numValue * exchangeRate).toFixed(2))
  }

  const transactions = [
    { id: 1, type: "Purchase", amount: "1000 HMT", value: "$50", status: "Completed", date: "2024-01-15" },
    { id: 2, type: "Bonus", amount: "200 HMT", value: "$10", status: "Completed", date: "2024-01-15" },
    { id: 3, type: "Referral", amount: "50 HMT", value: "$2.50", status: "Pending", date: "2024-01-14" },
  ]

  const vestingSchedule = [
    { date: "2024-03-01", percentage: 25, amount: "312.5 HMT", status: "Available" },
    { date: "2024-06-01", percentage: 25, amount: "312.5 HMT", status: "Locked" },
    { date: "2024-09-01", percentage: 25, amount: "312.5 HMT", status: "Locked" },
    { date: "2024-12-01", percentage: 25, amount: "312.5 HMT", status: "Locked" },
  ]

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading font-black text-5xl mb-4">
            Join the{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Movement
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">Secure your HappyMen Tokens now!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Purchase Interface */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="purchase" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="purchase">Purchase</TabsTrigger>
                <TabsTrigger value="referral">Referral</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="vesting">Vesting</TabsTrigger>
              </TabsList>

              <TabsContent value="purchase">
                <Card className="p-8 border-violet-600/20">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-heading font-bold text-2xl">Purchase HMT Tokens</h2>
                      {isWhitelisted && (
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Whitelisted ✓</Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">Exchange PUSD for HappyMen Tokens at launch price</p>
                  </div>

                  {/* Wallet Connection */}
                  {!isConnected ? (
                    <div className="text-center py-8">
                      <Wallet className="h-16 w-16 text-violet-600 mx-auto mb-4" />
                      <h3 className="font-heading font-bold text-xl mb-2">Connect Your Wallet</h3>
                      <p className="text-muted-foreground mb-6">Connect your wallet to participate in the IDO</p>
                      <Button
                        onClick={() => setIsConnected(true)}
                        className="bg-violet-600 hover:bg-purple-600 text-white font-semibold px-8 py-3"
                      >
                        Connect Wallet
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* From Token */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">You Pay</label>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="0.00"
                            value={pusdAmount}
                            onChange={(e) => handlePusdChange(e.target.value)}
                            className="text-2xl font-bold h-16 pr-20 border-violet-600/20 focus:border-violet-600"
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                            <span className="font-semibold">PUSD</span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">Balance: 10,000 PUSD</div>
                      </div>

                      {/* Swap Icon */}
                      <div className="flex justify-center">
                        <div className="p-2 bg-muted rounded-full border border-violet-600/20">
                          <ArrowUpDown className="h-4 w-4 text-violet-600" />
                        </div>
                      </div>

                      {/* To Token */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">You Receive</label>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="0.00"
                            value={hmtAmount}
                            onChange={(e) => handleHmtChange(e.target.value)}
                            className="text-2xl font-bold h-16 pr-20 border-violet-600/20 focus:border-violet-600"
                          />
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">HM</span>
                            </div>
                            <span className="font-semibold">HMT</span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">1 HMT = $0.05 PUSD</div>
                      </div>

                      {/* Purchase Button */}
                      <Button
                        size="lg"
                        className="w-full bg-violet-600 hover:bg-purple-600 text-white font-semibold text-lg py-6"
                        disabled={!pusdAmount || Number.parseFloat(pusdAmount) <= 0}
                      >
                        Purchase HMT Tokens
                      </Button>

                      {/* Transaction Details */}
                      <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Exchange Rate</span>
                          <span>1 HMT = $0.05 PUSD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Network Fee</span>
                          <span>~$2.50</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bonus Tokens</span>
                          <span className="text-green-500">+20% (Early Bird)</span>
                        </div>
                        {referralCode && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Referral Bonus</span>
                            <span className="text-blue-500">+5%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="referral">
                <Card className="p-8 border-violet-600/20">
                  <div className="mb-6">
                    <h2 className="font-heading font-bold text-2xl mb-2">Referral Program</h2>
                    <p className="text-muted-foreground">Earn 5% bonus tokens for every successful referral</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-lg p-6 border border-violet-600/20">
                      <h3 className="font-heading font-bold text-lg mb-2">Your Referral Code</h3>
                      <div className="flex gap-2">
                        <Input value="HAPPYMAN2024" readOnly className="font-mono" />
                        <Button variant="outline" className="border-violet-600 text-violet-600 bg-transparent">
                          Copy
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Users className="h-8 w-8 text-violet-600 mx-auto mb-2" />
                        <div className="font-bold text-xl">12</div>
                        <div className="text-sm text-muted-foreground">Referrals</div>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Gift className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <div className="font-bold text-xl">240 HMT</div>
                        <div className="text-sm text-muted-foreground">Bonus Earned</div>
                      </div>
                      <div className="text-center p-4 bg-muted/30 rounded-lg">
                        <Wallet className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <div className="font-bold text-xl">$12.00</div>
                        <div className="text-sm text-muted-foreground">Total Value</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-lg mb-4">Enter Referral Code</h3>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter referral code"
                          value={referralCode}
                          onChange={(e) => setReferralCode(e.target.value)}
                        />
                        <Button className="bg-violet-600 hover:bg-purple-600">Apply</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card className="p-8 border-violet-600/20">
                  <div className="mb-6">
                    <h2 className="font-heading font-bold text-2xl mb-2">Transaction History</h2>
                    <p className="text-muted-foreground">Track all your HMT token transactions</p>
                  </div>

                  <div className="space-y-4">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <History className="h-5 w-5 text-violet-600" />
                          <div>
                            <div className="font-semibold">{tx.type}</div>
                            <div className="text-sm text-muted-foreground">{tx.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{tx.amount}</div>
                          <div className="text-sm text-muted-foreground">{tx.value}</div>
                        </div>
                        <Badge
                          variant={tx.status === "Completed" ? "default" : "secondary"}
                          className={tx.status === "Completed" ? "bg-green-500/10 text-green-500" : ""}
                        >
                          {tx.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="vesting">
                <Card className="p-8 border-violet-600/20">
                  <div className="mb-6">
                    <h2 className="font-heading font-bold text-2xl mb-2">Vesting Schedule</h2>
                    <p className="text-muted-foreground">Your tokens will be released according to this schedule</p>
                  </div>

                  <div className="space-y-4">
                    {vestingSchedule.map((vest, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-violet-600" />
                          <div>
                            <div className="font-semibold">{vest.date}</div>
                            <div className="text-sm text-muted-foreground">{vest.percentage}% Release</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{vest.amount}</div>
                        </div>
                        <Badge
                          variant={vest.status === "Available" ? "default" : "secondary"}
                          className={vest.status === "Available" ? "bg-green-500/10 text-green-500" : ""}
                        >
                          {vest.status}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-violet-600/10 rounded-lg border border-violet-600/20">
                    <h3 className="font-heading font-bold mb-2">Total Vested Tokens</h3>
                    <div className="text-2xl font-bold">1,250 HMT</div>
                    <div className="text-sm text-muted-foreground">Available to claim: 312.5 HMT</div>
                    <Button className="mt-4 bg-violet-600 hover:bg-purple-600">Claim Available Tokens</Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* IDO Progress */}
            <Card className="p-6 border-violet-600/20">
              <h3 className="font-heading font-bold text-lg mb-4">IDO Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Raised</span>
                    <span className="font-semibold">${totalRaised.toLocaleString()}</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {progressPercentage.toFixed(1)}% of ${targetRaise.toLocaleString()} target
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-bold text-lg">2,847</div>
                    <div className="text-xs text-muted-foreground">Participants</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">6d 14h</div>
                    <div className="text-xs text-muted-foreground">Time Left</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Security Features */}
            <Card className="p-6 border-violet-600/20">
              <h3 className="font-heading font-bold text-lg mb-4">Security & Trust</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Smart Contract Audited</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Vesting Schedule: 6 months</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wallet className="h-5 w-5 text-violet-600" />
                  <span className="text-sm">Multi-sig Treasury</span>
                </div>
              </div>
            </Card>

            {/* Token Allocation */}
            <Card className="p-6 border-violet-600/20">
              <h3 className="font-heading font-bold text-lg mb-4">Token Allocation</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">IDO Sale</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team & Advisors</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Community Rewards</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Liquidity Pool</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Marketing</span>
                  <span className="font-semibold">10%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
