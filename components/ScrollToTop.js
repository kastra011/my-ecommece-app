import React, { useCallback, useState, useEffect } from 'react';
import ScrollToTopBtn from './ScrollToTopBtn';

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (!showTopBtn) {
    return;
  }

  return <ScrollToTopBtn scroll={scrollToTop} />;
}
