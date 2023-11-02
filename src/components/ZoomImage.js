import React, { useState } from 'react';

const ZoomImage = ({image, title}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={`relative ${isZoomed ? 'h-screen' : 'h-96'}`}>
      <img
        src={image}
        alt={title}
        className={`h-[100%] w-[100%] rounded-t-lg object-contain  transition-transform duration-300 ${
          isZoomed ? 'scale-150' : 'scale-100'
        }`}
      />
      <button
        className="absolute top-2 right-2 bg-white text-gray-800 p-2 rounded-full shadow-md"
        onClick={toggleZoom}
      >
        {isZoomed ? 'Zoom Out' : 'Zoom In'}
      </button>
    </div>
  );
};

export default ZoomImage;
