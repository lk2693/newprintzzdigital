import { CountUp, Reveal } from "./motion";

type StatsSectionProps = {
  jahreErfahrung: string;
  anzahlProjekte: string;
};

/** "15+" -> { end: 15, suffix: "+" } */
function parseStat(raw: string): { end: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { end: 0, suffix: raw };
  return { end: parseInt(match[1], 10), suffix: match[2] };
}

export default function StatsSection({ jahreErfahrung, anzahlProjekte }: StatsSectionProps) {
  const stats = [
    { ...parseStat(jahreErfahrung), label: "Jahre Erfahrung" },
    { ...parseStat(anzahlProjekte), label: "umgesetzte Projekte" },
    { end: 1, suffix: "", label: "Stadt-App für ganz Braunschweig" },
    { end: 100, suffix: "%", label: "aus Braunschweig" },
  ];

  return (
    <section className="bg-[#FAF9F6]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 pt-[72px] sm:px-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div className="flex flex-col gap-1.5 border-l-[3px] border-[#FBB800] pl-5">
              <span className="font-expanded text-[40px] font-extrabold text-[#26231E]">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="text-[15px] text-[#6B655B]">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
