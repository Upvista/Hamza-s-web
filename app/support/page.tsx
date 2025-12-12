"use client";

import { motion } from "framer-motion";
import { HelpCircle, Book, MessageSquare, FileText, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const supportResources = [
  {
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides and technical documentation for all projects and services",
    href: "#",
  },
  {
    icon: MessageSquare,
    title: "Community Forum",
    description: "Get help from the community and share your knowledge with others",
    href: "/community",
  },
  {
    icon: FileText,
    title: "FAQs",
    description: "Find answers to commonly asked questions about services and projects",
    href: "#",
  },
  {
    icon: Mail,
    title: "Direct Support",
    description: "Reach out directly for personalized assistance with your specific needs",
    href: "/contact",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer custom software development, digital transformation consulting, research collaboration, and various technical services. Check out the Marketplace page for more details.",
  },
  {
    question: "How can I collaborate on research?",
    answer:
      "I'm always open to research collaborations, especially in AGI, cybersecurity, and emerging technologies. Reach out through the Contact page to discuss potential partnerships.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, I offer ongoing support packages for projects. This includes maintenance, updates, and 24/7 support options. Contact me to discuss your specific needs.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I work with a wide range of technologies including React, Next.js, Go, Node.js, Django, Flutter, PostgreSQL, MongoDB, and more. Check the Portfolio page for specific examples.",
  },
];

export default function Support() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-purple-500/20 dark:from-rose-900/30 dark:via-pink-900/30 dark:to-purple-900/30 animated-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center py-20 mb-20"
        >
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-rose-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Support
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Get help, find resources, and connect with the community
          </p>
        </motion.section>

        {/* Support Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {supportResources.map((resource, index) => {
            const Icon = resource.icon;
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-rose-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Link
                      href={resource.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQs */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glass hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
          <div className="inline-block p-8 rounded-2xl glass">
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Don't hesitate to reach out directly. I'm here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/20 transition-all duration-300 font-medium"
            >
              Contact Support
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

