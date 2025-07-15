"use client";

import { useEffect, useState } from "react";
import { columns } from "./columns";

import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { PuffLoader } from "react-spinners";

const CouponsPage = () => {
  const [coupons, setCoupons] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const res = await fetch("/data/data.json");
      const json = await res.json();
      setCoupons(json.coupons || []);
    } catch (err) {
      console.error("Error fetching coupons:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleUpdateClick = () => {
    fetchCoupons();
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between mb-4 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold text-lg">All Coupons</h1>
        <Button onClick={handleUpdateClick}>Refresh</Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[500px]">
          <PuffLoader color="#049dd5" />
        </div>
      ) : (
        <DataTable columns={columns} data={coupons} />
      )}
    </div>
  );
};

export default CouponsPage;
