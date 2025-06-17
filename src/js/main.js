import AOS from 'aos';
import 'aos/dist/aos.css';

import startCountdown from './countdown';

document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  AOS.init({
    duration: 1000,
    once: true
  });
});
