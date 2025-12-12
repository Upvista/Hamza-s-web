"use client";

import { motion } from "framer-motion";
import { Building2, Rocket, Users, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const organizationInfo = [
  {
    icon: Building2,
    title: "Upvista Digital",
    description:
      "A research-driven software and digital transformation firm. We engineer enterprise-grade platforms, publish technical insights, and build community environments for developers and creators.",
  },
  {
    icon: Rocket,
    title: "Mission",
    description:
      "To deliver global-standard engineering at scale while pushing the boundaries of what's possible through research and innovation.",
  },
  {
    icon: Target,
    title: "Vision",
    description:
      "To be a leading force in shaping forward-thinking technology, combining engineering excellence with cutting-edge research.",
  },
];

const achievements = [
  "Founded a company delivering global-standard engineering",
  "Architected production systems for clients in 4+ countries",
  "Established Research & Innovation Hub",
  "Led development of complete internal ecosystem",
];

export default function Organization() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 dark:from-orange-900/30 dark:via-red-900/30 dark:to-pink-900/30 animated-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center py-20 mb-20"
        >
          <Building2 className="h-16 w-16 mx-auto mb-6 text-orange-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Organization
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Upvista Digital — Research-driven software and digital transformation
          </p>
        </motion.section>

        {/* Organization Info */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          {organizationInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Achievements */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="p-8 rounded-2xl glass">
            <Award className="h-12 w-12 mb-4 text-orange-400" />
            <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Enterprise-grade platform development",
              "Full SaaS cycle implementation",
              "Digital transformation consulting",
              "Research & Innovation services",
              "Community platform development",
              "AI integration & automation",
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glass hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-orange-400" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              </div>
            ))}
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/20 transition-all duration-300 font-medium"
          >
            Work With Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

