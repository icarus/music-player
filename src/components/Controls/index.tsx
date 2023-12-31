import SpotifyWebPlayer from "react-spotify-web-playback";
import { IState, ITrack } from "../../types";

interface IProps {
  token: string
  tracks: Array<string>
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
}

const Controls:React.FC<IProps> = ( { token, tracks, setTrack } ) => {
  return (
    <>
      <SpotifyWebPlayer
        token={token}
        uris={tracks}
        hideCoverArt={true}
        hideAttribution={true}
        inlineVolume={false}

        styles={{
          color: '#fff',
          bgColor: 'rgba(0, 0, 0, 0)',
          activeColor: 'var(--primary-color)',
          sliderHandleColor: 'var(--primary-color)',
          sliderColor: 'var(--primary-color)',
          sliderTrackColor: 'var(--gray-700)',
          loaderColor: 'var(--primary-color)',
        }}
        callback={(state: IState) => {
          setTrack(state.track)
        }}
      />
    </>
  )
};

export default Controls
