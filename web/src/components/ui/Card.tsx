import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-[24px] bg-white p-6 shadow-sm border border-sahayak-green/10",
                className
            )}
            {...props}
        />
    );
}
