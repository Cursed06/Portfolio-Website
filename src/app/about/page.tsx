import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ResumeCTA } from '@/components/contact/ResumeCTA';
import { ArrowLeft, Terminal, Palette, BookOpen, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { profileData } from '@/data/profile';

export const metadata = {
  title: 'About & Philosophy — Rama Prodjowijono',
  description: 'Learn more about my dual background in Computer Science and Graphic Design.',
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Back Link */}
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
            BACKGROUND &amp; IDENTITY
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight mb-6">
            Engineering Systems with Visual Precision.
          </h1>
          <div className="space-y-4 text-base sm:text-lg text-slate-700 font-body leading-relaxed">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <AboutSection />
      <SkillsSection />
      <ResumeCTA />
    </div>
  );
}
