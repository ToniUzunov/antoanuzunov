const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const badges = [
  'GT 20 Under 20',
  'Founder of BlindSpot Innovation',
  'Assistive Technology',
  'Product Development',
  'Sofia → Bucharest',
];

const HERO_IMAGE = 'https://media.db.com/images/public/69ff0f6cd0375bf5d4d4b8ba/8f19bd2fa_generated_45d9f6bc.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(hsl(217, 91%, 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(217, 91%, 50%) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((badge, i) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-xs font-body font-medium text-primary/80 bg-primary/5 border border-primary/15 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight">
              Antoan
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                Uzunov
              </span>
            </h1>

            <p className="mt-4 font-heading font-medium text-xl md:text-2xl text-muted-foreground">
              Young Entrepreneur, Innovator and Student
            </p>

            <p className="mt-6 font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              Building practical technology and ambitious projects that solve real-world problems — from assistive innovation to electric vehicle engineering.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-body font-semibold text-sm bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/40"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-body font-semibold text-sm text-foreground bg-secondary/50 border border-border hover:border-primary/30 rounded-xl transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl" />
              <img
                src={HERO_IMAGE}
                alt="Antoan Uzunov — Young Entrepreneur"
                className="relative w-72 md:w-80 lg:w-96 rounded-3xl border border-border/50 shadow-2xl shadow-primary/10 object-cover aspect-[3/4]"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 px-5 py-3 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl shadow-lg">
                <p className="font-heading font-bold text-sm text-primary">GT 20 Under 20</p>
                <p className="font-body text-xs text-muted-foreground">Selected Young Innovator</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}