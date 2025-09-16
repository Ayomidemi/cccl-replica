"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag'> {
  variant?: "primary" | "secondary" | "outline" | "outlineWhite";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex cursor-pointer items-center justify-center font-semibold font-impact transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#E5792B] text-white focus:ring-[#E5792B]",
    secondary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-800 hover:text-white focus:ring-orange-500",
    outlineWhite: "border-2 border-[#E5792B] text-white hover:bg-[#E5792B] focus:ring-[#E5792B]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
