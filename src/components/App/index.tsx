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

  const getTracks = async (id:string) => {
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
        />
        <Container>
          <TrackViewer>
            <TrackInfo
              track={track}
              durationMs={durationMs}
              progressMs={progressMs}
            />
          </TrackViewer>
          <Side>
            <Sidebar
              track={track}
              token={token}
              tracks={tracks}
              playlists={playlists}
              getTracks={getTracks}
              setTrack={setTrack}
            />
          </Side>
        </Container>
      </>
  )}
}

export default App
