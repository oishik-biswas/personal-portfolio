import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import StatsShowcase from '@/components/StatsShowcase';

export default function PortfolioPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <Hero />
      <StatsShowcase />
      <Experience />
      <Projects />
    </main>
  );
}
