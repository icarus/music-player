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
      fontFamily: 'VCR OSD Mono, monospace',
      width: '100%',
      height: '3rem',
      justifyContent: 'left',
      alignItems: 'left',
      alignText: 'left',
      borderRadius: '0',
      backgroundColor: 'var(--gray-300)',
      border: '5px solid var(--gray-950)',
      boxShadow: '0px 6px 0px 0px var(--gray-50) inset, 0px -6px 0px 0px var(--gray-500) inset',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: 'var(--gray-400)',
        border: '5px solid var(--gray-950)',
      }
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "var(--gray-300)",
      border: '5px solid var(--gray-950)',
      borderRadius: "0",
      maxHeight: "25vh",
      textAlign: 'left',
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: isFocused ? "var(--gray-200)" : "var(--gray-300)",
      color: 'var(--gray-950)',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      display: 'flex',
      textTransform: 'uppercase',
      color: 'var(--gray-950)',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'var(--gray-950)',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'var(--gray-950)',
      textTransform: 'uppercase',
      textAlign: 'left',
    })
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
