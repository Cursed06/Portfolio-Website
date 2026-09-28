'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
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
    <section id="engineering" className="py-16 lg:py-24 bg-[#fcfbf7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeader
            badgeText="03 // SELECTED SYSTEMS &amp; SOFTWARE"
            badgeVariant="primary"
            title="Production Software &amp; AI Architectures."
            subtitle="Explore detailed case studies across AI readiness platforms, computer vision classifiers, and enterprise waste infrastructure."
            className="mb-0"
          />
          <Button
            href="/projects"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            All Projects Archive
          </Button>
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
          <div className="text-center py-16 px-4 border border-dashed border-slate-300 rounded-2xl bg-[#f7f6f0]">
            <Terminal className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-headline font-bold text-lg text-slate-800">No projects in this category</h3>
            <p className="text-sm text-slate-500 font-mono-code mt-1">Check back soon as new systems are deployed.</p>
          </div>
        )}

      </div>
    </section>
  );
};
