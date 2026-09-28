import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f6f0] text-slate-700 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-lg text-slate-900 tracking-tight">
                {profileData.name}
              </span>
              <span className="font-mono-code text-xs text-blue-600 font-semibold">// CS × DESIGN</span>
            </div>
            <p className="text-sm text-slate-600 max-w-md font-body leading-relaxed">
              {profileData.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
              >
                <LinkedinIcon size={16} />
              </a>
              {profileData.socials.instagram && (
                <a
                  href={profileData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Portfolio"
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-pink-600 hover:border-pink-300 transition-colors shadow-xs"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-mono-code text-xs uppercase tracking-wider text-slate-900 font-bold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-blue-600 transition-colors">
                  About &amp; Duality
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-blue-600 transition-colors">
                  Skills &amp; Tooling
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-600 transition-colors">
                  Software Projects
                </Link>
              </li>
              <li>
                <Link href="/#design" className="hover:text-blue-600 transition-colors">
                  Design Systems
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-blue-600 transition-colors">
                  Experience &amp; Leadership
                </Link>
              </li>
              <li>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors inline-flex items-center gap-1"
                >
                  Resume (PDF) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Colophon & Status */}
          <div>
            <h3 className="font-mono-code text-xs uppercase tracking-wider text-slate-900 font-bold mb-3">
              Colophon
            </h3>
            <p className="text-xs text-slate-500 font-mono-code leading-relaxed mb-3">
              Typography: Space Grotesk, Hanken Grotesk &amp; JetBrains Mono. Built with Next.js, TypeScript &amp; Tailwind CSS.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-slate-200 font-mono-code text-[11px] text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to 2025/2026 Roles</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200/80 flex items-center justify-end text-xs text-slate-500 font-mono-code">
          <a
            href="#top"
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
