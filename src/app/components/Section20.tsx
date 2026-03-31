import { ArrowRight } from 'lucide-react';
import { SectionEyebrow } from './SectionEyebrow';
import { sectionNavLabel } from '../siteNav';

export function Section20() {
  return (
    <div id="meet" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--orange">
        <div className="max-w-4xl min-w-0 flex-1">
          <SectionEyebrow index={20} label={sectionNavLabel(20)} tone="light" />
          <h2 className="os-section-h2">
            SOLICITÁ TU REUNIÓN
            <br />
            VIRTUAL INFORMATIVA
            <br />
            CON NUESTROS ASESORES.
          </h2>
        </div>
      </div>
      <div className="p-6 sm:p-8 lg:p-12 xl:p-16">
        <a
          href="https://wa.me/5491128935992"
          target="_blank"
          rel="noopener noreferrer"
          className="os-btn-primary os-btn-lg inline-flex w-full justify-center sm:w-auto"
        >
          SOLICITAR MEET <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}
