"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Package, Sparkles, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const products = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions built to your specifications",
    features: ["Full-stack development", "Scalable architecture", "Ongoing support"],
    price: "Custom Quote",
  },
  {
    title: "Digital Transformation Consulting",
    description: "Strategic guidance for your digital journey",
    features: ["Architecture design", "Technology selection", "Implementation roadmap"],
    price: "Custom Quote",
  },
  {
    title: "Research Collaboration",
    description: "Partner on cutting-edge research projects",
    features: ["AGI research", "Cybersecurity innovation", "Technical publications"],
    price: "Custom Quote",
  },
];

export default function Marketplace() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 animated-gradient" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center py-20 mb-20"
        >
          <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-emerald-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Professional services and solutions tailored to your needs
          </p>
        </motion.section>

        {/* Products/Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300 flex flex-col"
            >
              <Package className="h-12 w-12 mb-4 text-emerald-400" />
              <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {product.price}
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 rounded-lg glass hover:bg-white/20 transition-all duration-300 font-medium"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="p-8 rounded-2xl glass">
            <Sparkles className="h-12 w-12 mb-4 text-emerald-400" />
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Code reviews & audits",
                "Performance optimization",
                "Security assessments",
                "Technical documentation",
                "Team training & workshops",
                "24/7 support packages",
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>
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
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can tailor our services to meet your specific requirements
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/20 transition-all duration-300 font-medium"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

