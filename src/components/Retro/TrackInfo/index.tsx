import { ITrack } from "../../../types";
import { TrackDetails, Eject, EjectButton, CD, AC } from './style'
import TrackTimeline from "../Timeline";
import TrackImage from "../TrackImage";
import Controls from "../Controls";
import placeholderImg from '../../../assets/placeholder.png';
import spotifyLogo from '../../../assets/Spotify.png';

const placeholderTrack = {
  image: placeholderImg,
};


interface IProps {
  durationMs: number | 0;
  progressMs: number | 0;
  token: string | null;
  tracks: Array<string>;
  track: ITrack | null;
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
  volume: number | 0;
  isPlaying: boolean;
}


const TrackInfo: React.FC<IProps> = ({ track, token, tracks, setTrack, durationMs, progressMs, volume, isPlaying }) => {

  const defaultTrack = {
    name: 'No Track Selected',
    artists: [{ name: 'Select a track', uri: '#' }],
  };

  const displayTrack = track && track.id !== '' ? track : defaultTrack;

  return (
    <div className="vcr-wrap">
      <div className="vcr-track-wrap">
        <div className="spotify-wrap">
            <div className="vcr-track">
            <TrackImage
              track={track && track.id !== '' ? track : placeholderTrack}
            />
            <TrackDetails>
              <p>{displayTrack.name}</p>
              <a href={displayTrack.artists[0].uri}>{displayTrack.artists[0].name}</a>
            </TrackDetails>
            </div>
          <img src={spotifyLogo} alt="Spotify Logo" className="spotify"/>
        </div>
      </div>

      <Controls
        token={token || ''}
        tracks={tracks}
        setTrack={setTrack}
        volume={volume}
      />

      <TrackTimeline
        key={track ? track.id : 'placeholder'}
        durationMs={durationMs}
        progressMs={progressMs}
      />

      <div className="vcr-divider"/>

      <Eject>
        <EjectButton/>
        <EjectButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M0.279785 15.7533L0.279785 18.66H17.7201V15.7533L0.279785 15.7533ZM8.99995 0.840027L17.7201 13.1936L0.279785 13.1936L8.99995 0.840027Z" fill="#18181B"/>
          </svg>
        </EjectButton>
        <EjectButton/>
      </Eject>

      <CD/>
      <p className="VCR big">INSERT CD</p>

      <div className="AC">
        <div className="column">
          <AC/>
          <AC/>
          <AC/>
        </div>
        <div className="column">
          <AC/>
          <AC/>
          <AC/>
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;
