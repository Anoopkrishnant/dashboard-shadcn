import { TrendingUp, Gift, BadgePercent } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export function SectionCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₹1,25,000.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Overall Discounts Earned</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₹37,400
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <BadgePercent className="w-4 h-4 mr-1" />
              +8%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Discounts claimed on purchases
          </div>
          <div className="text-muted-foreground">Updated this week</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Gift Cards</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₹21,750
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <Gift className="w-4 h-4 mr-1" />
              +5 New
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Recent rewards and vouchers
          </div>
          <div className="text-muted-foreground">Claimed this month</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Customer Reach</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            82,500
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp className="w-4 h-4 mr-1" />
              +15.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Audience growth this quarter <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Includes new and returning customers
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
