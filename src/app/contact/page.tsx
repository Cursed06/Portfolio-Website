import React from 'react';
import Link from 'next/link';
import { ContactSection } from '@/components/contact/ContactSection';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const metadata = {
  title: 'Contact & Collaboration — Rama Prodjowijono',
  description: 'Get in touch for software engineering internship opportunities, research projects, or design collaborations.',
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono-code text-xs text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-3xl">
          <Badge variant="primary" size="sm" className="mb-3">
            GET IN TOUCH
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight mb-4">
            Contact &amp; Collaboration
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
            Interested in discussing an internship role, evaluating a technical system, or reviewing visual work? Reach out across any direct channel below.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
