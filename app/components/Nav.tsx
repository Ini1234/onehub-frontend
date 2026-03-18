'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks: Array<{ href: string; label: string; button?: boolean; path?: string }> = [
  { href: '/about', label: 'About us' },
  { href: '/add', label: 'Add Business', button: true },
  { href: '/#businesses', label: 'Directory', path: '/' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact/Connect' },
  { href: '/careers', label: 'Careers' },
];

const linkClass =
  'text-[#540619] hover:text-[#6d0822] px-3 py-2 text-sm font-medium transition-all duration-200';
const linkClassActive =
  'text-[#540619] px-3 py-2 text-sm font-semibold border-b-2 border-[#540619] transition-all duration-200';
const addBusinessLinkClass =
  'text-[#540619] hover:text-[#6d0822] px-3 py-2 text-sm font-medium transition-all duration-200';
const addBusinessPillClass =
  'bg-[#540619] text-white hover:bg-[#6d0822] px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#540619]/25 hover:shadow-[#540619]/40';

function normalizePath(path: string): string {
  const p = (path ?? '').replace(/#.*$/, '').replace(/\/+$/, '') || '/';
  return p || '/';
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = normalizePath(pathname ?? '');

  const isActive = (item: (typeof navLinks)[number]) => {
    const matchPath = normalizePath(item.path ?? item.href);
    return currentPath === matchPath;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#f6f4f0]/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            href="/"
            className="group flex items-baseline text-2xl tracking-tight text-black hover:opacity-80 transition-opacity py-2 px-1 -mx-1 rounded focus:outline-none focus:ring-2 focus:ring-[#540619]/30"
            aria-label="onehub home"
            onClick={() => setMobileOpen(false)}
          >
            <span className="logo-wordmark-one">one</span>
            <span className="logo-wordmark-hub">hub</span>
          </Link>

          {/* Desktop nav */}
          <div key={currentPath} className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((item) => {
              const active = isActive(item);
              return item.button ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? addBusinessPillClass : addBusinessLinkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? linkClassActive : linkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#540619] hover:bg-[#540619]/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-200 ease-out ${
            mobileOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!mobileOpen}
        >
          <div key={currentPath} className="py-4 border-t border-slate-200 flex flex-col gap-1">
            {navLinks.map((item) => {
              const active = isActive(item);
              return item.button ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={(active ? addBusinessPillClass : addBusinessLinkClass) + ' block text-center py-3'}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={(active ? linkClassActive : linkClass) + ' block py-3'}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
