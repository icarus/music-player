import { ITrack } from "../../../types";
import { TickerWrapper, TickerContent, TrackDetails, TickerItem } from './style'
import TrackTimeline from "../Timeline";
import TrackImage from "../TrackImage";
import Controls from "../Controls";
import placeholderImg from '../../../assets/placeholder.png';

const placeholderTrack = {
  image: placeholderImg,
}

interface IProps {
  durationMs: number;
  progressMs: number;
  token: string | null;
  tracks: Array<string>;
  track: ITrack | null;
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
  volume: number;
  isPlaying: boolean;
}


const TrackInfo: React.FC<IProps> = ({ track, token, tracks, setTrack, durationMs, progressMs, volume, isPlaying }) => {

  const defaultTrack = {
    name: 'No Track Selected',
    artists: [{ name: 'Select a track to see details', uri: '#' }],
  };

  const displayTrack = track && track.id !== '' ? track : defaultTrack;

  return (
    <>
      <div className="track">
        <TrackImage
          track={track && track.id !== '' ? track : placeholderTrack}
        />
        <TrackDetails>
          <p>{displayTrack.name}</p>
          <a href={displayTrack.artists[0].uri}>{displayTrack.artists[0].name}</a>
        </TrackDetails>
      </div>

      <TrackTimeline
        key={track ? track.id : 'placeholder'}
        durationMs={durationMs}
        progressMs={progressMs}
        isPlaying={isPlaying}
      />

      <Controls
        token={token || ''}
        tracks={tracks}
        setTrack={setTrack}
        volume={volume}
      />

      <TickerWrapper>
        <TickerContent>
          <TickerItem>
            {displayTrack.name} – {displayTrack.artists[0].name}
          </TickerItem>
          <TickerItem>
            <a href="https://www.instagram.com/thei">Follow me on Instagram – @thei</a>
          </TickerItem>
          <TickerItem>
            {displayTrack.name} – {displayTrack.artists[0].name}
          </TickerItem>
          <TickerItem>
            <a href="https://www.github.com">Follow me on GitHub – @icarus </a>
          </TickerItem>
        </TickerContent>
      </TickerWrapper>
    </>
  );
};

export default TrackInfo;
