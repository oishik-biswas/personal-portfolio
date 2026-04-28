import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-8 py-8 text-gray-400 text-lg tracking-wide">
      <Link href="/" className="hover:text-white transition-colors">Home</Link>
      <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
      <Link href="#blog" className="hover:text-white transition-colors">Blog</Link>
      <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
    </nav>
  );
}