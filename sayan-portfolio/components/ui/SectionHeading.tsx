"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
    return (
        <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block"
            >
                {title}
                <span className="block h-1 w-1/2 bg-accent mt-2 mx-auto rounded-full" />
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-soft text-lg max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};
