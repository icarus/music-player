import SpotifyWebPlayer from "react-spotify-web-playback";

interface IProps {
  token: string
  tracks: Array<string>
}

const Controls:React.FC<IProps> = ( { token, tracks } ) => {
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
      />
    </>
  )
};

export default Controls
