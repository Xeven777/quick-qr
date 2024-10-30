import React, { useState, useRef, useEffect } from 'react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import { Input } from './components/ui/input';
import QRCodeDisplay from './components/QRCodeDisplay';
import DownloadButtons from './components/DownloadButtons';
import CustomizationPanel from './components/CustomizationPanel';
import ThemeToggle from './components/ThemeToggle';
import { setTheme, getInitialTheme } from './lib/theme';

function App() {
  const [url, setUrl] = useState('');
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [theme, setCurrentTheme] = useState(getInitialTheme);
  const qrRef = useRef();

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setCurrentTheme(theme === 'light' ? 'dark' : 'light');
  };

  const downloadImage = async (format) => {
    if (!url) return;
    
    const element = qrRef.current;
    let dataUrl;
    let filename;

    try {
      switch (format) {
        case 'png':
          dataUrl = await toPng(element);
          filename = 'qrcode.png';
          break;
        case 'jpg':
          dataUrl = await toJpeg(element);
          filename = 'qrcode.jpg';
          break;
        case 'svg':
          dataUrl = await toSvg(element);
          filename = 'qrcode.svg';
          break;
        default:
          return;
      }

      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
    }`}>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className={`text-4xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              QR Code Generator
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Create beautiful QR codes with custom colors and sizes
            </p>
            
            <div className="mt-8">
              <Input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL here"
                className="max-w-xl mx-auto text-lg py-6"
              />
            </div>

            <CustomizationPanel
              size={size}
              setSize={setSize}
              fgColor={fgColor}
              setFgColor={setFgColor}
              bgColor={bgColor}
              setBgColor={setBgColor}
              theme={theme}
            />

            <div className="space-y-8 mt-8">
              <QRCodeDisplay
                url={url}
                size={size}
                fgColor={fgColor}
                bgColor={bgColor}
                qrRef={qrRef}
              />

              <DownloadButtons onDownload={downloadImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;