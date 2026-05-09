import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Award, Zap, GraduationCap, Briefcase, Brain, Wrench, MessageSquare } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import GlassCard from '../components/shared/GlassCard';

const timeline = [
  {
    icon: Rocket,
    role: 'Founder / Creator',
    org: 'BlindSpot Innovation',
    description: 'Assistive technology project focused on safety and independence for blind and visually impaired individuals.',
    color: 'text-primary',
    borderColor: 'border-primary/30',
  },
  {
    icon: Award,
    role: 'Selected Young Entrepreneur',
    org: 'GT 20 Under 20',
    description: 'Selected to join a network of young innovators, entrepreneurs, and mentors.',
    color: 'text-blue-400',
    borderColor: 'border-blue-400/30',
  },
  {
    icon: Zap,
    role: 'Student EV Engineering Project',
    org: 'Velocity-X',
    description: 'Built and tested an electric vehicle for Arctic endurance conditions. Worked on planning, leadership, design, sponsorship, and problem-solving.',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/30',
  },
  {
    icon: GraduationCap,
    role: 'Student / Builder / Innovator',
    org: '',
    description: 'Focused on entrepreneurship, product development, accessibility, and technology-driven problem solving.',
    color: 'text-indigo-400',
    borderColor: 'border-indigo-400/30',
  },
];

const skillCategories = [
  {
    icon: Briefcase,
    title: 'Entrepreneurship',
    skills: ['Startup thinking', 'Pitching', 'Sponsorship', 'Networking', 'Opportunity discovery'],
    color: 'text-primary',
  },
  {
    icon: Brain,
    title: 'Product & Innovation',
    skills: ['Product development', 'Accessibility-focused design', 'User problem analysis', 'Prototyping', 'Practical problem-solving'],
    color: 'text-blue-400',
  },
  {
    icon: Wrench,
    title: 'Engineering & Building',
    skills: ['Electric vehicle project experience', 'Mechanical systems exposure', 'Chassis development', 'Testing and iteration', 'Performance optimization'],
    color: 'text-cyan-400',
  },
  {
    icon: MessageSquare,
    title: 'Communication & Leadership',
    skills: ['Team leadership', 'Strategic planning', 'Storytelling', 'Collaboration', 'Public-facing personal brand'],
    color: 'text-indigo-400',
  },
];

export default function Experience() {
  return (
    <div className="pt-24 lg:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="The journey so far."
          description="From founding a startup to building electric vehicles — here's how I've been spending my time."
        />

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative flex gap-6"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-card border ${item.borderColor} flex items-center justify-center z-10`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <GlassCard className="flex-1 p-6" delay={0} hover={false}>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-bold text-lg text-foreground">{item.role}</h3>
                      {item.org && (
                        <span className="text-sm text-muted-foreground font-body">— {item.org}</span>
                      )}
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <SectionHeader
          label="Skills"
          title="What I bring to the table."
          description="Core competencies built through real projects, challenges, and continuous learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <GlassCard key={cat.title} delay={i * 0.1} className="p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span className="font-body text-sm text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}