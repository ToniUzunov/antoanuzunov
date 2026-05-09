import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative overflow-hidden rounded-2xl 
        bg-card/60 backdrop-blur-md border border-border/50
        ${hover ? 'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}