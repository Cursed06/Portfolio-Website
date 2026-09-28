import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/Icons';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <article className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col">
      {/* Project Image Header / Visual Specimen */}
      <Link href={`/projects/${project.slug}`} className="relative aspect-video w-full overflow-hidden bg-slate-900 block border-b border-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge variant="primary" size="sm">
            {project.category}
          </Badge>
          <Badge variant="code" size="sm">
            {project.year}
          </Badge>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-headline font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
          </div>

          <p className="text-sm text-slate-600 font-body leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono-code text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <Button
            href={`/projects/${project.slug}`}
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Case Study
          </Button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="outline"
                size="sm"
                isExternal
                aria-label="GitHub Repository"
                leftIcon={<GithubIcon size={14} />}
              >
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="ghost"
                size="sm"
                isExternal
                aria-label="Live Demo"
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
