"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export default function Hero() {
    const typedText = useTypingEffect([
        "Computer Science Student.",
        "AI & ML Enthusiast.",
        "Full Stack Developer.",
    ]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10 mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-accent font-mono mb-4 tracking-wider flex items-center justify-center lg:justify-start"
                        >
                            <span>{typedText}</span>
                            <span className="w-2 h-5 bg-accent ml-1 animate-pulse"></span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
                            Sayan Mondal.
                        </h1>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-soft mb-6">
                            I build AI-driven solutions & scalable web apps.
                        </h2>
                        <p className="text-lg text-soft/80 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-normal">
                            I specialize in bridging the gap between cutting-edge Artificial Intelligence
                            and robust, user-centric web applications.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <Button href="#projects" variant="primary" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 ease-out hover:cursor-pointer">
                                Check out my work!
                            </Button>
                            <Button href="#contact" variant="outline" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 ease-out hover:cursor-pointer">
                                Contact Me
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg lg:max-w-xl relative flex justify-center"
                    >
                        <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] rounded-2xl overflow-hidden shadow-2xl z-10 hover:shadow-[0_0_24px_6px_rgba(252,163,17,0.55)] transition-shadow duration-400 ease-in-out group cursor-pointer">
                            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none mix-blend-multiply" />
                            <Image
                                src="/profile.jpg"
                                alt="Sayan Mondal Profile"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute top-4 left-[calc(50%-144px)] sm:top-6 sm:left-[calc(50%-184px)] lg:top-6 lg:-left-4 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] aspect-square border-2 border-accent rounded-2xl -z-10 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2 pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
