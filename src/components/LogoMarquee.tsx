'use client';

import { motion } from 'framer-motion';

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
  'Python', 'OpenAI', 'Supabase', 'Stripe', 'PostgreSQL',
  'Vercel', 'Prisma', 'Docker', 'AWS', 'Framer Motion',
];

function MarqueeRow({ direction = 1 }: { direction?: number }) {
  const items = [...technologies, ...technologies];

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-8 shrink-0"
        animate={{ x: direction > 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {items.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200/60 bg-white/50 backdrop-blur-sm whitespace-nowrap hover:border-slate-400 hover:bg-white transition-all duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500" />
            <span className="text-sm text-slate-600 font-light">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        <p className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase font-light text-center">
          Technologien die wir einsetzen
        </p>
      </div>
      <div className="space-y-4">
        <MarqueeRow direction={1} />
        <MarqueeRow direction={-1} />
      </div>
    </section>
  );
}
