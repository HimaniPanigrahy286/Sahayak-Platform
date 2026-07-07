import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  HeartHandshake, 
  Search, 
  ClipboardCheck, 
  IdCard, 
  BookOpen, 
  BellRing, 
  Bot,
  ShieldCheck,
  Accessibility,
  UserCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Government Scheme Explorer",
      description: "Search and filter through hundreds of government schemes tailored for your specific needs."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-secondary" />,
      title: "Eligibility Checker",
      description: "Answer a few simple questions to instantly find which schemes you qualify for."
    },
    {
      icon: <IdCard className="h-6 w-6 text-accent" />,
      title: "UDID Guide",
      description: "Step-by-step assistance on how to apply for and track your Unique Disability ID."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Knowledge Hub",
      description: "Learn about your rights, reservation policies, and educational opportunities."
    },
    {
      icon: <BellRing className="h-6 w-6 text-secondary" />,
      title: "Latest Government Updates",
      description: "Stay informed with the newest announcements and scheme deadline extensions."
    },
    {
      icon: <Bot className="h-6 w-6 text-muted-foreground" />,
      title: "Marg AI Assistant",
      description: "An intelligent chatbot to answer your queries in multiple regional languages.",
      comingSoon: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 pt-20 pb-24 md:pt-32 md:pb-36 border-b border-border">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial" 
            animate="animate" 
            variants={fadeIn}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              A Samsung Solve for Tomorrow Initiative
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Empowering Every Divyang Citizen Through <span className="text-primary">Accessible Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Sahayak is your trusted companion to discover government schemes, understand your rights, and navigate essential services with dignity and ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto text-base gap-2 rounded-full h-14 px-8">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base rounded-full h-14 px-8 bg-background">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-60"></div>
            <div className="relative bg-card border border-border shadow-xl rounded-2xl p-8 max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-lg">Sahayak Match</h3>
                    <p className="text-xs text-muted-foreground">Found 12 eligible schemes</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-md">98% Match</div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 items-center bg-muted/50 p-4 rounded-xl">
                    <div className="h-10 w-10 bg-background rounded-full flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-muted-foreground/20 rounded-full w-3/4 mb-2"></div>
                      <div className="h-3 bg-muted-foreground/10 rounded-full w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Everything You Need in One Place</h2>
            <p className="text-muted-foreground text-lg">We've simplified the complex landscape of government services into accessible, easy-to-use tools.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {feature.comingSoon && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold bg-muted text-muted-foreground px-2 py-1 rounded">Coming Soon</span>
                )}
                <div className="bg-muted w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{feature.description}</p>
                <Link href={feature.comingSoon ? "#" : "/login"} onClick={(e) => feature.comingSoon && e.preventDefault()}>
                  <Button variant="ghost" className={`p-0 h-auto font-semibold hover:bg-transparent ${feature.comingSoon ? 'text-muted-foreground cursor-not-allowed' : 'text-primary hover:text-primary/80'}`}>
                    {feature.comingSoon ? 'In Development' : 'Explore Feature'} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Sahayak */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Built With Care, Built For You</h2>
            <p className="text-primary-foreground/80 text-lg">Sahayak bridges the gap between government intent and citizen access.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HeartHandshake className="h-8 w-8" />, title: "Easy to Use", desc: "Intuitive interface designed to minimize cognitive load and confusion." },
              { icon: <ShieldCheck className="h-8 w-8" />, title: "Verified Information", desc: "All scheme details are sourced directly from official government portals." },
              { icon: <Accessibility className="h-8 w-8" />, title: "Accessible Design", desc: "WCAG compliant with built-in tools for high contrast and text scaling." },
              { icon: <UserCheck className="h-8 w-8" />, title: "Personalized Guidance", desc: "Recommendations tailored specifically to your profile and disability type." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="mx-auto w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Your Journey to Empowerment</h2>
            <p className="text-muted-foreground text-lg">Four simple steps to access the benefits you deserve.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-muted/50 rounded-full hidden sm:block"></div>

            <div className="space-y-12 relative">
              {[
                { step: "1", title: "Create Your Account", desc: "Sign up with basic details in under two minutes." },
                { step: "2", title: "Complete Your Profile", desc: "Provide your disability and demographic information securely." },
                { step: "3", title: "Discover Eligible Schemes", desc: "Our engine instantly matches you with government schemes you qualify for." },
                { step: "4", title: "Access Services Easily", desc: "Get step-by-step guidance on required documents and application procedures." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col sm:flex-row items-start gap-6 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`hidden sm:block flex-1 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {/* Empty space for desktop layout */}
                  </div>
                  
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className={`flex-1 bg-card border border-border p-6 rounded-2xl shadow-sm ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <Link href="/register">
              <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                Start Your Journey Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
