import * as React from "react";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border p-4 shadow-sm bg-white ${className}`}>{children}</div>;
}
