import React, { useEffect, useState } from 'react';

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSpotlight = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', updateSpotlight);
    };
  }, []);

  return (
    <div
      className="spotlight"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
