import React, { useState } from 'react';
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

  const handleRetroModeClick = () => {
    window.location.pathname = '/retro';
  };

  // End of Retro Mode

  const [isPlaying, setIsPlaying] = useState(false);
  const [localVolume, setLocalVolume] = useState(volume);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const handlePreviousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const handleVolumeChange = (newVolume) => {
    setLocalVolume(newVolume);
  };

  return (
    <>
      <Wrapper>
        <p className='VCR' onClick={handleRetroModeClick}>RETRO MODE</p>
        <PlaybackControls>
          <Button onClick={handlePreviousTrack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0.200928 0.633657V11.3664C0.201152 11.4612 0.238928 11.5521 0.305993 11.6192C0.373058 11.6862 0.463954 11.724 0.558798 11.7242H1.75113C1.84598 11.724 1.93687 11.6862 2.00394 11.6192C2.071 11.5521 2.10878 11.4612 2.109 11.3664V6.83787L7.22222 11.5021C7.36161 11.6181 7.53117 11.692 7.71105 11.7151C7.89092 11.7382 8.07367 11.7096 8.23788 11.6327C8.40209 11.5557 8.54098 11.4336 8.63828 11.2805C8.73557 11.1275 8.78725 10.9499 8.78726 10.7685V6.83787L13.9005 11.5021C14.0398 11.618 14.2092 11.6919 14.3889 11.7151C14.5686 11.7382 14.7512 11.7098 14.9154 11.633C15.0795 11.5563 15.2184 11.4344 15.3159 11.2816C15.4133 11.1288 15.4652 10.9514 15.4655 10.7702V1.22982C15.4652 1.04861 15.4133 0.871243 15.3159 0.71841C15.2186 0.565578 15.0797 0.44359 14.9157 0.366684C14.7516 0.289778 14.569 0.261126 14.3892 0.284072C14.2095 0.307018 14.04 0.380616 13.9005 0.496276L8.78726 5.12951V1.22982C8.78691 1.04861 8.73502 0.871243 8.63766 0.71841C8.5403 0.565578 8.40147 0.44359 8.23739 0.366684C8.07331 0.289778 7.89074 0.261126 7.71099 0.284072C7.53124 0.307018 7.36172 0.380616 7.22222 0.496276L2.109 5.12951V0.633657C2.10878 0.538813 2.071 0.447918 2.00394 0.380852C1.93687 0.313787 1.84598 0.276011 1.75113 0.275787H0.558798C0.463954 0.276011 0.373058 0.313787 0.305993 0.380852C0.238928 0.447918 0.201152 0.538813 0.200928 0.633657V0.633657Z" fill="#737584"/>
            </svg>
          </Button>
          <Button onClick={handlePlayPause} isActive={isPlaying}>
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                <path d="M0 1.2143C0 0.859259 0.287817 0.571442 0.642857 0.571442H2.92857C3.28361 0.571442 3.57143 0.859259 3.57143 1.2143V12.7857C3.57143 13.1408 3.28361 13.4286 2.92857 13.4286H0.642857C0.287817 13.4286 0 13.1408 0 12.7857V1.2143Z" fill="#737584"/>
                <path d="M6.42857 1.2143C6.42857 0.859259 6.71639 0.571442 7.07143 0.571442H9.35714C9.71218 0.571442 10 0.859259 10 1.2143V12.7857C10 13.1408 9.71218 13.4286 9.35714 13.4286H7.07143C6.71639 13.4286 6.42857 13.1408 6.42857 12.7857V1.2143Z" fill="#737584"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                <path d="M11.6214 5.94758L2.62633 0.630407C2.44054 0.518224 2.22818 0.457639 2.01116 0.454901C1.79415 0.452163 1.58033 0.507371 1.39177 0.614831C1.2032 0.722292 1.04672 0.878112 0.938467 1.06622C0.830212 1.25433 0.7741 1.46791 0.775922 1.68494V12.3184C0.775686 12.5349 0.832772 12.7475 0.941376 12.9347C1.04998 13.1219 1.20623 13.277 1.39422 13.3842C1.58222 13.4914 1.79526 13.547 2.01168 13.5451C2.2281 13.5433 2.44017 13.4842 2.62633 13.3738L11.6214 8.05833C11.805 7.95002 11.9571 7.7957 12.0628 7.61062C12.1685 7.42554 12.2241 7.21609 12.2241 7.00295C12.2241 6.78982 12.1685 6.58037 12.0628 6.39529C11.9571 6.2102 11.805 6.05589 11.6214 5.94758Z" fill="#737584"/>
              </svg>
            )}
          </Button>
          <Button onClick={handleNextTrack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M15.7988 0.633657V11.3664C15.7986 11.4612 15.7608 11.5521 15.6937 11.6192C15.6266 11.6862 15.5358 11.724 15.4409 11.7242H14.2486C14.1537 11.724 14.0628 11.6862 13.9958 11.6192C13.9287 11.5521 13.8909 11.4612 13.8907 11.3664V6.83787L8.77749 11.5021C8.63809 11.6181 8.46853 11.692 8.28866 11.7151C8.10878 11.7382 7.92604 11.7096 7.76183 11.6327C7.59761 11.5557 7.45873 11.4336 7.36143 11.2805C7.26413 11.1275 7.21245 10.9499 7.21244 10.7685V6.83787L2.09922 11.5021C1.95994 11.618 1.79054 11.6919 1.61082 11.7151C1.4311 11.7382 1.24848 11.7098 1.08433 11.633C0.920181 11.5563 0.781273 11.4344 0.68385 11.2816C0.586426 11.1288 0.534513 10.9514 0.53418 10.7702V1.22982C0.534534 1.04861 0.58642 0.871243 0.683784 0.71841C0.781147 0.565578 0.91997 0.44359 1.08405 0.366684C1.24813 0.289778 1.4307 0.261126 1.61046 0.284072C1.79021 0.307018 1.95973 0.380616 2.09922 0.496276L7.21244 5.12951V1.22982C7.2128 1.04861 7.26468 0.871243 7.36204 0.71841C7.45941 0.565578 7.59823 0.44359 7.76231 0.366684C7.92639 0.289778 8.10897 0.261126 8.28872 0.284072C8.46847 0.307018 8.63799 0.380616 8.77749 0.496276L13.8907 5.12951V0.633657C13.8909 0.538813 13.9287 0.447918 13.9958 0.380852C14.0628 0.313787 14.1537 0.276011 14.2486 0.275787H15.4413C15.5361 0.276123 15.6269 0.313948 15.6939 0.381002C15.7608 0.448055 15.7986 0.538886 15.7988 0.633657Z" fill="#737584"/>
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
