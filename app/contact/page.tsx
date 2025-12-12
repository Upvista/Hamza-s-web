"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@hamzahafeez.com",
    href: "mailto:contact@hamzahafeez.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Available upon request",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: ExternalLink,
    label: "Upvista Digital",
    href: "https://www.upvistadigital.com/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-fuchsia-900/30 animated-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center py-20 mb-20"
        >
          <Mail className="h-16 w-16 mx-auto mb-6 text-violet-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project, collaboration, or just say hello
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-8 rounded-2xl glass"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/50 transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg glass hover:bg-white/20 transition-all duration-300 font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl glass">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-lg glass hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-violet-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          {info.label}
                        </div>
                        <div className="text-foreground">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 rounded-2xl glass">
              <h2 className="text-2xl font-bold mb-6">Connect on Social Media</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 rounded-2xl glass">
              <h3 className="text-xl font-bold mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond within 24-48 hours. For urgent matters, please mention it in
                your message.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

