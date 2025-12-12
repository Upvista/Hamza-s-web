"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Phone } from "lucide-react";

const footerLinks = {
  explore: [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/researches", label: "Researches" },
  ],
  company: [
    { href: "/organization", label: "Organization" },
    { href: "/community", label: "Community" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/support", label: "Support" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "/support", label: "Support" },
    { href: "https://www.upvistadigital.com/", label: "Upvista Digital", external: true },
  ],
};

const socialLinks = [
  {
    href: "https://github.com",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://www.upvistadigital.com/",
    label: "Upvista Digital",
    icon: ExternalLink,
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Islamabad, Pakistan",
  },
  {
    icon: Phone,
    text: "Available upon request",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass mt-auto backdrop-blur-xl bg-white/5 dark:bg-black/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-purple-400/50 transition-all duration-300">
                <Image
                  src="/assets/hamza-pic.jpeg"
                  alt="Hamza Hafeez"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Hamza Hafeez
                </h3>
                <p className="text-xs text-muted-foreground">Software Engineer | Researcher | Founder</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Building scalable systems, exploring AGI research, and shaping forward-thinking technology at Upvista Digital.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4" />
                    <span>{info.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hamza Hafeez. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

