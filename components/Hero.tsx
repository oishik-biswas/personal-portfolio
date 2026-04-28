import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-3">
        <span className="text-gray-500">I'm</span> 
        <span className="text-white">Eric Augusto</span>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
          <div className="w-full h-full bg-gray-600" /> {/* Replace with actual image */}
        </div>
        <span className="text-gray-500">,</span>
      </h1>
      
      <h2 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-3 flex-wrap">
        <span className="text-white">Front-end</span>
        <div className="w-20 h-10 rounded-full bg-gray-800" /> {/* Car sticker placeholder */}
        <span className="text-gray-500">Developer</span>
      </h2>

      <h2 className="text-4xl md:text-6xl font-bold mb-10 flex items-center justify-center gap-3">
        <span className="text-gray-500">based in</span> 
        <span className="text-white">Brazil</span>
        <div className="w-16 h-10 rounded-full bg-gray-800" /> {/* Toucan placeholder */}
      </h2>

      <p className="max-w-2xl text-gray-400 mb-10 text-lg leading-relaxed">
        I have 4 years of experience as a Front-end Developer working mostly with Angular, also have experience with React and Next.js in personal projects.
      </p>

      <div className="flex items-center space-x-6">
        <button className="px-6 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors text-white">
          Let's talk
        </button>
        <button className="text-gray-300 hover:text-white hover:underline transition-colors">
          Open CV
        </button>
        {/* Social Icons Placeholder */}
        <div className="flex space-x-4 ml-4 text-gray-400">
          <span className="cursor-pointer hover:text-white">GitHub</span>
          <span className="cursor-pointer hover:text-white">LinkedIn</span>
          <span className="cursor-pointer hover:text-white">WhatsApp</span>
        </div>
      </div>
    </section>
  );
}