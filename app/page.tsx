import Image from 'next/image';
import LinkCard from '@/components/LinkCard';
import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon, ProjectIcon } from '@/components/icons';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Image
              src="/pp.jpg"
              alt="Çağlar Okuducu"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full border-2 border-white dark:border-black pointer-events-none"></div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Çağlar Okuducu
            </h1>
            <p className="mt-2 text-base leading-6 text-zinc-600 dark:text-zinc-400">
              Developer & Creator
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex w-full flex-col gap-3">
          <LinkCard href="https://github.com/cacanist" icon={<GitHubIcon />}>
            GitHub
          </LinkCard>
          
          <LinkCard href="https://linkedin.com/in/caglarokuducu" icon={<LinkedInIcon />}>
            LinkedIn
          </LinkCard>
          
          <LinkCard href="https://instagram.com/cacanist" icon={<InstagramIcon />}>
            Instagram
          </LinkCard>
          
          <LinkCard href="mailto:caglarokuducu@gmail.com" icon={<MailIcon />}>
            Email
          </LinkCard>
          
          <LinkCard href="/projects" icon={<ProjectIcon />} external={false}>
            Projelerim
          </LinkCard>
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Çağlar Okuducu
        </p>
      </main>
    </div>
  );
}
