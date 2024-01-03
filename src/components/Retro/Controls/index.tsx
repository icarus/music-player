import React, { useState, useRef } from 'react';
import SpotifyWebPlayer from 'react-spotify-web-playback';
import { IState, ITrack } from '../../../types';
import { Wrapper, Hidden, Button, PlaybackControls } from './style';
import Volume from '../Volume';

interface IProps {
  token: string;
  tracks: Array<string>;
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
  volume: number;
}

const Controls: React.FC<IProps> = ({ token, tracks, setTrack, volume }) => {
  // Retro Mode
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleModernModeClick = () => {
    window.location.pathname = '/modern';
  };

  const PLAY_BUTTON_INDEX = 1;
  const PAUSE_BUTTON_INDEX = 2;

    // End of Retro Mode

  const [isPlaying, setIsPlaying] = useState(false);
  const [localVolume, setLocalVolume] = useState(volume);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const audioRef = useRef(new Audio());

  const handleNextTrack = () => {
    const audioSrc = "src/assets/sound.mp3";
    audioRef.current.src = audioSrc;
    audioRef.current.play();

    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }

    setActiveButtonIndex(PLAY_BUTTON_INDEX);
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    const audioSrc = "src/assets/sound.mp3";
    audioRef.current.src = audioSrc;
    audioRef.current.play();

    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }

    setActiveButtonIndex(PLAY_BUTTON_INDEX);
    setIsPlaying(true);
  };

  const handleVolumeChange = (newVolume) => {
    setLocalVolume(newVolume);
  };

  const handleIsActive = (buttonIndex) => {
    setActiveButtonIndex(buttonIndex);

    const audioSrc = "src/assets/sound.mp3";
    audioRef.current.src = audioSrc;
    audioRef.current.play();
  }

  const togglePlay = () => {
    setIsPlaying(true);
    setActiveButtonIndex(PLAY_BUTTON_INDEX);

    const audioSrc = "src/assets/sound.mp3";
    audioRef.current.src = audioSrc;
    audioRef.current.play();
  };

  const togglePause = () => {
    setIsPlaying(false);
    setActiveButtonIndex(PAUSE_BUTTON_INDEX);

    const audioSrc = "src/assets/sound.mp3";
    audioRef.current.src = audioSrc;
    audioRef.current.play();
  };

  const isButtonActive = (buttonIndex) => {
    return activeButtonIndex === buttonIndex;
  };


  return (
    <>
      <Wrapper>
        <PlaybackControls>
          <Button onClick={handleModernModeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M0.279785 0.0298462H17.7201V17.4702H0.279785V0.0298462Z" fill="#18181B"/>
            </svg>
          </Button>
          <Button
            onClick={togglePlay}
            isActive={isButtonActive(PLAY_BUTTON_INDEX)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
              <path d="M0.00634766 0.576477V20.9235L15.9933 10.75L0.00634766 0.576477Z" fill="#18181B"/>
            </svg>
          </Button>
          <Button
            onClick={togglePause}
            isActive={isButtonActive(PAUSE_BUTTON_INDEX)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
              <path d="M0.279785 20.9235H6.09323V0.576477H0.279785V20.9235ZM11.9067 0.576477V20.9235H17.7201V0.576477H11.9067Z" fill="#18181B"/>
            </svg>
          </Button>
          <Button onClick={handlePreviousTrack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M0.279785 0.0298462H3.18651V17.4702H0.279785V0.0298462ZM5.36655 8.75001L17.7201 17.4702V0.0298462L5.36655 8.75001Z" fill="#18181B"/>
            </svg>
          </Button>
          <Button onClick={handleNextTrack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.7202 0.0298462H14.8135V17.4702H17.7202V0.0298462ZM12.6335 8.75001L0.279886 17.4702V0.0298462L12.6335 8.75001Z" fill="#18181B"/>
            </svg>
          </Button>
        </PlaybackControls>
        <Volume
          volume={localVolume}
          setVolume={handleVolumeChange}
        />
      </Wrapper>

      <Hidden>
        <SpotifyWebPlayer
          token={token}
          uris={[tracks[currentTrackIndex]]}
          play={isPlaying}
          volume={localVolume}
          callback={(state: IState) => {
            setIsPlaying(state.isPlaying);
            setTrack(state.track);
          }}
        />
      </Hidden>
    </>
  );
};

export default Controls;
