import { SectionHeading } from "../ui/SectionHeading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FadeInSection } from "../ui/FadeInSection";

interface Repo {
    id: string;
    name: string;
    description: string;
    url: string;
    homepageUrl: string | null;
    primaryLanguage: {
        name: string;
    } | null;
    stargazerCount: number;
}

export default async function Projects() {
    const query = `
        {
          user(login: "Sayan-Mondal2022") {
            pinnedItems(first: 5, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  url
                  homepageUrl
                  stargazerCount
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
    `;

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        console.error("Failed to fetch pinned repos");
        return null;
    }

    const json = await res.json();
    const projects: Repo[] = json.data.user.pinnedItems.nodes;

    function formatRepoName(name: string): string {
        return name
            // Replace - and _ with space
            .replace(/[-_]/g, " ")
            // Add space before capital letters (camelCase support)
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            // Convert to lowercase first
            .toLowerCase()
            // Capitalize first letter of each word
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }

    return (
        <section id="projects" className="py-24 relative">
            <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Pinned projects from my GitHub."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col justify-between h-full bg-secondary/20 rounded-2xl p-6 border border-white/5 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(252,163,17,0.3)] transition-all duration-300 relative overflow-hidden cursor-pointer"
                        >
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500 pointer-events-none" />

                            <div className="z-10 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <FiGithub className="text-accent text-3xl group-hover:scale-110 transition-transform duration-300" />
                                    <div className="flex space-x-4">
                                        {project.homepageUrl && (
                                            <a
                                                href={project.homepageUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-soft hover:text-accent hover:scale-110 transition-all duration-300"
                                            >
                                                <FiExternalLink className="text-xl" />
                                            </a>
                                        )}
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-soft hover:text-accent hover:scale-110 transition-all duration-300"
                                        >
                                            <FiGithub className="text-xl" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-pure group-hover:text-accent transition-colors duration-300">
                                    {formatRepoName(project.name)}
                                </h3>

                                <p className="text-soft/80 flex-grow mb-6 text-sm leading-relaxed group-hover:text-soft transition-colors duration-300">
                                    {project.description ||
                                        "A pinned project showcasing practical implementation and engineering expertise."}
                                </p>

                                <div className="flex flex-wrap items-center mt-auto space-x-3 gap-y-2">
                                    {project.primaryLanguage && (
                                        <span className="text-xs font-mono text-accent/90 bg-accent/10 px-2 py-1 rounded-md group-hover:bg-accent/20 transition-colors duration-300">
                                            {project.primaryLanguage.name}
                                        </span>
                                    )}
                                    {project.stargazerCount > 0 && (
                                        <span className="text-xs font-mono text-soft/60 px-2 py-1 rounded-md group-hover:text-soft/90 transition-colors duration-300">
                                            ⭐ {project.stargazerCount}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
}