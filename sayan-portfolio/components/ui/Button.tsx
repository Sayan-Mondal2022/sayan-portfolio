"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ButtonProps extends React.PropsWithChildren<Omit<HTMLMotionProps<"button">, "ref">> {
    variant?: "primary" | "outline" | "ghost";
    className?: string;
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", children, className = "", href, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-accent text-primary hover:bg-opacity-90 shadow-[0_0_15px_rgba(252,163,17,0.3)]",
            outline: "border-2 border-accent text-accent hover:bg-accent hover:text-primary",
            ghost: "text-soft hover:text-accent hover:bg-secondary",
        };

        const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

        const content = (
            <motion.button
                ref={ref}
                className={combinedClassName}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </motion.button>
        );

        if (href) {
            return (
                <a href={href} className="inline-block">
                    {content}
                </a>
            );
        }

        return content;
    }
);

Button.displayName = "Button";
