import React from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Terminal, Palette, CheckCircle2, GraduationCap, MapPin, Award } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Badge } from '@/components/ui/Badge';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#fcfbf7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badgeText="01 // PHILOSOPHY & DUALITY"
          badgeVariant="primary"
          title="The Engineering & Design Duality."
          subtitle="Bridging technical rigor (algorithms, backend architectures, mobile development) with expressive graphic communication (design systems, motion graphics, editorial layouts)."
        />

        {/* Profile Card & Bio Intro */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Portrait Image */}
            <div className="md:col-span-4 lg:col-span-3 flex justify-center">
              <div className="relative w-48 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-100 group">
                <Image
                  src={profileData.avatarUrl || '/images/profile.jpg'}
                  alt={profileData.name}
                  fill
                  sizes="(max-width: 768px) 192px, 208px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-headline font-bold text-sm leading-tight">{profileData.name}</p>
                  <p className="font-mono-code text-[11px] text-blue-200">CS @ BINUS</p>
                </div>
              </div>
            </div>

            {/* Bio & Education Details */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="success" size="sm">
                  Available for Internships
                </Badge>
              </div>

              <div className="space-y-2 text-slate-700 font-body leading-relaxed text-sm sm:text-base">
                {profileData.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Education Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-[#fcfbf7] border border-slate-200">
                  <div className="flex items-center gap-2 text-blue-700 font-mono-code text-xs font-semibold mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>BINUS University • Jakarta Barat, DKI Jakarta</span>
                  </div>
                  <p className="font-headline font-bold text-sm text-slate-900">{profileData.education.degree}</p>
                  <p className="font-mono-code text-xs text-slate-500">{profileData.education.period} • GPA 3.71/4.00</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fcfbf7] border border-slate-200">
                  <div className="flex items-center gap-2 text-amber-800 font-mono-code text-xs font-semibold mb-1">
                    <Award className="w-4 h-4" />
                    <span>SMK Widiatmika • Badung, Bali</span>
                  </div>
                  <p className="font-headline font-bold text-sm text-slate-900">Multimedia Major</p>
                  <p className="font-mono-code text-xs text-slate-500">2021 — 2024 • Graphic Design & Animation</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Duality Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Engineering Column */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-xs hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-slate-900">Computer Science & Systems</h3>
                <span className="font-mono-code text-xs text-blue-600">Technical Rigor & Scalability</span>
              </div>
            </div>

            <p className="text-slate-600 font-body leading-relaxed mb-6">
              Strong foundation in software engineering, database architecture, algorithms, and mobile systems. I build responsive web apps and cross-platform mobile experiences with robust backend integrations.
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-100 font-mono-code text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Languages: Java, Python, C, TypeScript, JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Frameworks: Flutter, Express.js, Nest.js, React, Next.js, Prisma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>AI & Vision: Google Gemini API, TensorFlow, EfficientNet, OpenCV</span>
              </div>
            </div>
          </div>

          {/* Design Column */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-xs hover:border-amber-300 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-slate-900">Graphic Design & Visual Systems</h3>
                <span className="font-mono-code text-xs text-amber-800">Typographic Precision & Motion</span>
              </div>
            </div>

            <p className="text-slate-600 font-body leading-relaxed mb-6">
              Trained in multimedia and visual communication with commercial resort internship experience. Skilled in motion graphics, video post-production, branding identity, and editorial print design.
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-100 font-mono-code text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Design Suite: Adobe Photoshop, Illustrator, Affinity, Figma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Motion & Video: After Effects, Premiere Pro, DaVinci Resolve</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Communication: Social Campaigns, Event Branding, Wayfinding & Menus</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
