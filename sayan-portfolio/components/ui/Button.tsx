"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface ButtonProps extends React.PropsWithChildren<Omit<HTMLMotionProps<"button">, "ref">> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    className?: string;
    href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", children, className = "", href, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center px-6 h-11 font-semibold rounded-xl transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-accent text-primary shadow-[0_4px_14px_0_rgba(252,163,17,0.39)] hover:shadow-[0_6px_20px_rgba(252,163,17,0.23)] hover:bg-opacity-90",
            secondary: "bg-white/10 text-pure hover:bg-white/15 backdrop-blur-md border border-white/5",
            outline: "border-2 border-accent text-accent hover:bg-accent hover:text-primary",
            ghost: "text-soft hover:text-accent hover:bg-white/5",
        };

        const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

        const content = (
            <motion.button
                ref={ref}
                className={combinedClassName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.button>
        );

        if (href) {
            return (
                <a
                    href={href}
                    className="inline-block"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                    {content}
                </a>
            );
        }

        return content;
    }
);

Button.displayName = "Button";
