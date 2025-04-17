import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
