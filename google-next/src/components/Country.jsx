"use client";

import { useState, useEffect } from "react";

export default function Country() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      const country = data.country;
      setCountry(country);
    };

    getCountry();
  }, []);

  return <div>{country}</div>;
}
