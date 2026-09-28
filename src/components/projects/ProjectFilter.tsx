'use client';

import React from 'react';
import { ProjectCategory } from '@/types';

interface ProjectFilterProps {
  categories: (ProjectCategory | 'All')[];
  selectedCategory: ProjectCategory | 'All';
  onSelectCategory: (category: ProjectCategory | 'All') => void;
  counts?: Record<string, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Project Categories">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectCategory(cat)}
            className={`font-mono-code text-xs px-3.5 py-1.5 rounded-full border transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              isSelected
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-semibold'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span>{cat}</span>
            {counts && counts[cat] !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {counts[cat]}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
