import React, { useRef, useState } from 'react';
import Image from 'next/image';
const Preview = () => {
  const imgRef = useRef(null);  // Reference to the image element
  const [zoomStyle, setZoomStyle] = useState({ transform: 'scale(1)', transformOrigin: 'center center' });

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    if (img) {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set the transform origin to mouse position
      setZoomStyle({
        transform: 'scale(4)',
        transformOrigin: `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`
      });
    }
  };

  const handleMouseEnter = () => {
    setZoomStyle((prevState) => ({
      ...prevState,
      transition: 'transform 1s ease-in-out'
    }));
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: 'scale(1)', transformOrigin: 'center center', transition: 'transform 0.3s ease-in-out' });
  };

  return (
    <div>
      <div className="relative inline-block overflow-hidden rounded-xl">
        <img
          ref={imgRef}
          className="transform transition-transform duration-500 ease-in-out"
          src="/aerostealth.webp"
          alt="logo"
          width={1000}
          height={1000}
          style={zoomStyle}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
       {/* Exterior Description */}
       <section className="my-4 pl-2">
        <h3 className="text-2xl font-bold">Metallic Gloss</h3>
        <p>A rich and luxurious interior with a modern and sleek design.</p>
      </section>
      {/* Interior Image */}
      <Image
        src="/aerostealth.webp"
        alt=""
        width={0}
        height={0}
        sizes="100%"
        className="h-96 w-full rounded-lg object-cover sm:h-[500px]"
      />
      
    </div>
  );
};

export default Preview;
