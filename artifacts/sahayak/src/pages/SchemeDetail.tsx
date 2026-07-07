import React, { useState } from 'react';
import { useParams, Link } from 'wouter';
import { mockSchemes } from '@/data/mockData';
import { ArrowLeft, Building2, MapPin, Calendar, CheckCircle2, FileText, IndianRupee, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

export default function SchemeDetail() {
  const { id } = useParams();
  const scheme = mockSchemes.find(s => s.id === id);
  const { toast } = useToast();
  const [isApplying, setIsApplying] = useState(false);

  if (!scheme) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Scheme Not Found</h1>
        <Link href="/schemes">
          <Button variant="outline">Return to Schemes</Button>
        </Link>
      </div>
    );
  }

  const handleApply = () => {
    setIsApplying(true);
    toast({
      title: "Redirecting...",
      description: "Taking you to the official government portal.",
    });
    setTimeout(() => {
      setIsApplying(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/schemes" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Schemes
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
      >
        {/* Header Header */}
        <div className="bg-primary/5 border-b border-primary/10 p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
              {scheme.category}
            </Badge>
            <Badge variant="outline" className="bg-background">
              <MapPin className="h-3 w-3 mr-1" /> {scheme.state}
            </Badge>
            <Badge variant="outline" className="bg-background">
              <Building2 className="h-3 w-3 mr-1" /> {scheme.ministry}
            </Badge>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
            {scheme.name}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {scheme.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-10">
          
          {/* Key Info Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {scheme.deadline && (
              <Card className="bg-destructive/5 border-destructive/10">
                <CardContent className="p-4 flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-destructive shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-destructive uppercase tracking-wider mb-1">Deadline</span>
                    <span className="font-bold text-foreground">{new Date(scheme.deadline).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </CardContent>
              </Card>
            )}
            <Card className="bg-muted/50">
              <CardContent className="p-4 flex items-start gap-3">
                <IndianRupee className="h-6 w-6 text-muted-foreground shrink-0" />
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Application Fee</span>
                  <span className="font-bold text-foreground">Free for PwD Candidates</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-px bg-border"></div>

          {/* Benefits */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" /> Key Benefits
            </h2>
            <ul className="space-y-3 pl-8">
              {scheme.benefits.map((benefit, idx) => (
                <li key={idx} className="list-disc text-foreground/90 pl-2 marker:text-primary">
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-secondary" /> Eligibility Criteria
            </h2>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-5 text-foreground/90 leading-relaxed">
              {scheme.eligibility}
            </div>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-accent-foreground" /> Required Documents
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {scheme.requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg border border-border">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium">{doc}</span>
                </div>
              ))}
              {scheme.requiredDocuments.length === 0 && (
                <p className="text-muted-foreground italic">No specific documents listed. General identity proof may be required.</p>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center mt-12">
            <h3 className="text-xl font-bold mb-2">Ready to apply?</h3>
            <p className="text-muted-foreground mb-6">Ensure you have all your documents ready before starting the application.</p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full px-8 gap-2 text-lg h-14"
              onClick={handleApply}
              disabled={isApplying}
            >
              {isApplying ? 'Redirecting...' : 'Apply on Official Portal'} 
              {!isApplying && <ExternalLink className="h-5 w-5" />}
            </Button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
