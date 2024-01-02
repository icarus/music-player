import { useState, useEffect } from 'react'
import '../../App.css'
import { getAccessToken } from '../../auth'
import Nav from '../Nav'
import axios from 'axios'
import { Container, TrackViewer, Side } from './style'
import TrackInfo from '../TrackInfo'
import Sidebar from '../Sidebar'
import { ITrack, PlaylistOption } from '../../types'

function App() {
  // Responsive
  const [isSideVisible, setIsSideVisible] = useState(false);

  // Functionality
	const [token, setToken] = useState<string | null>(null)
  const [profile, setProfile] = useState<string | null>(null)
  const [playlists, setPlaylists] = useState<PlaylistOption[]>([]);
  const [tracks, setTracks] = useState<string[]>([]);
  const [track, setTrack] = useState<ITrack | null>(null)
  const durationMs = track?.durationMs || 0;
  const [progressMs, setProgressMs] = useState(0);

  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    if(code && !token) {
      getToken()
    }
    if(token){
      getUserInfo()
      getPlaylists()
    }
  }, [token])

  const getToken = async () => {
    if(code){
      const accessToken = await getAccessToken(clientId, code)
      setToken(accessToken)
    }
  }

  const getUserInfo = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers : {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
    setProfile(data.images[0].url)
  }

  const getPlaylists = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers : {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    const playlistsOptions: PlaylistOption[] = data.items.map((item: any) => ({
      name: item.name,
      id: item.id.toString()
    }));

    setPlaylists(playlistsOptions);
  };

  const getTracks = async (id: string) => {
    const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      headers : {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    })
    const uris = data.items.map((item: any) => item.track.uri);
    setTracks(uris);


  }

  useEffect(() => {
    if (token) {
      const interval = setInterval(() => {
        getCurrentPlaybackState();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [token]);

  const getCurrentPlaybackState = async () => {
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (data && data.is_playing) {
        setProgressMs(data.progress_ms);
      }
    } catch (error) {
      console.error("Error fetching current playback state:", error);
    }
  };

  const selectTrackAndPlay = async (track: ITrack) => {
    setTrack(track);

    if (!isPlaying) return;

    try {
      await axios.put(
        "https://api.spotify.com/v1/me/player/play",
        { uris: [track.uri] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error starting playback:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (playlists.length > 0) {
        const firstPlaylist = playlists[0];

        const tracks = await getTracks(firstPlaylist.id);

        const firstTrack = tracks[0];

        selectTrackAndPlay(firstTrack);
      }
    };

    fetchData();
  }, [playlists, getTracks, selectTrackAndPlay]);

  if (!token) {
    return(
      <>
        <Nav/>
      </>
    )
  } else {
    return(
      <>
        <Nav
          profile={profile}
          onBurgerClick={() => setIsSideVisible(!isSideVisible)}
          isSideVisible={isSideVisible}
        />
        <Container>
          <TrackViewer>
            <TrackInfo
              track={track}
              token={token}
              tracks={tracks}
              durationMs={durationMs}
              progressMs={progressMs}
              setTrack={selectTrackAndPlay}
              volume={0.5}
            />
          </TrackViewer>
          <Side isVisible={isSideVisible}>
            <Sidebar
              track={track}
              token={token}
              tracks={tracks}
              playlists={playlists}
              getTracks={getTracks}
              setTrack={selectTrackAndPlay}
            />
          </Side>
        </Container>
      </>
  )}
}

export default App
