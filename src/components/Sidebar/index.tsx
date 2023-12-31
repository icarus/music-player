import Select, { StylesConfig } from 'react-select';
import Controls from '../Controls';
import TrackImage from '../TrackImage';
import { ITrack } from '../../types';

interface IProps {
  playlists: PlaylistOption[]; // Update to PlaylistOption array
  getTracks: (id: string) => void; // Specify the function type for getTracks
  token: string | null;
  tracks: Array<string>;
  track: ITrack | null;
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
}

interface OptionType {
  label: string;
  value: string;
}

const Sidebar:React.FC<IProps> = ( { playlists, getTracks, token, tracks, track, setTrack } ) => {
  const styles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      fontFamily: 'var(--font-family)',
      backgroundColor: 'var(--gray-700)',
      border: 'none',
      borderRadius: '0',
      color: '#fff',
      textAlign: 'left',
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "var(--gray-800)",
      borderRadius: "0",
      maxHeight: "25vh",
      textAlign: 'left',
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: isFocused ? "var(--gray-700)" : "var(--gray-800)",
      color: "#fff",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? '#fff' : '#fff',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'var(--gray-500)',
    }),
  };

  const options: OptionType[] = playlists.map(playlist => ({
    label: playlist.name,
    value: playlist.id,
  }));

  const handleChange = (option: OptionType | null) => {
    if (option) {
      getTracks(option.value);
    }
  };

  return (
    <>
      <Controls
        token={token || ''}
        tracks={tracks}
        setTrack={setTrack}
      />
      <Select
        options={options}
        getOptionLabel={(option: OptionType) => option.label}
        onChange={handleChange}
        styles={styles}
      />
      <TrackImage
        track={track}
      />
    </>
  );
}

export default Sidebar;
