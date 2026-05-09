import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="Building technology with purpose."
          description="I'm a young entrepreneur and creator of BlindSpot Innovation, an assistive technology project focused on improving safety and independence for blind and visually impaired individuals. I'm driven by a simple goal: to build practical technology that solves real accessibility challenges and creates meaningful impact."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Read My Story <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}