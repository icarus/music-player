import React, { useState } from 'react';
import { VolumeBar, VolumeIndicator, VolumeDot, VolumeBackground } from './style';

const Volume = ({ volume, setVolume }) => {
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
    setVolume(newVolume);
  };

  return (
    <div className='volume-wrapper'>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M0 6.99999V11C0 11.55 0.45 12 1 12H4L7.29 15.29C7.92 15.92 9 15.47 9 14.58V3.40999C9 2.51999 7.92 2.06999 7.29 2.69999L4 5.99999H1C0.45 5.99999 0 6.44999 0 6.99999ZM13.5 8.99999C13.5 7.22999 12.48 5.70999 11 4.96999V13.02C12.48 12.29 13.5 10.77 13.5 8.99999ZM11 1.44999V1.64999C11 2.02999 11.25 2.35999 11.6 2.49999C14.18 3.52999 16 6.05999 16 8.99999C16 11.94 14.18 14.47 11.6 15.5C11.24 15.64 11 15.97 11 16.35V16.55C11 17.18 11.63 17.62 12.21 17.4C15.6 16.11 18 12.84 18 8.99999C18 5.15999 15.6 1.88999 12.21 0.599993C11.63 0.369993 11 0.819993 11 1.44999Z" fill="#737584"/>
      </svg>
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
