import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'tertiary' | 'neutral' | 'success' | 'outline' | 'code';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'neutral',
  size = 'md',
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-blue-50 text-blue-700 border-blue-200',
    tertiary: 'bg-amber-50 text-amber-900 border-amber-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    outline: 'bg-transparent text-slate-600 border-slate-300',
    code: 'bg-[#f1efe8] text-[#1b1c18] border-[#e4e2dc] font-mono-code',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-mono-code tracking-wider uppercase font-medium',
    md: 'text-xs px-2.5 py-1 font-mono-code tracking-wider uppercase font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
