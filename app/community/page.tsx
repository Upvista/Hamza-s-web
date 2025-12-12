"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Code, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const communityFeatures = [
  {
    icon: Code,
    title: "Developer Collaboration",
    description:
      "Connect with engineers, designers, and thinkers in a shared collaboration space built on TypeScript, Go, and PostgreSQL.",
  },
  {
    icon: MessageSquare,
    title: "Knowledge Sharing",
    description:
      "Share insights, discuss ideas, and learn from peers. Our platform facilitates meaningful technical conversations.",
  },
  {
    icon: Sparkles,
    title: "Innovation Hub",
    description:
      "A space for exploring new technologies, discussing research, and pushing the boundaries of what's possible.",
  },
];

export default function Community() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-purple-900/30 animated-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center py-20 mb-20"
        >
          <Users className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Community
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Join a vibrant community of developers, researchers, and innovators
          </p>
        </motion.section>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* About Upvista Community */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="p-8 rounded-2xl glass">
            <h2 className="text-3xl font-bold mb-4">Upvista Community Platform</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Upvista Community Platform is a developer-centric space designed to bring
              engineers, designers, and thinkers together. Built on modern technologies including
              TypeScript, Go, and PostgreSQL, it provides a robust foundation for collaboration,
              knowledge sharing, and innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're looking to discuss the latest in AGI research, share your technical
              insights, or collaborate on projects, the community platform offers the tools and
              environment to make meaningful connections.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-block p-8 rounded-2xl glass">
            <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
            <p className="text-muted-foreground mb-6">
              Connect with like-minded individuals and be part of the innovation journey
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/20 transition-all duration-300 font-medium"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

