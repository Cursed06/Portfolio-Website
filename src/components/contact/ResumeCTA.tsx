import React from 'react';
import { Button } from '@/components/ui/Button';
import { profileData } from '@/data/profile';
import { FileText, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-blue-900 to-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-950/60 border border-blue-800/60 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono-code text-xs uppercase tracking-wider text-blue-300 font-semibold">
                Actively Interviewing
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-white tracking-tight">
              Looking for a disciplined SWE / Tech intern?
            </h2>

            <p className="text-slate-300 font-body text-base leading-relaxed">
              Equipped with end-to-end full-stack capabilities, computer vision research experience, and a high aesthetic bar for user interfaces.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 font-mono-code text-xs text-blue-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Flutter &amp; Mobile
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                React &amp; Express.js
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Adobe &amp; Visual Design
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button
              href={profileData.resumeUrl}
              variant="primary"
              size="lg"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold"
              leftIcon={<Download className="w-4 h-4" />}
            >
              Download Resume (PDF)
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              className="bg-transparent border-slate-700 text-white hover:bg-white/10"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Schedule an Interview
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
