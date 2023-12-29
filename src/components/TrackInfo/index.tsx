import React from 'react';

interface TrackInfoProps {
  trackName: string;
  artistName: string;
  albumName: string;
}

const TrackInfo: React.FC<TrackInfoProps> = ({ trackName, artistName, albumName }) => {
  return (
    <div>
      <h2>{trackName}</h2>
      <p>{artistName}</p>
      <p>{albumName}</p>
    </div>
  );
};

export default TrackInfo;
