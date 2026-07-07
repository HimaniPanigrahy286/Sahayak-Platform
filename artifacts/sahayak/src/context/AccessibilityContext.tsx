import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'base' | 'lg' | 'xl';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<FontSize>('base');

  useEffect(() => {
    // Load preferences
    const storedContrast = localStorage.getItem('sahayak_high_contrast');
    if (storedContrast === 'true') {
      setHighContrast(true);
      document.documentElement.setAttribute('data-high-contrast', 'true');
    }
    
    const storedFontSize = localStorage.getItem('sahayak_font_size') as FontSize;
    if (storedFontSize && ['base', 'lg', 'xl'].includes(storedFontSize)) {
      setFontSize(storedFontSize);
      document.documentElement.setAttribute('data-font-size', storedFontSize);
    } else {
      document.documentElement.setAttribute('data-font-size', 'base');
    }
  }, []);

  const toggleHighContrast = () => {
    setHighContrast(prev => {
      const newValue = !prev;
      localStorage.setItem('sahayak_high_contrast', String(newValue));
      if (newValue) {
        document.documentElement.setAttribute('data-high-contrast', 'true');
      } else {
        document.documentElement.removeAttribute('data-high-contrast');
      }
      return newValue;
    });
  };

  const changeFontSize = (newSize: FontSize) => {
    setFontSize(newSize);
    localStorage.setItem('sahayak_font_size', newSize);
    document.documentElement.setAttribute('data-font-size', newSize);
  };

  const increaseFontSize = () => {
    if (fontSize === 'base') changeFontSize('lg');
    else if (fontSize === 'lg') changeFontSize('xl');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'xl') changeFontSize('lg');
    else if (fontSize === 'lg') changeFontSize('base');
  };

  return (
    <AccessibilityContext.Provider value={{ 
      highContrast, 
      toggleHighContrast, 
      fontSize, 
      setFontSize: changeFontSize,
      increaseFontSize,
      decreaseFontSize
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
