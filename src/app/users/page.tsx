'use client';
import { useEffect } from "react";

const UsersPage = () => {
      useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapiserver.reactbd.org/api/coupons?page=1&perPage=10"); // 🔁 Replace with your real API
        const data = await response.json();
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
    
  return (
    <div className=''>UsersPage</div>
  )
}

export default UsersPage