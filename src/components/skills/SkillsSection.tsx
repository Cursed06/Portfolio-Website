import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { skillGroupsData } from '@/data/skills';
import { Code2, Layers, Cpu, Palette, Terminal, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  Cpu: Cpu,
  Palette: Palette,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-[#f7f6f0] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badgeText="02 // CAPABILITIES &amp; STACK"
          badgeVariant="neutral"
          title="Structured Technical &amp; Creative Stack."
          subtitle="A comprehensive toolkit spanning backend architecture, mobile engineering, computer vision pipelines, and typographic design systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroupsData.map((group, idx) => {
            const Icon = iconMap[group.iconName as keyof typeof iconMap] || Terminal;
            const isDesign = group.category === 'Design & Creative';
            const isProgramming = group.category === 'Programming';
            
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${
                      isDesign
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : isProgramming
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-slate-100 text-slate-800 border-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-[11px] text-slate-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-lg text-slate-900 mb-2">
                    {group.category}
                  </h3>

                  <p className="text-xs text-slate-600 font-body leading-relaxed mb-4">
                    {group.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`font-mono-code text-[11px] px-2 py-1 rounded-md border font-medium ${
                          isDesign
                            ? 'bg-[#fcfbf7] text-slate-800 border-amber-200/80 hover:border-amber-400'
                            : 'bg-[#f8fafc] text-slate-800 border-slate-200 hover:border-blue-400'
                        } transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tooling / Environment footer */}
                {group.tools && group.tools.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 font-mono-code text-[11px] text-slate-500 flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">{group.tools.join(' • ')}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
