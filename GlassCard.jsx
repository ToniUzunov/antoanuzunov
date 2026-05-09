import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Search, Handshake } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import GlassCard from '../shared/GlassCard';

const items = [
  { icon: Lightbulb, title: 'Building BlindSpot Innovation', color: 'text-primary' },
  { icon: Users, title: 'Learning and growing through GT 20 Under 20', color: 'text-blue-400' },
  { icon: Search, title: 'Exploring accessibility, product development, and technology-driven problem solving', color: 'text-cyan-400' },
  { icon: Handshake, title: 'Connecting with founders, investors, mentors, and collaborators', color: 'text-indigo-400' },
];

export default function NowSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Now"
          title="What I'm focused on now."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <p className="font-body text-foreground/90 leading-relaxed text-sm pt-2">{item.title}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}