"use client";

import { motion } from "framer-motion";
import { Brain, BookOpen, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const researches = [
  {
    title: "Project Cortex: AGI Orchestration Model",
    year: "2025",
    status: "Published",
    description:
      "A bold exploration into Artificial General Intelligence. The proposed model draws inspiration from the human prefrontal cortex, focusing on orchestration rather than monolithic intelligence. Spent six months studying neuroscientific behavior, cognitive processes, and LLM parallels. Proposed that AGI should be built as an environment coordinating specialized models rather than a single all-in-one model.",
    keyPoints: [
      "Cognitive-inspired architecture",
      "Orchestrated AGI systems",
      "Neuroscientific foundations",
      "Specialized model coordination",
    ],
    featured: true,
  },
  {
    title: "Global Cyber Defense Fabric (GCDF)",
    year: "2024-2025",
    status: "In Progress",
    description:
      "A conceptual cyber-security fabric merging AI, blockchain, quantum computing, cloud-native security, and advanced detection systems. Envisions adaptive, predictive defense rather than reactive protection. Early-stage model with groundwork laid for future research.",
    keyPoints: [
      "AI-driven security",
      "Blockchain integration",
      "Quantum computing applications",
      "Predictive defense systems",
    ],
  },
];

export default function Researches() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animated-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center py-20 mb-20"
        >
          <Brain className="h-16 w-16 mx-auto mb-6 text-indigo-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Research & Publications
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of AI, cognitive architectures, and cybersecurity innovation
          </p>
        </motion.section>

        {/* Research Papers */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {researches.map((research, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300 ${
                research.featured ? "border-2 border-purple-500/30" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl md:text-3xl font-bold">{research.title}</h2>
                    {research.featured && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{research.year}</span>
                    <span>•</span>
                    <span
                      className={`px-2 py-1 rounded-full ${
                        research.status === "Published"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {research.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{research.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 text-foreground">Key Concepts:</h3>
                <div className="flex flex-wrap gap-2">
                  {research.keyPoints.map((point, pointIndex) => (
                    <span
                      key={pointIndex}
                      className="px-3 py-1 text-sm rounded-full glass text-muted-foreground"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <BookOpen className="h-4 w-4" />
                  Read Paper
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="h-4 w-4" />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Philosophy */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl glass">
            <Sparkles className="h-12 w-12 mb-4 text-indigo-400" />
            <h2 className="text-2xl font-bold mb-4">Research Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">
              My research approach combines deep curiosity with rigorous methodology. I believe in
              exploring bold ideas—like AGI orchestration inspired by cognitive science—while
              maintaining scientific integrity. Each project represents months of study, analysis,
              and conceptual development, always with an eye toward practical applications and
              real-world impact.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/20 transition-all duration-300 font-medium"
          >
            Collaborate on Research
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

