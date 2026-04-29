import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-20 px-4 pb-20 sm:space-y-28 sm:px-6 sm:pb-24">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
