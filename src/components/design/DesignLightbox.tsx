'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { DesignWork } from '@/types';
import { X, Palette, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface DesignLightboxProps {
  design: DesignWork | null;
  onClose: () => void;
}

export const DesignLightbox: React.FC<DesignLightboxProps> = ({ design, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (design) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [design, onClose]);

  if (!design) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Container */}
        <div className="lg:w-7/12 bg-[#f4f2eb] p-6 flex items-center justify-center relative min-h-[320px] lg:min-h-[500px]">
          <div className="relative w-full h-full max-h-[70vh] aspect-[4/3] flex items-center justify-center">
            <Image
              src={design.image}
              alt={design.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Specimen Metadata Panel */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="tertiary" size="sm">
                  {design.category}
                </Badge>
                <Badge variant="code" size="sm">
                  {design.year}
                </Badge>
              </div>
              <h3 className="font-headline font-bold text-2xl text-slate-900 leading-tight">
                {design.title}
              </h3>
              {design.subtitle && (
                <p className="font-mono-code text-xs text-amber-900 font-medium">
                  {design.subtitle}
                </p>
              )}
            </div>

            {design.description && (
              <div className="space-y-2">
                <h4 className="font-mono-code text-xs uppercase text-slate-400 font-bold tracking-wider">
                  DESIGN RATIONALE &amp; CONCEPT
                </h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">
                  {design.description}
                </p>
              </div>
            )}

            {/* Spec details */}
            <div className="space-y-3 pt-4 border-t border-slate-100 font-mono-code text-xs">
              {design.tools && (
                <div className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Tools Used</span>
                    <span className="text-slate-800">{design.tools.join(', ')}</span>
                  </div>
                </div>
              )}
              {design.clientOrContext && (
                <div className="flex items-start gap-2">
                  <Palette className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Context / Exhibition</span>
                    <span className="text-slate-800">{design.clientOrContext}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="font-mono-code text-xs text-slate-400">DESIGN SPECIMEN</span>
            <Button variant="outline" size="sm" onClick={onClose}>
              Close Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
