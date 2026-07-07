import React from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useTheme } from 'next-themes';
import { Type, Sun, Moon, Contrast, MonitorUp, MonitorDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

export function AccessibilityToolbar() {
  const { highContrast, toggleHighContrast, fontSize, increaseFontSize, decreaseFontSize } = useAccessibility();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 bg-card border border-r-0 border-border shadow-lg rounded-l-xl p-2 z-50 flex flex-col gap-2"
      role="region"
      aria-label="Accessibility Toolbar"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="rounded-full hover:bg-muted"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Toggle Dark Mode</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant={highContrast ? "default" : "ghost"}
              size="icon" 
              onClick={toggleHighContrast}
              aria-label="Toggle high contrast mode"
              className="rounded-full"
            >
              <Contrast className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">High Contrast</TooltipContent>
        </Tooltip>

        <div className="h-px w-full bg-border my-1" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={increaseFontSize}
              disabled={fontSize === 'xl'}
              aria-label="Increase font size"
              className="rounded-full hover:bg-muted"
            >
              <MonitorUp className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Increase Text Size</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={decreaseFontSize}
              disabled={fontSize === 'base'}
              aria-label="Decrease font size"
              className="rounded-full hover:bg-muted"
            >
              <MonitorDown className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Decrease Text Size</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
}
