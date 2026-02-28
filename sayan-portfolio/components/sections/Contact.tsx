"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FadeInSection } from "../ui/FadeInSection";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const validateForm = () => {
        if (name.trim().length < 2) return "Name must be at least 2 characters.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) return "Please provide a valid email.";
        if (message.trim().length < 10) return "Message must be at least 10 characters.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            setStatus("error");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");

            // Reset after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err: any) {
            setErrorMessage(err.message || "Failed to send message.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-secondary/10">
            <FadeInSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!"
                />

                <div className="grid md:grid-cols-5 gap-12 mt-12 bg-primary/40 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-md">

                    {/* Contact Info (Left Column) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-pure mb-4">Let's talk</h3>
                            <p className="text-soft/80 leading-relaxed text-sm">
                                I am currently open to new opportunities. If you're looking for a dedicated software developer to join your team or build a project, don't hesitate to reach out.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:sayan.sm2024@gmail.com" className="flex items-center text-soft hover:text-accent transition-colors group p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                                <FiMail className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-mono text-sm">sayan.sm2024@gmail.com</span>
                            </a>
                            <a href="https://linkedin.com/in/sayan-sm" target="_blank" rel="noreferrer" className="flex items-center text-soft hover:text-accent transition-colors group p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                                <FiLinkedin className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-mono text-sm">LinkedIn Profile</span>
                            </a>
                            <a href="https://github.com/Sayan-Mondal2022" target="_blank" rel="noreferrer" className="flex items-center text-soft hover:text-accent transition-colors group p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                                <FiGithub className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                                <span className="font-mono text-sm">GitHub Profile</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form (Right Column) */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-3 space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1 space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-pure/80">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={status === "submitting"}
                                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-pure focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 disabled:opacity-50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1 space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-pure/80">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === "submitting"}
                                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-pure focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 disabled:opacity-50"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-pure/80">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={status === "submitting"}
                                className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-pure focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none disabled:opacity-50"
                                placeholder="How can I help you?"
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                <FiAlertCircle className="mr-2" />
                                {errorMessage}
                            </div>
                        )}

                        {status === "success" && (
                            <div className="flex items-center text-green-400 text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                                <FiCheckCircle className="mr-2" />
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="primary"
                            className={`w-full flex justify-center items-center py-4 hover:scale-[1.02] transition-transform duration-300 ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                            disabled={status === "submitting" || status === "success"}
                        >
                            {status === "submitting" ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                <>Send Message <FiSend className="ml-2" /></>
                            )}
                        </Button>
                    </motion.form>
                </div>
            </FadeInSection>
        </section>
    );
}
