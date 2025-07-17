'use client';

import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Photo {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

interface PhotoSliderProps {
  photos: Photo[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ 
  photos, 
  autoSlide = true, 
  slideInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide && photos.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, slideInterval);
      
      return () => clearInterval(interval);
    }
  }, [autoSlide, photos.length, slideInterval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!photos || photos.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
        <div className="text-center text-white">
          <span className="text-6xl mb-4 block">📸</span>
          <h3 className="text-xl font-semibold">Festival Photos Coming Soon</h3>
          <p className="text-green-100 mt-2">Check back for beautiful moments from our events</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden group">
      {/* Main Photo */}
      <div className="relative w-full h-full">
        <div 
          className="w-full h-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center"
          style={{ 
            backgroundImage: `url(${photos[currentIndex]?.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <span className="text-white text-6xl">🎉</span>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h3 className="text-white text-lg font-semibold mb-1">
            {photos[currentIndex]?.caption}
          </h3>
          <p className="text-gray-300 text-sm">
            {currentIndex + 1} of {photos.length}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoSlider; 