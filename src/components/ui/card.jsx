import * as React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-xl border bg-white text-gray-900 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
