import Select, { StylesConfig } from 'react-select';
import { ITrack, PlaylistOption } from '../../../types';
import TrackList from '../TrackList';

interface IProps {
  playlists: PlaylistOption[];
  getTracks: (id: string) => void;
  token: string | null;
  tracks: Array<string>;
  track: ITrack | null;
  setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
}

interface OptionType {
  label: string;
  value: string;
}

const Sidebar:React.FC<IProps> = ( { playlists, getTracks, token, tracks, setTrack } ) => {
  const styles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      marginInline: '0.5rem',
      fontFamily: 'var(--font-family)',
      backgroundColor: 'var(--gray-925)',
      border: '1px solid var(--gray-500);',
      borderRadius: '0',
      color: '#fff',
      textAlign: 'left',
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "var(--gray-925)",
      border: '1px solid var(--gray-500);',
      borderRadius: "0",
      maxHeight: "25vh",
      textAlign: 'left',
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: isFocused ? "var(--gray-800)" : "var(--gray-925)",
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
      <Select
        options={options}
        getOptionLabel={(option: OptionType) => option.label}
        onChange={handleChange}
        styles={styles}
      />
      <TrackList
        tracks={tracks}
        token={token}
        setTrack={setTrack}
      />
    </>
  );
}

export default Sidebar;
