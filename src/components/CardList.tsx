"use client";

import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Gift,
  PercentCircle,
  ShoppingCart,
  Ticket,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
const giftAndCouponTransactions = [
  {
    id: 1,
    title: "Gift Card Redeemed",
    badge: "Amazon ₹1000 Gift Card",
    amount: 1000,
    icon: Gift,
  },
  {
    id: 2,
    title: "Discount Coupon Applied",
    badge: "Flat ₹500 OFF",
    amount: 500,
    icon: PercentCircle,
  },
  {
    id: 3,
    title: "Gift Purchase",
    badge: "Flipkart Gift Card",
    amount: 2000,
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "Coupon Used",
    badge: "15% OFF on Electronics",
    amount: 1500,
    icon: Ticket,
  },
  {
    id: 5,
    title: "Loyalty Reward",
    badge: "₹200 Voucher - Myntra",
    amount: 200,
    icon: WalletCards,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {giftAndCouponTransactions.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              className="flex flex-row items-center justify-between gap-4 p-4"
            >
              <div className="w-12 h-12 rounded-sm flex items-center justify-center bg-muted">
                <Icon
                  className="w-6 h-6"
                  style={{ color: "oklch(0.55 0.23 240)" }}
                />
              </div>
              <CardContent className="flex-1 p-0">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <Badge variant="secondary">{item.badge}</Badge>
              </CardContent>
              <CardFooter className="p-0 font-medium text-right text-sm">
                ₹{(item.amount / 1000).toFixed(1)}K
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CardList;
