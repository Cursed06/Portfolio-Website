import React from 'react';
import Link from 'next/link';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { ResumeCTA } from '@/components/contact/ResumeCTA';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const metadata = {
  title: 'Experience & Leadership — Rama Prodjowijono',
  description: 'Track record in software engineering internships, technical teaching, and design leadership.',
};

export default function ExperiencePage() {
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
          <Badge variant="neutral" size="sm" className="mb-3">
            TRACK RECORD
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight mb-4">
            Professional Experience &amp; Leadership
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
            Detailed chronological record of internship contributions, undergraduate teaching, and organizational leadership.
          </p>
        </div>
      </div>

      <ExperienceTimeline />
      <ResumeCTA />
    </div>
  );
}
