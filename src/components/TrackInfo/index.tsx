import { ITrack } from "../../types";
import { TickerWrapper, TickerContent } from './style'
import TrackTimeline from "../Timeline";
import TrackImage from "../TrackImage";

interface IProps {
  track: ITrack | null;
  durationMs: number;
  progressMs: number;
}


const TrackInfo: React.FC<IProps> = ({ track, durationMs, progressMs }) => {

  if(!track || track.id === '') return null


  return (
    <>
      <div className="heading">
        <h1>{track.name} –</h1>
        <h1 className="artist">
            <a href={track.artists[0].uri}>{track.artists[0].name}</a>
        </h1>
      </div>

      <div className="track">
        <TrackImage track={track} />
        <TrackTimeline durationMs={durationMs} progressMs={progressMs} />
      </div>

      <TickerWrapper>
        <TickerContent>
          {track.name} – {track.artists[0].name}
        </TickerContent>
      </TickerWrapper>
    </>
  );
};

export default TrackInfo;
