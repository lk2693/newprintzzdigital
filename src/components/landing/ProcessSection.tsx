import { Reveal } from "./motion";

const steps = [
  {
    number: "01",
    title: "Beratung & Analyse",
    text: "Im kostenlosen Erstgespräch analysieren wir Ihre Anforderungen und definieren gemeinsam klare Projektziele.",
  },
  {
    number: "02",
    title: "Konzept & Design",
    text: "Sie erhalten ein maßgeschneidertes Konzept mit Wireframes und Design-Entwürfen, abgestimmt auf Ihre Marke.",
  },
  {
    number: "03",
    title: "Umsetzung & Launch",
    text: "Agile Entwicklung mit regelmäßigem Feedback – Ihr Projekt geht pünktlich und einsatzbereit live.",
  },
];

export default function ProcessSection() {
  return (
    <section id="prozess" className="mx-auto max-w-[1200px] scroll-mt-20 px-5 py-[100px] sm:px-8">
      <Reveal>
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-0.5 w-[34px] bg-[#F28C00]" />
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#B36A00]">
            Unser Prozess
          </span>
        </div>
        <h2 className="font-expanded m-0 mb-14 max-w-[640px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.01em] text-[#26231E] sm:text-[40px]">
          Von der ersten Idee bis zum Launch – transparent und planbar.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.15}>
            <div className="group flex h-full flex-col gap-3 border-t-[3px] border-[#FBB800] pt-6">
              <span className="font-expanded text-[15px] font-extrabold text-[#B36A00] transition-transform duration-300 group-hover:translate-x-1">
                {step.number}
              </span>
              <h3 className="m-0 text-[21px] font-bold text-[#26231E]">{step.title}</h3>
              <p className="m-0 text-base leading-[1.6] text-[#6B655B]">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
