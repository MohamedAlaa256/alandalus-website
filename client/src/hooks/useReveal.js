import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const el = ref.current;
    if (el) {
      const elements = el.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
      if (el.classList.contains('reveal')) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useReveal;
