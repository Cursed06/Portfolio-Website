import React from 'react';
import Image from 'next/image';
import { DesignWork } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Maximize2, Palette } from 'lucide-react';

interface DesignCardProps {
  design: DesignWork;
  onOpen: (design: DesignWork) => void;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
}

export const DesignCard: React.FC<DesignCardProps> = ({
  design,
  onOpen,
  priority = false,
  loading,
}) => {
  const isPortrait = design.aspectRatio === 'portrait';

  return (
    <div
      onClick={() => onOpen(design)}
      className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Image Frame */}
      <div className={`relative w-full overflow-hidden bg-[#f7f6f0] ${
        isPortrait ? 'aspect-[3/4]' : 'aspect-[16/10]'
      }`}>
        <Image
          src={design.image}
          alt={design.title}
          fill
          priority={priority}
          loading={loading ?? (priority ? 'eager' : undefined)}
          className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-xs">
          <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-flex items-center justify-center p-3 rounded-full bg-white text-slate-900 shadow-md">
              <Maximize2 className="w-5 h-5" />
            </span>
            <p className="font-mono-code text-xs text-white uppercase tracking-wider font-semibold">
              Inspect Specimen
            </p>
          </div>
        </div>

        {/* Category Chip */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="tertiary" size="sm">
            {design.category}
          </Badge>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-headline font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors leading-tight">
              {design.title}
            </h3>
            <span className="font-mono-code text-xs text-slate-400 shrink-0">
              {design.year}
            </span>
          </div>
          {design.subtitle && (
            <p className="text-xs text-slate-600 font-body line-clamp-2 mt-1">
              {design.subtitle}
            </p>
          )}
        </div>

        {design.tools && (
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between font-mono-code text-[11px] text-slate-500">
            <span>{design.tools.join(' • ')}</span>
            <span className="text-amber-800 font-semibold group-hover:translate-x-1 transition-transform">→</span>
          </div>
        )}
      </div>
    </div>
  );
};
