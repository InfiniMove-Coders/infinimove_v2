import React, { useRef, useEffect, useState } from 'react';

const AnimatedVideoBackground = ({
  videoSrc = "/clarity-stream.mp4",
  overlayOpacity = 0.2,
  showGradient = true
}) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.play().catch(console.error);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base black background as fallback */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}

      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black"
          style={{
            opacity: overlayOpacity,
            mixBlendMode: 'multiply'
          }}
        />
      )}

      {showGradient && (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.1) 100%)'
          }}
        />
      )}
    </div>
  );
};

export default AnimatedVideoBackground;
