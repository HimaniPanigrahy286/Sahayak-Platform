import React from 'react';
import { Link } from 'wouter';
import { Accessibility, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                <Accessibility className="h-6 w-6" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-foreground">Sahayak</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Empowering Divyang citizens across India by providing easy access to government schemes, rights information, and essential services.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/schemes" className="text-muted-foreground hover:text-primary transition-colors">Scheme Explorer</Link></li>
              <li><Link href="/knowledge" className="text-muted-foreground hover:text-primary transition-colors">Knowledge Hub</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/udid" className="text-muted-foreground hover:text-primary transition-colors">UDID Guide</Link></li>
              <li><Link href="/eligibility" className="text-muted-foreground hover:text-primary transition-colors">Eligibility Checker</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessibility Statement</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Department of Empowerment of Persons with Disabilities, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>1800-11-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>support@sahayak.gov.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Sahayak Platform. Created for Samsung Solve for Tomorrow. Mock Data Only.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">Govt. of India Initiative Mockup</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
