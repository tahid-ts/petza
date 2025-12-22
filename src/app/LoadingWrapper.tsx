"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/ui/loading/Loading";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Show briefly on route change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Loading isLoading={isLoading} />
      {children}
    </>
  );
}
