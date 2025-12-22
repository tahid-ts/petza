"use client";
import React, { useEffect, useState } from "react";

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  const [showLoader, setShowLoader] = useState(isLoading); // Initialize to match isLoading for immediate display
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
      setDoorsOpen(false);
    } else {
      setDoorsOpen(true);
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!showLoader) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-1000 overflow-hidden">
      <div
        className={`
        absolute inset-0 z-30 flex items-center justify-center
        transition-opacity duration-500 ease-out
        ${doorsOpen ? "opacity-0" : "opacity-100"}
      `}
      >
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-border-color-one animate-spin"></div>
          <div
            className="absolute inset-2 border-4 border-transparent rounded-full border-t-primary animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute inset-4 border-4 border-transparent rounded-full border-t-bg-color-two animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
      </div>

      <div
        className={`
          absolute top-0 left-0 w-1/2 h-full bg-white z-20
          transition-transform duration-1000 ease-in-out
          ${doorsOpen ? "-translate-x-full" : "translate-x-0"}
        `}
      ></div>

      <div
        className={`
          absolute top-0 right-0 w-1/2 h-full bg-white z-20
          transition-transform duration-1000 ease-in-out
          ${doorsOpen ? "translate-x-full" : "translate-x-0"}
        `}
      ></div>
    </div>
  );
};

export default Loading;
