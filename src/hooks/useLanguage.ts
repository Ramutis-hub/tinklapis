import { useState, useEffect } from 'react';

export type Language = 'lt' | 'en';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('lt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('therapy-language') as Language;
    if (savedLanguage && ['lt', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('therapy-language', newLanguage);
    window.location.reload();
  };

  return { language, changeLanguage };
}