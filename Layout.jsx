const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import GlassCard from '../shared/GlassCard';

const projects = [
{
  title: 'BlindSpot Innovation',
  subtitle: 'Assistive technology for safer, more independent mobility.',
  description: 'I created BlindSpot Innovation to help blind and visually impaired individuals navigate the world with greater safety, confidence, and independence through practical assistive technology.',
  tags: ['Accessibility', 'Assistive Technology', 'Product Development', 'Social Impact', 'Innovation'],
  image: 'https://media.db.com/images/public/69ff0f6cd0375bf5d4d4b8ba/f5de4fe3c_generated_8884898e.png',
  link: 'https://blindspot-innovation.com',
  cta: 'Visit Website',
  external: true
},
{
  title: 'Velocity-X Arctic EV Project',
  subtitle: 'Building and testing a high-performance electric vehicle in extreme conditions.',
  description: 'At age 13, I worked with a student team to design, build, and test an electric vehicle for the Arctic Challenge. I led work across mechanical systems, chassis development, exterior design, testing, sponsorship, and extreme-condition performance.',
  tags: ['Electric Vehicle', 'Engineering', 'Arctic Challenge', 'Team Leadership', 'Product Design'],
  image: 'https://media.db.com/images/public/69ff0f6cd0375bf5d4d4b8ba/6e5a8424d_generated_e4bd646f.png',
  link: '/projects',
  cta: 'View Case Study',
  external: false
},
{
  title: 'GT 20 Under 20',
  subtitle: 'Selected among young innovators and entrepreneurs.',
  description: 'I was selected for GT 20 Under 20, connecting me with other young innovators, entrepreneurs, and mentors while helping me develop my ideas further.',
  tags: ['Entrepreneurship', 'Youth Innovation', 'Mentorship', 'Network', 'Growth'],
  image: 'https://media.db.com/images/public/69ff0f6cd0375bf5d4d4b8ba/6a285886e_generated_f38d99c2.png',
  link: 'https://www.giftedtalented.com/',
  cta: 'Learn More',
  external: true
}];

export default function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Featured Work"
          title="Projects that matter."
          description="From assistive technology to electric vehicle engineering, here are the projects I'm most proud of." />
        

        <div className="space-y-8">
          {projects.map((project, i) =>
          <GlassCard key={project.title} delay={i * 0.15} className="p-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src="https://media.db.com/images/public/69ff0f6cd0375bf5d4d4b8ba/f5de4fe3c_generated_8884898e.png" alt={project.title} className="w-full h-64 lg:h-full object-cover" />
                
                  <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-transparent to-transparent lg:hidden" />
                </div>
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-primary mb-3">{project.subtitle}</p>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">{project.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) =>
                  <span key={tag} className="px-3 py-1 text-xs font-body text-primary/70 bg-primary/5 border border-primary/10 rounded-full">
                        {tag}
                      </span>
                  )}
                  </div>
                  {project.external ?
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary hover:text-primary/80 transition-colors w-fit">
                  
                      {project.cta} <ExternalLink className="w-4 h-4" />
                    </a> :

                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary hover:text-primary/80 transition-colors w-fit">
                  
                      {project.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                }
                </div>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </section>);

}