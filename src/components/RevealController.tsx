"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { setupReveals } from "@/lib/motion";

/** Wires up scroll reveals for the current page; re-scans after client-side navigation. Renders nothing. */
export default function RevealController() {
  const pathname = usePathname();
  useEffect(() => setupReveals(), [pathname]);
  return null;
}
