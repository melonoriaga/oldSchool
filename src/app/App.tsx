import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section02 } from './components/Section02';
import { Section03 } from './components/Section03';
import { Section04 } from './components/Section04';
import { Section05 } from './components/Section05';
import { Section06 } from './components/Section06';
import { Section07 } from './components/Section07';
import { Section08 } from './components/Section08';
import { Section09 } from './components/Section09';
import { Section10 } from './components/Section10';
import { Section11 } from './components/Section11';
import { Section12 } from './components/Section12';
import { Section13 } from './components/Section13';
import { Section14 } from './components/Section14';
import { Section15 } from './components/Section15';
import { Section16 } from './components/Section16';
import { Section17 } from './components/Section17';
import { Section18 } from './components/Section18';
import { Section19 } from './components/Section19';
import { Section20 } from './components/Section20';
import { Section21 } from './components/Section21';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PostulacionForm } from './components/PostulacionForm';
import { FloatingMenu } from './components/FloatingMenu';
import { BackToTopButton } from './components/BackToTopButton';

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  return (
    <div className="relative z-[1] min-h-screen overflow-x-hidden">
      <Header onPostular={() => setIsFormOpen(true)} onHiddenChange={setHeaderHidden} />

      <FloatingMenu onPostular={() => setIsFormOpen(true)} visible={headerHidden} />

      <Hero onPostular={() => setIsFormOpen(true)} />

      <Section02 />

      <Section03 />

      <Section04 />

      <Section05 />

      <Section06 />

      <Section07 />

      <Section08 />

      <Section09 />

      <Section10 />

      <Section11 />

      <Section12 />

      <Section13 />

      <Section14 />

      <Section15 />

      <Section16 />

      <Section17 onPostular={() => setIsFormOpen(true)} />

      <Section18 />

      <Section19 />

      <Section20 />

      <Section21 onPostular={() => setIsFormOpen(true)} />

      <Footer />

      <WhatsAppButton />

      <BackToTopButton visible={headerHidden} />

      <PostulacionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
