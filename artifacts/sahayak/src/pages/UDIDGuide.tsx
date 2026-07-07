import React from 'react';
import { motion } from 'framer-motion';
import { IdCard, CheckCircle2, FileText, UploadCloud, RefreshCcw, HelpCircle } from 'lucide-react';
import { mockFAQs } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

export default function UDIDGuide() {
  const udidFaqs = mockFAQs.find(f => f.section.includes("UDID"))?.items || [];

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-muted/30 border-b border-border py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <IdCard className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">UDID Card Guide</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the Unique Disability ID, its benefits, and how to apply for one.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl mt-12 space-y-16">
        
        {/* What is UDID */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">What is a UDID Card?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Unique Disability ID (UDID) project is being implemented to create a National Database for PwDs. The card acts as a single document of identification, verification, and availing of various benefits.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It eliminates the need for carrying multiple documents and maintaining multiple copies of the disability certificate.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-secondary" /> Valid across India</li>
              <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-secondary" /> Single identification document</li>
              <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-secondary" /> Required for most govt schemes</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm transform rotate-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Govt of India</div>
                <div className="font-serif font-bold text-lg text-primary">Swavlamban Card</div>
              </div>
              <IdCard className="h-8 w-8 text-muted-foreground/30" />
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-20 h-24 bg-muted border border-border flex items-center justify-center text-xs text-muted-foreground">Photo</div>
                <div className="space-y-2 flex-1">
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                  <div className="h-3 bg-muted rounded w-5/6"></div>
                </div>
              </div>
              <div className="h-2 bg-primary/20 rounded w-full"></div>
            </div>
          </div>
        </section>

        {/* Application Process Timeline */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">Application Process</h2>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-[24px] top-4 bottom-4 w-0.5 bg-border hidden sm:block"></div>
            
            <div className="space-y-8">
              {[
                { title: "Gather Documents", desc: "Aadhar card, photo, signature, and existing disability cert (if any).", icon: <FileText className="h-5 w-5" /> },
                { title: "Online Registration", desc: "Fill the application form on the Swavlamban portal.", icon: <UploadCloud className="h-5 w-5" /> },
                { title: "Medical Assessment", desc: "Visit your designated district hospital for medical evaluation.", icon: <CheckCircle2 className="h-5 w-5" /> },
                { title: "Card Generation", desc: "UDID is generated online and physical card is dispatched by post.", icon: <IdCard className="h-5 w-5" /> }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="pt-3">
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="rounded-full shadow-md" onClick={() => window.open('https://www.swavlambancard.gov.in/', '_blank')}>
              Go to Official UDID Portal
            </Button>
          </div>
        </section>

        {/* Documents Required */}
        <section className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">Documents Required</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="bg-card">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-muted rounded-md"><FileText className="h-4 w-4" /></div>
                <span className="font-medium">Recent Color Photograph</span>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-muted rounded-md"><FileText className="h-4 w-4" /></div>
                <span className="font-medium">Signature / Thumb Impression</span>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-muted rounded-md"><FileText className="h-4 w-4" /></div>
                <span className="font-medium">Address Proof (Aadhar/Voter ID)</span>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 bg-muted rounded-md"><FileText className="h-4 w-4" /></div>
                <span className="font-medium">Existing Disability Certificate (Optional)</span>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="flex items-center gap-2 justify-center mb-8">
            <HelpCircle className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-2xl font-serif font-bold text-center">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-card border border-border rounded-xl px-4 shadow-sm">
            {udidFaqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className={idx === udidFaqs.length - 1 ? 'border-none' : ''}>
                <AccordionTrigger className="text-left font-medium hover:text-primary py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

      </div>
    </div>
  );
}
