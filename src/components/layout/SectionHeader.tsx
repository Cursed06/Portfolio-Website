import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badgeText: string;
  badgeVariant?: 'primary' | 'tertiary' | 'neutral' | 'success';
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'neutral',
  title,
  subtitle,
  className,
  align = 'left',
}) => {
  return (
    <div
      className={cn(
        'mb-10 lg:mb-14',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl',
        className
      )}
    >
      <div className={cn('flex items-center gap-2 mb-3', align === 'center' && 'justify-center')}>
        <Badge variant={badgeVariant} size="sm">
          {badgeText}
        </Badge>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-slate-900 tracking-tight leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
