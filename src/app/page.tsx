"use client";

import { useEffect, useState } from "react";

import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import { SectionCards } from "@/components/Card";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import RewardPointsRadialChart from "@/components/RewardPointsCard";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PuffLoader } from "react-spinners";

const Loader = () => (
  <div className="flex items-center justify-center h-[70vh]">
    <div className="flex items-center gap-3">
      <PuffLoader color="#049dd5" />
    </div>
  </div>
);

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-6">
      <SectionCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Latest Transactions" />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <RewardPointsRadialChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppPieChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppAreaChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">
          <TodoList />
        </div>
      </div>

      <BenefitsSection />
    </div>
  );
};

export default Homepage;
