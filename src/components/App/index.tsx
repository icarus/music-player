import { useState, useEffect } from 'react'
import '../../App.css'
import TrackInfo from '../TrackInfo'
import { getAccessToken } from '../../auth'
import Nav from '../Nav'

function App() {
	const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if(code) {
      const accessToken = await getAccessToken(clientId, code);
      setToken(accessToken);
    }
  }

  if (!token) {
    return(
      <>
        <Nav />
      </>
    )
  } else {
    return(
      <>
        <Nav />
        <TrackInfo />
      </>
  )}
}

export default App
