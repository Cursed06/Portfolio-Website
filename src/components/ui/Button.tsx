import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-headline font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer';

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow active:scale-[0.98]',
    secondary: 'bg-[#1b1c18] hover:bg-slate-800 text-white shadow-sm hover:shadow active:scale-[0.98]',
    tertiary: 'bg-[#840f00] hover:bg-[#6b0c00] text-white shadow-sm hover:shadow active:scale-[0.98]',
    outline: 'border border-slate-300 hover:border-slate-400 bg-white/80 hover:bg-slate-50 text-slate-800 active:scale-[0.98]',
    ghost: 'hover:bg-slate-100 text-slate-700 hover:text-slate-900',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const isMailOrTel = href.startsWith('mailto:') || href.startsWith('tel:');
    const isExternalLink = isExternal || href.startsWith('http') || href.endsWith('.pdf');

    if (isMailOrTel) {
      return (
        <a
          href={href}
          className={combinedClasses}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    if (isExternalLink) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
