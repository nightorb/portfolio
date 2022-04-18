import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import './ScrollToTopButton.scss';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolledPage = document.documentElement.scrollTop;
    const element = document.getElementById('ScrollToTop');
    if (scrolledPage > 300) {
      setIsVisible(true);
      element.style.visibility = 'visible';
      element.style.opacity = '1';
    } else if (scrolledPage <= 300) {
      setIsVisible(false);
      element.style.visibility = 'hidden';
      element.style.opacity = '0';
    }
  }

  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    toggleVisible()
    scroll.scrollToTop({
      duration: 1000,
      delay: 100,
      smooth: true
    });
  }

  return (
    <div id="ScrollToTop">
      {isVisible && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
        >
          <svg className="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path className="icon-path" d="M24,21a1,1,0,0,1-.71-.29L16,13.41l-7.29,7.3a1,1,0,1,1-1.42-1.42l8-8a1,1,0,0,1,1.42,0l8,8a1,1,0,0,1,0,1.42A1,1,0,0,1,24,21Z"/>
          </svg>
        </button>
      )}
    </div>
  );
}
