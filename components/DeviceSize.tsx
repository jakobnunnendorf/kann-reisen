"use client";
import React, { useState, useEffect } from "react";
import Desktop from "./Desktop/Desktop";
// import { Tablet } from "./Tablet/Tablet";
// import { Mobile } from "./Mobile/Mobile";

export function DeviceSize() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    handleResize(); // Set initial screen width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (screenWidth === null) {
    return null; // Or a loading state if you prefer
  } else if (screenWidth < 450) {
    return <Desktop />;
  } else if (screenWidth >= 450 && screenWidth < 1280) {
    return <Desktop />;
  } else {
    return <Desktop />;
  }
}
