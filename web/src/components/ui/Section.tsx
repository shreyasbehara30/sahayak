import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

export function Section({ className, container = true, ...props }: SectionProps) {
    return (
        <section
            className={cn("py-16 md:py-24", className)}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6">
                    {props.children}
                </div>
            ) : (
                props.children
            )}
        </section>
    );
}
