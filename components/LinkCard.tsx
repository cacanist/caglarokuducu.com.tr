import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkCardProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
  external?: boolean;
}

export default function LinkCard({ href, icon, children, external = true }: LinkCardProps) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      className="group relative flex w-full items-center gap-4 rounded-xl border border-black/[.08] bg-white px-6 py-4 transition-all duration-200 hover:border-black/[.12] hover:bg-black/[.02] hover:shadow-sm dark:border-white/[.145] dark:bg-black dark:hover:border-white/[.2] dark:hover:bg-[#1a1a1a]"
      {...linkProps}
    >
      {icon && (
        <div className="flex-shrink-0 text-black dark:text-white">
          {icon}
        </div>
      )}
      <span className="flex-1 text-base font-medium text-black dark:text-white">
        {children}
      </span>
      <svg
        className="h-5 w-5 flex-shrink-0 text-black/40 transition-transform duration-200 group-hover:translate-x-1 dark:text-white/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}

