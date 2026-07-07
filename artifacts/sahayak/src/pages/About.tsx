import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            About Sahayak
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
          >
            A national initiative to bridge the gap between Divyang citizens and the government services meant to empower them.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-16">
          
          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                To create a unified, accessible, and intelligent platform that empowers persons with disabilities in India by providing personalized access to government schemes, rights information, and essential services.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe that true empowerment begins with access to information. Sahayak translates complex bureaucratic language into simple, actionable steps.
              </p>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl border border-border">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-2">The Samsung Solve for Tomorrow Context</h3>
              <p className="text-sm text-muted-foreground">
                Sahayak was conceptualized as a solution for the Samsung Solve for Tomorrow competition, aiming to address the systemic information gap faced by the Divyangjan community in India.
              </p>
            </div>
          </div>

          <div className="h-px bg-border w-full my-8"></div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-10 text-center text-foreground">Our Core Principles</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Trust & Authenticity</h3>
                <p className="text-sm text-muted-foreground">Relying exclusively on verified government data to ensure users never receive misleading information.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Empathy by Design</h3>
                <p className="text-sm text-muted-foreground">Building interfaces that accommodate various disabilities through WCAG compliance and thoughtful UX.</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm text-center">
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">Inclusivity</h3>
                <p className="text-sm text-muted-foreground">Serving users across urban and rural areas, across all types of disabilities recognized by the RPwD Act 2016.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
