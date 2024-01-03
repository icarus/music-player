import React, { useState } from 'react';
import { VolumeBar, VolumeIndicator, VolumeDot, VolumeBackground } from './style';

const Volume = ({ setVolume }) => {
  const [volume, setLocalVolume] = useState(70); 
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateVolume(event);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateVolume(event);
    }
  };

  const updateVolume = (event: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = event.currentTarget;
    const rect = volumeBar.getBoundingClientRect();
    const volumeLevel = (event.clientX - rect.left) / rect.width;
    const newVolume = Math.max(0, Math.min(100, Math.round(volumeLevel * 100)));
    setLocalVolume(newVolume);
    setVolume(newVolume);
  };

  return (
    <div className='vcr-volume-wrapper'>
      {/* SVG and other elements */}
      <VolumeBar
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <VolumeBackground />
        <VolumeIndicator volume={volume} />
        <VolumeDot volume={volume} />
      </VolumeBar>
    </div>
  );
};

export default Volume;
