import Image from "next/image";
import { Reveal } from "./motion";

export default function PartnerBar() {
  return (
    <section className="border-b border-[#E8E4DC] bg-[#FAF9F6]">
      <Reveal y={16}>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-[26px] sm:px-8">
        <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#9A9385]">
          Gemeinsam umgesetzt mit
        </span>
        <Image
          src="/assets/logo-stadtmarketing-v3.png"
          alt="Braunschweig Stadtmarketing"
          width={256}
          height={71}
          className="block h-11 w-auto opacity-75 transition-opacity hover:opacity-100"
        />
        <Image
          src="/assets/logo-blsk-v2.png"
          alt="BLSK – Braunschweigische Landessparkasse, ein Unternehmen der NORD/LB"
          width={256}
          height={120}
          className="block h-12 w-auto opacity-75 transition-opacity hover:opacity-100"
        />
        <Image
          src="/assets/logo-propstei-v2.png"
          alt="Ev.-Luth. Propstei Braunschweig"
          width={250}
          height={128}
          className="block h-[52px] w-auto opacity-75 transition-opacity hover:opacity-100"
        />
      </div>
      </Reveal>
    </section>
  );
}
