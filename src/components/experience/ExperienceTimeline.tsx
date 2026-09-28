import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { experienceData } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import { Briefcase, GraduationCap, Users, BookOpen } from 'lucide-react';

const typeIconMap = {
  Work: Briefcase,
  Leadership: Users,
  Teaching: BookOpen,
  Education: GraduationCap,
  Project: Briefcase,
};

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-[#fcfbf7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badgeText="05 // TRAJECTORY &amp; LEADERSHIP"
          badgeVariant="neutral"
          title="Professional Experience &amp; Leadership."
          subtitle="Chronological track record spanning software engineering internships, technical teaching, and creative organization leadership."
        />

        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => {
            const Icon = typeIconMap[item.type] || Briefcase;
            
            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                  item.current
                    ? 'bg-blue-600 border-blue-200 text-white'
                    : 'bg-white border-slate-300 text-slate-700 group-hover:border-blue-500 group-hover:text-blue-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Experience Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="font-mono-code text-xs text-blue-600 font-semibold tracking-wider uppercase block mb-1">
                        {item.organization} {item.location && `• ${item.location}`}
                      </span>
                      <h3 className="font-headline font-bold text-xl text-slate-900">
                        {item.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.current && (
                        <Badge variant="success" size="sm">
                          Present
                        </Badge>
                      )}
                      <Badge variant="code" size="sm">
                        {item.period}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 font-body leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                        <span className="text-blue-600 font-bold mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono-code text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
