"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { FadeInSection } from "../ui/FadeInSection";

export default function About() {
  const skills = [
    "Python",
    "Java",
    "Next.js",
    "FastAPI / Flask",
    "Machine Learning / AI",
    "LangChain / RAG",
    "SQL / NoSQL",
    "Docker / AWS",
  ];

  return (
    <section id="about" className="py-24 bg-secondary/10">
      <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A brief introduction to who I am and what I do."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Bio Content */}
          <div className="space-y-6 text-soft/90 leading-relaxed text-lg">
            <p>
              Hi, I’m Sayan, a Computer Science student specializing in
              Artificial Intelligence and Machine Learning. I enjoy building
              practical, reliable software that solves real-world problems.
            </p>

            <p>
              I work on full-stack applications with a strong focus on backend
              development and AI integration, aiming to create clean, scalable,
              and efficient digital solutions.
            </p>

            <p>
              I’m always looking to improve my skills, take on meaningful
              challenges, and build impactful projects where I can learn, grow,
              and make a real impact.
            </p>
          </div>

          {/* Highlights / Skills List */}
          <div className="bg-secondary/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm shadow-xl hover:shadow-[0_0_15px_rgba(252,163,17,0.1)] transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-pure">
              Here are a few technologies I've been working with recently:
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center text-soft/80 font-mono text-sm group hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-accent mr-2 group-hover:translate-x-1 transition-transform duration-300">
                    ▹
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
