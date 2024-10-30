import React from 'react';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Input } from './ui/input';

function CustomizationPanel({ size, setSize, fgColor, setFgColor, bgColor, setBgColor, theme }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 rounded-xl shadow-lg ${
      theme === 'dark' 
        ? 'bg-gray-800/50 backdrop-blur-sm' 
        : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="space-y-4">
        <Label className={theme === 'dark' ? 'text-gray-200' : ''}>
          Size (px)
        </Label>
        <Slider
          min={128}
          max={512}
          step={1}
          value={[size]}
          onValueChange={([value]) => setSize(value)}
          className="mt-2"
        />
        <div className={`text-sm text-center mt-1 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {size}px
        </div>
      </div>
      
      <div className="space-y-4">
        <Label className={theme === 'dark' ? 'text-gray-200' : ''}>
          QR Color
        </Label>
        <div className="relative">
          <Input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="h-10 cursor-pointer w-full"
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <Label className={theme === 'dark' ? 'text-gray-200' : ''}>
          Background
        </Label>
        <div className="relative">
          <Input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="h-10 cursor-pointer w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomizationPanel;