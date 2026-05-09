import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-2">Antoan Uzunov</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Young Entrepreneur, Innovator and Student
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Experience', 'Blog', 'Contact'].map(label => (
                <Link
                  key={label}
                  to={`/${label.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Connect</h4>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/in/antoan-uzunov-0b6b9b408/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:toni.uzunovvv@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Mail className="w-4 h-4" /> toni.uzunovvv@gmail.com
              </a>
              <a href="mailto:antoan@blindspot-innovation.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Mail className="w-4 h-4" /> antoan@blindspot-innovation.com
              </a>
              <a href="https://blindspot-innovation.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Globe className="w-4 h-4" /> blindspot-innovation.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Antoan Uzunov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}