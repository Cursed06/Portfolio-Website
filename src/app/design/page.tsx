'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { designsData } from '@/data/designs';
import { DesignCard } from '@/components/design/DesignCard';
import { DesignLightbox } from '@/components/design/DesignLightbox';
import { DesignCategory, DesignWork } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { InstagramIcon } from '@/components/ui/Icons';
import { ArrowLeft, ArrowUpRight, Palette } from 'lucide-react';

export default function DesignGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<DesignCategory | 'All'>('All');
  const [activeDesign, setActiveDesign] = useState<DesignWork | null>(null);

  const categories: (DesignCategory | 'All')[] = [
    'All',
    'Posters',
    'Event Graphics',
    'Editorial',
    'Branding',
  ];

  const filteredDesigns = useMemo(() => {
    if (selectedCategory === 'All') return designsData;
    return designsData.filter((d) => d.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono-code text-xs text-slate-600 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="tertiary" size="sm">
              DESIGN GALLERY
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight mb-4">
            Visual Communication &amp; Design Systems
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
            Selected graphic design artifacts, typographic posters, and brand identities. The full portfolio archive is updated on Instagram.
          </p>
        </div>
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

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count = cat === 'All' ? designsData.length : designsData.filter((d) => d.category === cat).length;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono-code text-xs px-3.5 py-1.5 rounded-full border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-amber-800 text-white border-amber-800 shadow-xs font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-amber-900 text-amber-100' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Design Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDesigns.map((design, index) => (
          <DesignCard
            key={design.slug}
            design={design}
            priority={index < 4}
            onOpen={(d) => setActiveDesign(d)}
          />
        ))}
      </div>

      {/* Instagram Portfolio Callout Banner */}
      <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/60 shrink-0">
            <InstagramIcon size={24} />
          </div>
          <div>
            <h4 className="font-headline font-bold text-base text-slate-900">
              Looking for more graphic design &amp; branding pieces?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-body mt-0.5">
              Explore the ongoing feed of posters, motion clips, and visual identities on Instagram <span className="font-mono-code font-semibold text-amber-900">@visualsbyr_</span>.
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

      {filteredDesigns.length === 0 && (
        <div className="text-center py-20 px-4 border border-dashed border-slate-300 rounded-2xl bg-[#f7f6f0]">
          <Palette className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="font-headline font-bold text-lg text-slate-800">No pieces found</h3>
          <p className="text-sm text-slate-500 font-mono-code mt-1">Please select another category filter.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      <DesignLightbox
        design={activeDesign}
        onClose={() => setActiveDesign(null)}
      />
    </div>
  );
}
