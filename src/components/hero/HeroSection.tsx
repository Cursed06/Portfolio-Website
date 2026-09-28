'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download, Terminal, Palette, Sparkles, Layers, Cpu } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-blueprint-grid pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200">
      {/* Decorative ambient gradient blooms */}
      <div className="absolute top-10 left-1/4 -z-10 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 -z-10 w-96 h-96 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Core Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6">

            {/* Duality Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="primary" size="md">
                <Terminal className="w-3.5 h-3.5" />
                <span>01 // Software Engineer</span>
              </Badge>
              <Badge variant="tertiary" size="md">
                <Palette className="w-3.5 h-3.5" />
                <span>02 // Graphic Designer</span>
              </Badge>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-slate-900 tracking-tight leading-[1.1]">
              Hi, I&apos;m <span className="text-blue-600">{profileData.name}</span>.
              <span className="block mt-2 text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium">
                I build robust software systems &amp; craft disciplined visual experiences.
              </span>
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-lg sm:text-xl text-slate-600 font-body leading-relaxed max-w-2xl">
              Computer Science undergraduate bridging full-stack systems, mobile development, and high-performance algorithms with typographic rigor and brand design.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href="#engineering"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Software Work
              </Button>
              <Button
                href="#design"
                variant="outline"
                size="lg"
                leftIcon={<Palette className="w-4 h-4 text-amber-800" />}
              >
                Explore Design Gallery
              </Button>
              <Button
                href={profileData.resumeUrl}
                variant="ghost"
                size="lg"
                leftIcon={<Download className="w-4 h-4 text-slate-600" />}
              >
                Resume PDF
              </Button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 font-mono-code text-xs">
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px]">Specialization</span>
                <span className="font-semibold text-slate-900">Full-Stack &amp; Mobile</span>
              </div>
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px]">Design Discipline</span>
                <span className="font-semibold text-slate-900">Brand &amp; Systems</span>
              </div>
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px]">Status</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Ready to Hire
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Duality Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-md shadow-slate-100 hover:shadow-lg transition-all duration-300">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-100 relative shadow-xs">
                    <Image
                      src={profileData.avatarUrl || '/images/profile.jpg'}
                      alt={profileData.name}
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-sm text-slate-900">{profileData.name}</h3>
                    <p className="font-mono-code text-xs text-blue-600">BINUS University • CS</p>
                  </div>
                </div>
                <Badge variant="primary" size="sm">
                  GPA 3.71
                </Badge>
              </div>

              {/* Duality Split View */}
              <div className="space-y-4">

                {/* Engineering Block */}
                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono-code text-xs space-y-2 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>engineer.ts</span>
                    </span>
                    <span className="text-[10px] text-slate-500">TYPESCRIPT / PYTHON / FLUTTER</span>
                  </div>
                  <pre className="overflow-x-auto text-[11px] text-slate-300 py-1 leading-relaxed">
                    {`const engineer = {
  stack: ["React", "Spring Boot", "Flutter"],
  focus: ["Software Engineering", "Mobile Development"],
  status: "Shipping robust code with 0 regressions"
};`}
                  </pre>
                </div>

                {/* Design Block */}
                <div className="p-4 rounded-xl bg-[#fcfbf7] border border-amber-200 text-slate-900 space-y-2">
                  <div className="flex items-center justify-between text-slate-500 pb-1 border-b border-amber-100 font-mono-code text-xs">
                    <span className="flex items-center gap-1.5 text-amber-800 font-semibold">
                      <Palette className="w-3.5 h-3.5" />
                      <span>design-spec.fig</span>
                    </span>
                    <span className="text-[10px]">FIGMA / ADOBE / AFFINITY</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="font-headline font-bold text-sm text-slate-900">Swiss Grid &amp; Identity</p>
                      <p className="text-xs text-slate-600">Typography hierarchy, color tokens &amp; posters</p>
                    </div>
                    <div className="flex -space-x-1.5">
                      <span className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white"></span>
                      <span className="w-6 h-6 rounded-full bg-[#d9381e] border-2 border-white"></span>
                      <span className="w-6 h-6 rounded-full bg-slate-900 border-2 border-white"></span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Card Footer Tagline */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-mono-code text-[11px] text-slate-500">
                <span>// ENGINEERING RIGOR</span>
                <span>VISUAL CRAFT //</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
