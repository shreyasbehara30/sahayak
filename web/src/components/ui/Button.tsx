"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Note: I did not install class-variance-authority or radix-ui/react-slot.
// I should probably simplify this to standard React props or install them.
// Given the requirements, I will make a simple robust component without CVA if I strictly follow "Tech stack".
// But CVA is standard in modern Next.js.
// I'll implement a simpler version using strict Tailwind maps to avoid extra deps if I haven't installed them.
// Wait, I only installed `framer-motion lucide-react clsx tailwind-merge`.
// So I will build it without CVA/Slot for now to be lean, or I can add them.
// I'll stick to simple props.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean; // skipping asChild implementation for simplicity unless needed
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-sahayak-green text-white hover:opacity-90 shadow-md",
            secondary: "bg-[#E8F5E9] text-sahayak-green hover:bg-[#C8E6C9]", // Light green
            outline: "border-2 border-sahayak-green text-sahayak-green hover:bg-sahayak-green/10",
            ghost: "text-sahayak-green hover:bg-sahayak-green/10",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-[24px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sahayak-green disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

// Also exporting a motion version if needed
export const MotionButton = motion.create(Button);
