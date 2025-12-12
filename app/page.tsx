"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Lightbulb, Rocket, Sparkles, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Professional background matching image */}
      <div className="fixed inset-0 -z-10">
        {/* Warm, elegant base - matching the formal event ambiance */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 dark:from-stone-950 dark:via-neutral-950 dark:to-stone-900" />
        {/* Subtle warm accent - matching warm lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/20 via-transparent to-rose-50/15 dark:from-amber-950/8 dark:via-transparent dark:to-rose-950/8" />
        {/* Soft radial gradient for depth - matching soft blurred background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,191,36,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_left,_rgba(251,191,36,0.02),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8 md:py-12 min-h-[85vh]"
        >
          {/* Image Side */}
          <motion.div
            className="relative order-2 lg:order-1 flex items-center justify-center lg:justify-end h-full"
          >
            <div className="relative w-full max-w-lg h-[800px] lg:h-[900px]">
              <div className="relative w-full h-full rounded-[0px] overflow-hidden">
                <Image
                  src="/assets/hamza-pic2.jpeg"
                  alt="Hamza Hafeez"
                  fill
                  className="object-contain rounded-[0px]"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </motion.div>

          {/* Quote & CTA Side */}
          <motion.div
            className="order-1 lg:order-2 space-y-6 flex flex-col justify-center h-full"
          >
            <motion.div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2]">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Engineering as craftsmanship.
                </span>
                <br />
                <span className="text-foreground">Research as exploration.</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technology as a force for change.
                </span>
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Building scalable systems that behave like ecosystems, exploring the frontiers of AGI research, 
                and shaping forward-thinking technology at{" "}
                <span className="font-semibold text-foreground">Upvista Digital</span>.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/researches"
                className="group px-8 py-4 rounded-full glass hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl"
              >
                <BookOpen className="h-5 w-5" />
                Read my Research Papers
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/community"
                className="group px-8 py-4 rounded-full border-2 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                <Users className="h-5 w-5" />
                Join the Community
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* My Story Timeline */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-20 mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My Story
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A journey from curiosity to creation, built on persistence, learning, and the drive to build things that matter
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-stone-200 via-stone-300 to-stone-200 dark:from-stone-800 dark:via-stone-700 dark:to-stone-800 hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 - High School / Ethical Hacking */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm font-medium text-muted-foreground mb-2">High School</div>
                      <h3 className="text-xl font-semibold mb-3">My Medical Background</h3>
                      <p className="text-muted-foreground leading-relaxed">
                       It was september 2019, and I have to decide the way of my future, either medical, engineering or Computer Science. I was stuck, my father asked me to pursue medical which I selected... In my school, I got an amazing teacher, her name was Nashwa Ibtisam. She was the one who enerated interest and a spark in me to think outside, do research, and do something bigger...  I started reading MBBS level books in my high school buying from my pocket money, day in day out, I was dedicatd and motivated to researches.. I explored medical like never before.. but then the dark realienty unveiled...  
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-400 dark:bg-stone-600 border-4 border-stone-50 dark:border-stone-950 z-10 hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8" />
                </motion.div>

                {/* Item 2 - Learning Skills */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-400 dark:bg-stone-600 border-4 border-stone-50 dark:border-stone-950 z-10 hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm font-medium text-muted-foreground mb-2">The Academic Downfall</div>
                      <h3 className="text-xl font-semibold mb-3">Hate for the education system</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I immersed myself in learning new and new concepts, from microbiology to surgery and even doing practical operations on insects and dummy bodies. i was growing and learning but the system didn't wanted that, It wanted cramming, marks, and the text book. Me, who had great concepts was rejected for not cramming and I got low grades. even 82% is not a bad score, but that were in sufficient for securing merit for medicine.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Item 3 - Game Development */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm font-medium text-muted-foreground mb-2">The Economic Crisis</div>
                      <h3 className="text-xl font-semibold mb-3">After Shocks of Covid-19 and a heart attack of my father</h3>
                      <p className="text-muted-foreground leading-relaxed">
                       Covid is the worst nightmare for almost everyone who have gone through it, and my family was also one of them, while covid destroyed the country's economy, the remaining gasoline was when my father got a heart attack due to bridging in Left Anterior Descending coronary Artery which damaed the heart. After facing a lot of trouble, he was recommended a Coronary Artery Bypass Grafting surgery along with a Mitral Valve Replacement surgery. It was a success but after shocks included being fired from the company. Now we were in trouble.. no earnings, no grades, the passion for medicine torn apart, father became a heart patient, and a lot more.. it was the worst time in my life when i couldn't find a way out... 
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-400 dark:bg-stone-600 border-4 border-stone-50 dark:border-stone-950 z-10 hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8" />
                </motion.div>

                {/* Item 4 - University */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-400 dark:bg-stone-600 border-4 border-stone-50 dark:border-stone-950 z-10 hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm font-medium text-muted-foreground mb-2">The bold decision</div>
                      <h3 className="text-xl font-semibold mb-3">A Bold decision that changed everything</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Doing MBBS on scholarship was not an option now, and we couldn't afford the fees of any other university. So I decided to do Computer Science and will do self-learning and will acquire great skills ASAP. The Idea behind was to do something bigger and earn through skills I started reading books, watching lectures, and doing projects. I was determined to become a software engineer and the next version of myself. Transitioning from medicine to computer science was a very tough and hard decision. I strived a lot, worked day and night like hell to prove myself and in about a year, i was able to have the knowledge that a typical final year student had.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Item 5 - Web Development */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm font-medium text-muted-foreground mb-2">The Freelancing Journey</div>
                      <h3 className="text-xl font-semibold mb-3">Understanding the Market</h3>
                      <p className="text-muted-foreground leading-relaxed">
                       When i got the skills in full stack web development, i started freelancing on Fiverr, LinkedIn, and Upwork, completing around twenty projects. Each project taught me something new, building both my skills and confidence. I earned a lot and learned a lot... after sometime in freelancing I decided to do something even more bigger. I decided to establish a software agency.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-400 dark:bg-stone-600 border-4 border-stone-50 dark:border-stone-950 z-10 hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8" />
                </motion.div>

                {/* Item 6 - Software Engineering */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-400 dark:bg-stone-600 border-4 border-stone-50 dark:border-stone-950 z-10 hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Birth of Upvista Digital</div>
                      <h3 className="text-xl font-semibold mb-3">From being a freelancer to a startup founder</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I realized I needed to move beyond just being a full stack developer. I wanted to do more than freelance. 
                        So I immersed myself in software engineering, learning system architecture, design patterns, advanced algorithms, 
                        and programming in Java, C++, and Python. I worked on three contract projects for a software company, gaining 
                        invaluable experience in enterprise development.  It was time to start something of my own. I founded Upvista Digital, meaning "A technical view from the horizons." 
                        I built the complete business suite and fulfilled enterprise protocols. I then started thinking enterprise and working on bigger software projects gaining more and more experience, and knowledge.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Item 7 - Founding Upvista */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                      className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 border-2 border-stone-300/20 dark:border-stone-700/20">
                      <div className="text-sm font-medium text-muted-foreground mb-2">doing what i love</div>
                      <h3 className="text-xl font-semibold mb-3">The research mindset</h3>
                      <p className="text-muted-foreground leading-relaxed">
                       I started to do researches, first i thought about the vulnerabilities in the current security protocols and designed a cyber security framework (GCDF) which is a conceptual cyber-security fabric merging AI, blockchain, quantum computing, cloud-native security, and advanced detection systems. Envisions adaptive, predictive defense rather than reactive protection. Early-stage model with groundwork laid for future research. Then i researched on the future of artificial general intelligence and designed a model (Project Cortex) which is a cognitive-inspired architecture and orchestrated AGI systems. Spent six months studying neuroscientific behavior, cognitive processes, and LLM parallels. Proposed that AGI should be built as an environment coordinating specialized models rather than a single all-in-one model.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-stone-600 dark:bg-stone-500 border-4 border-stone-50 dark:border-stone-950 z-10 shadow-lg hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8" />
                </motion.div>

                {/* Item 8 - Current State */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 md:pr-8 mb-4 md:mb-0" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-stone-400 dark:bg-stone-600 border-4 border-stone-50 dark:border-stone-950 z-10 hidden md:block" />
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Today</div>
                      <h3 className="text-xl font-semibold mb-3"></h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Today, Upvista Digital is more than just a company. I am doing what i love, researching future technologies like Artificial General 
                        Intelligence, Edge and Quantum computing. I am building a community for developers, designers, engineers, and forward 
                        thinkers to collaborate on open source projects and research. This isn't a one night drift. It's the result of years 
                        of curiosity, trial and error, persistence, and a constant drive to build things that matter. I am not just a software engineer, I am a researcher, a thinker, a builder, and a leader.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Ambition Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="glass p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">My Ambition</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To grow myself as a leader known for delivering innovative, scalable, and user friendly technologies and solutions. 
                  solutions. I want to gain great experinces with companies in Japan and worldwide, working on projects that challenge my 
                  creativity and push my technical limits. My goal is to create a workplace where talented engineers can thrive, learn, 
                  and contribute to products that make a real difference in people's lives.
                  </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
