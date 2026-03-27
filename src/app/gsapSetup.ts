import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  immediateRender: false,
  overwrite: 'auto',
});

export { gsap, ScrollTrigger };
