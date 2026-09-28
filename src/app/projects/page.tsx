'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ProjectCategory } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');

  const categories: (ProjectCategory | 'All')[] = ['All', 'AI', 'Web', 'Mobile'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projectsData.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        result[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return result;
  }, [categories]);

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb / Back */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono-code text-xs text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Title */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="primary" size="sm">
            ENGINEERING ARCHIVE
          </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight mb-4">
          Software &amp; Systems Projects
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
          Detailed technical case studies spanning full-stack applications, artificial intelligence, computer vision, and backend infrastructure.
        </p>
      </div>

      {/* Filter Tabs */}
      <ProjectFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        counts={counts}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} featured={project.featured} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 px-4 border border-dashed border-slate-300 rounded-2xl bg-[#f7f6f0]">
          <Terminal className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="font-headline font-bold text-lg text-slate-800">No projects found</h3>
          <p className="text-sm text-slate-500 font-mono-code mt-1">Please select another category filter.</p>
        </div>
      )}
    </div>
  );
}
