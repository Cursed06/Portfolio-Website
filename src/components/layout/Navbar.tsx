'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { profileData } from '@/data/profile';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: pathname === '/' ? '#about' : '/#about' },
    { label: 'Skills', href: pathname === '/' ? '#skills' : '/#skills' },
    { label: 'Projects', href: pathname === '/' ? '#engineering' : '/projects' },
    { label: 'Design', href: pathname === '/' ? '#design' : '/#design' },
    { label: 'Experience', href: pathname === '/' ? '#experience' : '/experience' },
    { label: 'Contact', href: pathname === '/' ? '#contact' : '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-[#fcfbf7]/90 backdrop-blur-sm border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex flex-col justify-center">
          <div className="flex items-center gap-1.5 font-headline font-bold text-sm tracking-wide text-slate-900 group-hover:text-blue-600 transition-colors">
            <span>{profileData.name.toUpperCase()}</span>
            <span className="text-blue-600 font-mono-code text-xs font-semibold">// CS × DESIGN</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono-code text-[11px] text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-200"></span>
            <span>Available for Internships</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono-code text-xs uppercase tracking-wider text-slate-600 hover:text-blue-600 hover:underline hover:underline-offset-8 hover:decoration-blue-500 transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href={profileData.resumeUrl}
            variant="outline"
            size="sm"
            leftIcon={<FileText className="w-3.5 h-3.5 text-slate-600" />}
          >
            Resume
          </Button>
          <Button
            href={pathname === '/' ? '#contact' : '/contact'}
            variant="primary"
            size="sm"
            rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-[#fcfbf7]/98 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2 pt-2 border-t border-slate-200/60">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-headline font-medium text-base text-slate-800 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200/60 flex flex-col gap-2">
            <Button
              href={profileData.resumeUrl}
              variant="outline"
              size="md"
              className="w-full justify-center"
              leftIcon={<FileText className="w-4 h-4" />}
            >
              Download Resume
            </Button>
            <Button
              href={pathname === '/' ? '#contact' : '/contact'}
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
