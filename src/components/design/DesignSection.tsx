'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { DesignCard } from '@/components/design/DesignCard';
import { DesignLightbox } from '@/components/design/DesignLightbox';
import { designsData } from '@/data/designs';
import { DesignWork } from '@/types';
import { Button } from '@/components/ui/Button';
import { InstagramIcon } from '@/components/ui/Icons';
import { ArrowUpRight } from 'lucide-react';

export const DesignSection: React.FC = () => {
  const [activeDesign, setActiveDesign] = useState<DesignWork | null>(null);
  const displayedDesigns = designsData.slice(0, 4);

  return (
    <section id="design" className="py-16 lg:py-24 bg-[#f7f6f0] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeader
            badgeText="04 // VISUAL SYSTEMS &amp; TYPOGRAPHY"
            badgeVariant="tertiary"
            title="Design Systems &amp; Visual Communication."
            subtitle="Selected graphic design artifacts, typographic posters, and brand identities. Explore full archive on Instagram."
            className="mb-0"
          />
          <Button
            href="https://instagram.com/visualsbyr_"
            variant="outline"
            size="md"
            leftIcon={<InstagramIcon size={16} className="text-amber-800" />}
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0 border-amber-300 hover:bg-amber-50/60 hover:text-amber-900"
          >
            Instagram Portfolio
          </Button>
        </div>

        {/* Gallery Grid (4 Main Designs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedDesigns.map((design, index) => (
            <DesignCard
              key={design.slug}
              design={design}
              priority={index < 4}
              onOpen={(d) => setActiveDesign(d)}
            />
          ))}
        </div>

        {/* Instagram Portfolio Callout Banner */}
        <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/60 shrink-0">
              <InstagramIcon size={24} />
            </div>
            <div>
              <h4 className="font-headline font-bold text-base text-slate-900">
                Explore More Design Work &amp; Case Studies
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-body mt-0.5">
                Complete archive of typographic posters, motion graphics, and event identities published at <span className="font-mono-code font-semibold text-amber-900">@visualsbyr_</span>.
              </p>
            </div>
          </div>
          <Button
            href="https://instagram.com/visualsbyr_"
            variant="outline"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            className="shrink-0 w-full sm:w-auto justify-center border-slate-200 hover:border-amber-400 hover:text-amber-900 hover:bg-amber-50/40"
          >
            Visit @visualsbyr_
          </Button>
        </div>

        {/* Lightbox Modal */}
        <DesignLightbox
          design={activeDesign}
          onClose={() => setActiveDesign(null)}
        />

      </div>
    </section>
  );
};
