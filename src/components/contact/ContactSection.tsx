'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { profileData } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { Mail, Check, Copy, ArrowUpRight, MapPin, Sparkles, FileText } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          badgeText="06 // CONNECT &amp; COLLABORATE"
          badgeVariant="primary"
          title="Let's connect and build."
          subtitle="Whether you have an internship opening, an engineering inquiry, or a visual design project, feel free to reach out across any of these channels."
        />

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Card 1: Email (Primary Direct) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100 uppercase tracking-wide">
                  Primary Channel
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-slate-900 mb-1">
                Direct Email
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body mb-5 leading-relaxed">
                Best for internship inquiries, project proposals, and formal academic communications.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f7f6f0] border border-slate-200 gap-2">
                <span className="font-mono-code text-xs sm:text-sm font-semibold text-slate-900 truncate">
                  {profileData.socials.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-mono-code text-xs font-medium transition-colors shadow-2xs shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <Button
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.socials.email}&su=${encodeURIComponent('Inquiry / Opportunity — Rama Prodjowijono')}`}
                variant="outline"
                size="md"
                className="w-full justify-center border-slate-200 hover:border-blue-400 hover:text-blue-700"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Compose in Gmail
              </Button>
            </div>
          </div>

          {/* Card 2: LinkedIn (Professional) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-sky-50 text-[#0077b5] border border-sky-100">
                  <LinkedinIcon size={24} />
                </div>
                <span className="font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium uppercase tracking-wide">
                  Professional Network
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-slate-900 mb-1">
                LinkedIn
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body mb-5 leading-relaxed">
                Connect for professional networking, recommendations, career updates, and industry conversations.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-[#f7f6f0] border border-slate-200">
                <span className="font-mono-code text-xs text-slate-500 block text-[10px] uppercase">Profile</span>
                <span className="font-mono-code text-xs sm:text-sm font-semibold text-slate-900">
                  linkedin.com/in/rama-prodjowijono
                </span>
              </div>

              <Button
                href={profileData.socials.linkedin}
                variant="outline"
                size="md"
                className="w-full justify-center border-slate-200 hover:border-sky-400 hover:text-sky-700"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>

          {/* Card 3: GitHub (Code & Repositories) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-400 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-900 border border-slate-200">
                  <GithubIcon size={24} />
                </div>
                <span className="font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium uppercase tracking-wide">
                  Engineering Hub
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-slate-900 mb-1">
                GitHub
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body mb-5 leading-relaxed">
                Explore open-source repositories, software architectures, commits, and full-stack side projects.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-[#f7f6f0] border border-slate-200">
                <span className="font-mono-code text-xs text-slate-500 block text-[10px] uppercase">Handle</span>
                <span className="font-mono-code text-xs sm:text-sm font-semibold text-slate-900">
                  github.com/Cursed06
                </span>
              </div>

              <Button
                href={profileData.socials.github}
                variant="outline"
                size="md"
                className="w-full justify-center border-slate-200 hover:border-slate-800 hover:text-slate-900"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                View Repositories
              </Button>
            </div>
          </div>

          {/* Card 4: Instagram (Visual Design Portfolio) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
                  <InstagramIcon size={24} />
                </div>
                <span className="font-mono-code text-[11px] px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold border border-amber-100 uppercase tracking-wide">
                  Design Archive
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl text-slate-900 mb-1">
                Instagram Design Portfolio
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body mb-5 leading-relaxed">
                Visual communication artifacts, event branding packages, typography posters, and creative experiments.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-[#f7f6f0] border border-slate-200">
                <span className="font-mono-code text-xs text-slate-500 block text-[10px] uppercase">Handle</span>
                <span className="font-mono-code text-xs sm:text-sm font-semibold text-slate-900">
                  instagram.com/visualsbyr_
                </span>
              </div>

              <Button
                href={profileData.socials.instagram || 'https://instagram.com/visualsbyr_'}
                variant="outline"
                size="md"
                className="w-full justify-center border-slate-200 hover:border-amber-400 hover:text-amber-900 hover:bg-amber-50/40"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Explore @visualsbyr_
              </Button>
            </div>
          </div>

        </div>

        {/* Status & Location Meta Banner */}
        <div className="rounded-2xl bg-[#f7f6f0] border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-2xs shrink-0">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono-code text-xs text-emerald-700 font-semibold uppercase tracking-wider">
                  {profileData.availability}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono-code text-slate-600">
                Based in <span className="font-semibold text-slate-900">{profileData.location}</span> • Open to remote and hybrid opportunities.
              </p>
            </div>
          </div>

          <Button
            href={profileData.resumeUrl}
            variant="outline"
            size="md"
            leftIcon={<FileText className="w-4 h-4 text-slate-600" />}
            className="shrink-0 w-full sm:w-auto justify-center bg-white"
          >
            View Full Resume (PDF)
          </Button>
        </div>

      </div>
    </section>
  );
};
