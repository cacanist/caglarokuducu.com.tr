import Link from 'next/link';
import LinkCard from '@/components/LinkCard';
import { ProjectIcon } from '@/components/icons';

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[.08] bg-white transition-colors hover:bg-black/[.02] dark:border-white/[.145] dark:bg-black dark:hover:bg-[#1a1a1a]"
          >
            <svg
              className="h-5 w-5 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Projelerim
            </h1>
            <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
              Yaptığım bazı projeler
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Payloop Project */}
          <div className="group rounded-xl border border-black/[.08] bg-white p-6 transition-all duration-200 hover:border-black/[.12] hover:bg-black/[.02] hover:shadow-sm dark:border-white/[.145] dark:bg-black dark:hover:border-white/[.2] dark:hover:bg-[#1a1a1a]">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <ProjectIcon />
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white">Payloop</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Subscription Tracker</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Aboneliklerinizi takip edin ve yönetin. iOS uygulaması ile tüm aboneliklerinizi tek bir yerden kontrol edin.
            </p>
            <a
              href="https://apps.apple.com/us/app/payloop-subscription-tracker/id6752825884"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-400"
            >
              App Store'da Görüntüle
              <svg
                className="h-4 w-4"
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
            </a>
          </div>

          {/* SocialMockup Project */}
          <div className="group rounded-xl border border-black/[.08] bg-white p-6 transition-all duration-200 hover:border-black/[.12] hover:bg-black/[.02] hover:shadow-sm dark:border-white/[.145] dark:bg-black dark:hover:border-white/[.2] dark:hover:bg-[#1a1a1a]">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <ProjectIcon />
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white">SocialMockup</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Social Proof Mockups</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Sosyal medya içerikleriniz için yorumlar oluşturun. Hızlı, kolay ve ücretsiz.
            </p>
            <a
              href="https://www.socialmockup.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-400"
            >
              Siteyi Ziyaret Et
              <svg
                className="h-4 w-4"
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
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

