import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Rocket, Eye, Lightbulb, Heart, Shield, Users, Sparkles, BookOpen } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import GlassCard from '../components/shared/GlassCard';

const facts = [
  { icon: MapPin, text: 'Based in Bucharest, Romania' },
  { icon: MapPin, text: 'From Sofia, Bulgaria' },
  { icon: Award, text: 'Selected for GT 20 Under 20' },
  { icon: Rocket, text: 'Founder of BlindSpot Innovation' },
  { icon: Eye, text: 'Interested in accessibility, startups, product, and engineering' },
];

const values = [
  { icon: Lightbulb, name: 'Curiosity', color: 'text-primary' },
  { icon: Heart, name: 'Impact', color: 'text-blue-400' },
  { icon: Shield, name: 'Resilience', color: 'text-cyan-400' },
  { icon: Sparkles, name: 'Execution', color: 'text-indigo-400' },
  { icon: Users, name: 'Collaboration', color: 'text-violet-400' },
  { icon: BookOpen, name: 'Learning', color: 'text-sky-400' },
];

export default function About() {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="About Me"
          description="Young entrepreneur, innovator, and student from Sofia, Bulgaria, currently living in Bucharest, Romania."
        />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a young entrepreneur, innovator, and student from Sofia, Bulgaria, currently living in Bucharest, Romania. I'm the creator of BlindSpot Innovation, an assistive technology project focused on improving safety and independence for blind and visually impaired individuals.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            My work is driven by a simple goal: to build practical technology that solves real accessibility challenges and creates meaningful impact. I'm especially interested in entrepreneurship, accessibility, product development, and technology-driven problem solving.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="font-heading font-bold text-xl text-foreground mb-6 text-center">Quick Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-4 flex items-center gap-3">
                <fact.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground/80">{fact.text}</span>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-3xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">My Mission</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Build practical technology that solves real-world accessibility challenges and creates meaningful impact through innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">What Drives Me</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Entrepreneurship, accessibility, product development, creativity, and technology-driven problem solving. I'm constantly looking for new ways to learn, collaborate, and turn ideas into products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">GT 20 Under 20</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              I was selected for GT 20 Under 20, where I connect with young innovators and learn from experienced entrepreneurs and mentors. This opportunity has helped me refine my ideas and grow as an entrepreneur.
            </p>
          </motion.div>

          {/* Personal Values */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Personal Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {values.map((value, i) => (
                <GlassCard key={i} delay={i * 0.08} className="p-5 text-center">
                  <value.icon className={`w-6 h-6 mx-auto mb-2 ${value.color}`} />
                  <p className="font-body font-medium text-sm text-foreground">{value.name}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}