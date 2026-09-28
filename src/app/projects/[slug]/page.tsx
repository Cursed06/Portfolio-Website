import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projectsData, getProjectBySlug } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/Icons';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  User,
  Clock,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Cpu,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for footer navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="py-12 lg:py-20 bg-[#fcfbf7] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono-code text-xs text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 pb-10 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="primary" size="md">
              {project.category}
            </Badge>
            <Badge variant="code" size="md">
              {project.year}
            </Badge>
            {project.featured && (
              <Badge variant="tertiary" size="md">
                Featured Case Study
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-lg sm:text-xl text-blue-800 font-headline font-medium">
              {project.subtitle}
            </p>
          )}

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Project Meta Bar (Role, Timeline, Tech) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#f7f6f0] border border-slate-200/80 font-mono-code text-xs">
            {project.role && (
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">My Role</span>
                <span className="font-semibold text-slate-900">{project.role}</span>
              </div>
            )}
            {project.timeline && (
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Timeline</span>
                <span className="font-semibold text-slate-900">{project.timeline}</span>
              </div>
            )}
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Category</span>
              <span className="font-semibold text-slate-900">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Year</span>
              <span className="font-semibold text-slate-900">{project.year}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="primary"
                size="md"
                isExternal
                leftIcon={<GithubIcon size={16} />}
              >
                View Repository
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="outline"
                size="md"
                isExternal
                rightIcon={<ExternalLink className="w-4 h-4" />}
              >
                Open Live Platform
              </Button>
            )}
          </div>
        </header>

        {/* Primary Hero Screenshot / Diagram */}
        <div className="my-10 rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 shadow-md relative aspect-video w-full">
          <Image
            src={project.image}
            alt={`${project.title} Interface`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
            priority
          />
        </div>

        {/* Key Metrics Dashboard */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="my-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <h2 className="font-mono-code text-xs uppercase tracking-wider text-slate-400 font-bold mb-6">
              SYSTEM BENCHMARKS &amp; OUTCOMES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-headline font-bold text-3xl sm:text-4xl text-blue-600 block">
                    {m.value}
                  </span>
                  <span className="font-headline font-bold text-sm text-slate-900 block">
                    {m.label}
                  </span>
                  {m.description && (
                    <p className="text-xs text-slate-500 font-body leading-relaxed">
                      {m.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Detailed Case Study Content */}
        <div className="space-y-12 text-slate-800 font-body leading-relaxed">
          
          {/* Section 1: Overview */}
          {project.longDescription && (
            <section className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-slate-900 tracking-tight">
                Project Overview &amp; Objective
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {project.longDescription}
              </p>
            </section>
          )}

          {/* Section 2: Architecture */}
          {project.architectureOverview && (
            <section className="space-y-6">
              <h2 className="text-2xl font-headline font-bold text-slate-900 tracking-tight">
                System Architecture &amp; Data Pipeline
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {project.architectureOverview}
              </p>

              {/* Gallery Specimens */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="space-y-4 pt-4">
                  <h3 className="font-headline font-bold text-lg text-slate-900">
                    Application Screens &amp; Visual Specimens
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.gallery.slice(1).map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm relative aspect-square sm:aspect-[4/5] w-full group"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${project.title} Specimen ${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Section 3: Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-headline font-bold text-slate-900 tracking-tight">
                Key Technical Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <h3 className="font-headline font-bold text-slate-900">{feat.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 font-body leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Engineering Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="p-6 sm:p-8 rounded-2xl bg-[#f1efe8] border border-[#e4e2dc] space-y-4">
              <div className="flex items-center gap-2 text-amber-900 font-headline font-bold text-lg">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                <h2>Technical Challenges &amp; Solutions</h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((chal, idx) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start gap-2 leading-relaxed">
                    <span className="text-amber-800 font-bold mt-0.5">→</span>
                    <span>{chal}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Section 5: Technologies Used */}
          <section className="space-y-4 pt-6 border-t border-slate-200">
            <h2 className="text-xl font-headline font-bold text-slate-900">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-code text-xs px-3 py-1 rounded-md bg-white border border-slate-300 text-slate-800 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>

        {/* Footer Navigation (Next Case Study) */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            href="/projects"
            variant="outline"
            size="md"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            All Projects
          </Button>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 p-3 px-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all text-right"
            >
              <div>
                <span className="block font-mono-code text-[10px] text-slate-400 uppercase">
                  Next Case Study
                </span>
                <span className="font-headline font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          )}
        </div>

      </div>
    </article>
  );
}
