import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

function DownloadButtons({ onDownload }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button
        variant="gradient"
        onClick={() => onDownload('png')}
        className="from-blue-500 to-blue-700"
      >
        <Download className="mr-2 h-4 w-4" />
        PNG
      </Button>
      <Button
        variant="gradient"
        onClick={() => onDownload('jpg')}
        className="from-green-500 to-green-700"
      >
        <Download className="mr-2 h-4 w-4" />
        JPG
      </Button>
      <Button
        variant="gradient"
        onClick={() => onDownload('svg')}
        className="from-purple-500 to-purple-700"
      >
        <Download className="mr-2 h-4 w-4" />
        SVG
      </Button>
    </div>
  );
}

export default DownloadButtons;