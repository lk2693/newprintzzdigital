import type { Metadata } from 'next'

import { LegalShell, LegalSection, LegalBox } from '@/components/landing/Legal'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen der Printzz GmbH.',
}

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum" subtitle="Angaben gemäß § 5 TMG" stand="Dezember 2025">
      <LegalSection nr="01" title="Firmeninformationen">
        <p>
          <strong>Printzz GmbH</strong>
        </p>
        <p>Geschäftsführer: Olaf Jaeschke</p>
      </LegalSection>

      <LegalSection nr="02" title="Geschäftsadresse">
        <LegalBox>
          <p className="m-0 leading-[1.7]">
            Printzz GmbH
            <br />
            Rischbleek 6
            <br />
            38126 Braunschweig
            <br />
            DEUTSCHLAND
          </p>
        </LegalBox>
      </LegalSection>

      <LegalSection nr="03" title="Vertreten durch">
        <p>Olaf Jaeschke</p>
      </LegalSection>

      <LegalSection nr="04" title="Kontakt">
        <p>
          <strong>Telefon:</strong> <a href="tel:+4953170201786">0531 - 70201786</a>
        </p>
        <p>
          <strong>Telefax:</strong> 0531 - 270 33 98
        </p>
        <p>
          <strong>E-Mail:</strong> <a href="mailto:info@printzzdigital.de">info@printzzdigital.de</a>
        </p>
      </LegalSection>

      <LegalSection nr="05" title="Registereintrag">
        <p>Eintragung im Handelsregister</p>
        <p>
          <strong>Registergericht:</strong> Amtsgericht Braunschweig
        </p>
        <p>
          <strong>Registernummer:</strong> HRB203533
        </p>
      </LegalSection>

      <LegalSection nr="06" title="Umsatzsteuer-ID">
        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
        <p>
          <strong>DE281896307</strong>
        </p>
      </LegalSection>

      <LegalSection nr="07" title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <LegalBox>
          <p className="m-0 leading-[1.7]">
            <strong>Olaf Jaeschke</strong>
            <br />
            Rischbleek 6
            <br />
            38126 Braunschweig
            <br />
            DEUTSCHLAND
          </p>
        </LegalBox>
      </LegalSection>

      <LegalSection nr="08" title="EU-Streitschlichtung">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      </LegalSection>

      <LegalSection nr="09" title="Verbraucherstreitbeilegung/Universalschlichtungsstelle">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>
    </LegalShell>
  )
}
