"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Database, Globe, Filter, ArrowRight } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "Upvista Digital Platform",
    description:
      "Complete software ecosystem with main website, client portal, collaboration tools, and internal workflows. Features Aetherion, an AI receptionist for client assistance.",
    tech: ["TypeScript", "Go", "PostgreSQL", "React", "Next.js"],
    category: "Full-Stack",
    featured: true,
    year: "2024",
    status: "Active",
  },
  {
    title: "Upvista Community Platform",
    description:
      "Developer-centric community built on TypeScript, Go, and PostgreSQL. Designed to bring engineers, designers, and thinkers into a shared collaboration space.",
    tech: ["TypeScript", "Go", "PostgreSQL"],
    category: "Full-Stack",
    year: "2024",
    status: "Active",
  },
  {
    title: "Asteria — Social Collaboration Platform",
    description:
      "Modern, multi-layer platform built with Flutter, Go, and PostgreSQL. Features messaging, feeds, organizations, and collaboration rooms. Architected for high concurrency.",
    tech: ["Flutter", "Go", "PostgreSQL"],
    category: "Mobile & Backend",
    year: "2024",
    status: "In Development",
  },
  {
    title: "Vigurs Organic",
    description:
      "E-commerce marketplace with payment integration, catalog management, and CMS modules. Full SaaS cycle implementation.",
    tech: ["React", "Node.js", "PostgreSQL"],
    category: "E-Commerce",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Celtis (Japan)",
    description:
      "NGO website with content workflows and accessible design. Built for international client with focus on user experience.",
    tech: ["Next.js", "TypeScript"],
    category: "Web Development",
    year: "2024",
    status: "Completed",
  },
  {
    title: "AoN (Japan)",
    description:
      "Marketing agency website with N8N automation workflows and brand identity design. Complete digital transformation project.",
    tech: ["Next.js", "N8N", "Design Systems"],
    category: "Web & Automation",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Inventory Management System",
    description:
      "Developed for a supermarket with integrated stock flows, billing, and supplier logic. Production-grade system handling real-world operations.",
    tech: ["React", "Django", "PostgreSQL"],
    category: "Enterprise",
    year: "2024",
    status: "Completed",
  },
  {
    title: "Finpedia",
    description:
      "Accounting and finance notes portal for a vocational school. Educational platform with content management and user authentication.",
    tech: ["Next.js", "PostgreSQL"],
    category: "Education",
    year: "2024",
    status: "Completed",
  },
];

const categories = ["All", "Full-Stack", "E-Commerce", "Web Development", "Enterprise", "Mobile & Backend", "Web & Automation", "Education"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Professional background matching home */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 dark:from-stone-950 dark:via-neutral-950 dark:to-stone-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 via-transparent to-rose-50/15 dark:from-amber-950/8 dark:via-transparent dark:to-rose-950/8" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,191,36,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(251,191,36,0.02),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center py-12 mb-16"
        >
          <Code className="h-12 w-12 mx-auto mb-4 text-stone-600 dark:text-stone-400" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-grade platforms, scalable architectures, and innovative solutions delivered to clients worldwide
          </p>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="h-5 w-5 text-muted-foreground" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "glass bg-white/20 text-foreground"
                    : "glass text-muted-foreground hover:text-foreground hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                } ${hoveredProject === index ? "scale-[1.02] shadow-xl" : ""}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-stone-200/50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300">
                    Featured
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "Active"
                        ? "bg-green-500/20 text-green-700 dark:text-green-400"
                        : project.status === "In Development"
                        ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                        : "bg-blue-500/20 text-blue-700 dark:text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mt-8">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full glass text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link">
                      <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link">
                      <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                      <span>Live</span>
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Globe, label: "Countries Served", value: "4+" },
            { icon: Code, label: "Projects Delivered", value: "10+" },
            { icon: Database, label: "Systems Architected", value: "15+" },
            { icon: Github, label: "Lines of Code", value: "100K+" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
              >
                <Icon className="h-8 w-8 mx-auto mb-3 text-stone-600 dark:text-stone-400" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl glass">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your next project to life with scalable, innovative solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/20 transition-all duration-300 font-medium"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
