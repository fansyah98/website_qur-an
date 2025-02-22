// components/BannerSlider.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

const BannerSlider = () => {
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg mb-6">
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="w-full">
            <Image
              src={image}
              alt={`Banner ${idx + 1}`}
              width={1920}
              height={500}
              layout="responsive"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
