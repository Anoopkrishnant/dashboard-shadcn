"use client";

import { Gift, PercentCircle, TicketCheck, WalletCards } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
const benefits = [
  {
    id: 1,
    title: "Flat ₹500 OFF",
    icon: PercentCircle,
    description: "Valid on purchases above ₹2500. Expires in 5 days.",
    cta: "Claim",
  },
  {
    id: 2,
    title: "Amazon Gift Card",
    icon: Gift,
    description: "Get ₹1000 Amazon voucher for referrals.",
    cta: "View",
  },
  {
    id: 3,
    title: "Myntra Coupon",
    icon: TicketCheck,
    description: "Use this voucher for 25% OFF on fashion products.",
    cta: "Claim",
  },
  {
    id: 4,
    title: "Wallet Cashback",
    icon: WalletCards,
    description: "Earn ₹200 cashback on wallet top-ups above ₹1000.",
    cta: "Claim",
  },
];

export function BenefitsSection() {
  return (
    <motion.div
      className="p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h2 className="text-lg font-medium mb-4">🎁 Benefits for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <Card
              key={benefit.id}
              className="flex flex-col justify-between h-full"
            >
              <CardHeader className="pb-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-base">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">
                  {benefit.cta}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
