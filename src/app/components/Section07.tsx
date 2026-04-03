import { sectionNavLabel } from '../siteNav';
import { SectionEyebrow } from './SectionEyebrow';
import { OldSchoolWord } from './OldSchoolWord';

import sec9d from '@/assets/imageBySections/Section09/OldSchool-IMG-Sec9-Desktop3.jpg';
import sec9m from '@/assets/imageBySections/Section09/OldSchool-IMG-Sec9-Mobile3.jpg';

export function Section07() {
  return (
    <div id="sec-09" data-os-read-marker className="os-surface border-x-4 border-b-4 border-black">
      <div className="os-section-head-row os-section-head--navy">
        <div className="max-w-3xl min-w-0 flex-1">
          <SectionEyebrow index={7} label={sectionNavLabel(7)} tone="light" />
          <h2 className="os-section-h2">LA IDEA</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[2fr_1fr]">
        <div className="border-b-2 border-black p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10 xl:p-12">
          <div className="max-w-3xl space-y-5 lg:max-w-2xl">
            <p className="os-slice">
              <b>Los que hacemos </b>
              <OldSchoolWord /> vivimos miles de viajes de egresados desde adentro.
            </p>
            <p className="os-slice text-black/88">
              Durante de más de tres décadas observamos algo simple:
            </p>
            <p className="os-pull border-l-2 border-[var(--os-orange)] pl-4 sm:pl-5">
              Las personas no solo extrañan el destino,
              <br />
              también extrañan quiénes eran en ese momento de su vida.
            </p>

            <p className="os-slice border-l-2 border-[var(--os-cyan)] pl-4 sm:pl-5">
              De esa observación nace <OldSchoolWord />: una experiencia diseñada para volver a
              entrar en ese capítulo.
            </p>
          </div>
        </div>

        <div className="os-grid-cover-cell">
          <picture>
            <source media="(min-width: 1024px)" srcSet={sec9d} />
            <img src={sec9m} alt="Viaje Bariloche" className="os-grid-cover-img" />
          </picture>
        </div>
      </div>
    </div>
  );
}
