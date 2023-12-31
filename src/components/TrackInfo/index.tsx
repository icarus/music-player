import { ITrack } from "../../types";

interface IProps {
  track: ITrack | null;
}


const TrackInfo:React.FC<IProps> = ( { track } ) => {

  if(!track || track.id === '') return null

  return (
    <>
      <h1>{track.name} –</h1>
      <h1 className="artist">
          <a href={track.artists[0].uri}>{track.artists[0].name}</a>
      </h1>
    </>
  );
};

export default TrackInfo;
