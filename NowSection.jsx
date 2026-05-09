import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Award, Zap, Eye } from 'lucide-react';

const stats = [
  { icon: Rocket, label: 'Founder of BlindSpot Innovation', accent: 'text-primary' },
  { icon: Award, label: 'Selected for GT 20 Under 20', accent: 'text-blue-400' },
  { icon: Zap, label: 'Built an EV project at age 13', accent: 'text-cyan-400' },
  { icon: Eye, label: 'Focused on accessibility & innovation', accent: 'text-indigo-400' },
];

export default function CredibilityStrip() {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                <stat.icon className={`w-5 h-5 ${stat.accent}`} />
              </div>
              <p className="font-body text-sm text-foreground/80 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}