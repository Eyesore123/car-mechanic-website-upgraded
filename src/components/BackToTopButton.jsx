import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function BackToTopButton() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    setHovered(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t('backToTop')}
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        fixed !bottom-4 md:!bottom-6 !right-3 md:!right-6 z-[9999] flex items-center border border-white 
        bg-[#000000] text-white !rounded-md shadow-lg
        ${hovered ? '!px-3 md:!px-4 justify-start' : 'px-0 md:px-0 justify-center'} !py-2 md:!py-3
        ${hovered ? 'w-[170px] md:!w-[200px]' : '!w-[50px] md:!w-[70px]'} overflow-hidden
        transition-all duration-300
        hover:opacity-80
        cursor-pointer
        select-none
      `}
    >
      <div
        className={`
          relative flex items-center w-full
          transition-all duration-300
          ${hovered ? 'justify-start' : 'justify-center'}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6 shrink-0"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>

        <span
          className={`
            absolute left-10
            whitespace-nowrap
            transition-all duration-300 ease-in-out
            ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}
          `}
        >
          {t('backToTop')}
        </span>
      </div>
    </button>
  );
}
