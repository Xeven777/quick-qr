import React from 'react';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle({ theme, onToggle }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 h-10 w-10 rounded-full"
      onClick={onToggle}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;