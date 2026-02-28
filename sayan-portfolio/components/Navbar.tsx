"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            window.scrollTo({
                top: href === "#home" ? 0 : element.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-primary/80 backdrop-blur-md shadow-lg py-4 border-b border-white/5"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 cursor-pointer"
                        onClick={(e) => scrollToSection(e as any, "#home")}
                    >
                        <Image
                            src="/logo.png"
                            alt="Sayan Mondal Logo"
                            width={50}
                            height={50}
                            className="object-contain hover:scale-105 transition-transform"
                            priority
                        />
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e as any, link.href)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -2 }}
                                className="text-soft hover:text-accent font-medium transition-colors text-sm uppercase tracking-wider relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-pure hover:text-accent focus:outline-none transition-colors p-2"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e as any, link.href)}
                                    className="block px-3 py-3 rounded-md text-base font-medium text-soft hover:text-primary hover:bg-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
