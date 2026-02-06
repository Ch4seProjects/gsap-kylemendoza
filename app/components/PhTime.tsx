"use client";

import { useEffect, useState } from "react";

function getPhTime() {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export default function PhTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(getPhTime());
    const interval = setInterval(() => setTime(getPhTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}
