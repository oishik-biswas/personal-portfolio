import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Studies from '@/components/Studies';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-32">
        <Hero />
        <Experience />
        <Projects />
        <Studies />
      </main>
    </div>
  );
}