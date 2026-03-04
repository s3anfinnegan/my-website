import React, { useEffect, useState } from 'react';

const LiquidBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#2a1b6e]"> {/* Darker base color */}
      {/* The Liquid Filter Container */}
      <div className="absolute inset-0 filter blur-[80px] opacity-70">
        
        {/* Blob 1: Follows Mouse (Orange) */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-[#ff6b35] transition-all duration-700 ease-out"
          style={{ 
            left: mousePos.x - 250, 
            top: mousePos.y - 250,
          }}
        />

        {/* Blob 2: Static/Slow Float (Purple) */}
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#4a2fbf] animate-pulse" />

        {/* Blob 3: Static/Slow Float (Red) */}
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#ff4d4d] opacity-80" />
      </div>

      {/* Optional: Grainy texture for extra polish */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default LiquidBackground;