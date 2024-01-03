import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TrackListWrapper, Track, TrackContent, ShowMoreButton } from './style';
import { ITrack } from '../../../types';

interface IProps {
  tracks: Array<string>;
  token: string | null;
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
}

const TrackList: React.FC<IProps> = ({ tracks, token, setTrack }) => {
  const [trackDetails, setTrackDetails] = useState<ITrack[]>([]);
  const [displayLimit, setDisplayLimit] = useState<number>(11);
  const [currentTrack, setCurrentTrack] = useState<ITrack | null>(null);

  const selectTrackAndPlay = async (track: ITrack) => {
    setTrack(track);
    setCurrentTrack(track);

    if (!token) return;

    await axios.put('https://api.spotify.com/v1/me/player/play', {
      uris: [track.uri],
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  const handleTrackClick = (track: ITrack) => {
    setTrack(track);
    setCurrentTrack(track);
    selectTrackAndPlay(track);
  };

  useEffect(() => {
    const fetchTrackDetails = async () => {
      const details = await Promise.all(tracks.map(async (uri) => {
        const trackId = uri.split(':')[2];
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
      }));
      setTrackDetails(details);
      setCurrentTrack(details[0]);
      setDisplayLimit(11);
    };

    fetchTrackDetails();
  }, [tracks, token]);

  const showMoreTracks = () => {
    setDisplayLimit(prevLimit => prevLimit + 11);
  };

  return (
    <>
      <TrackListWrapper>
        {trackDetails.slice(0, displayLimit).map((track: ITrack, index: number) => (
          <Track
            key={index}
            onClick={() => handleTrackClick(track)}
            isActive={track === currentTrack}
          >
            <img src={track.album.images[0].url} alt={track.name} />
            <TrackContent>
              <p>{track.name}</p>
              <p>{track.artists.map((artist: any) => artist.name).join(', ')}</p>
            </TrackContent>
          </Track>
        ))}
      </TrackListWrapper>
      {displayLimit < trackDetails.length && (
        <ShowMoreButton onClick={showMoreTracks}>+ Show More</ShowMoreButton>
      )}
    </>
  );
};

export default TrackList;
