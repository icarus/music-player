import { Navbar, Profile } from './style';
import { redirectToAuthCodeFlow } from '../../auth';

interface IProps {
  profile?: string | null;
}

const Nav:React.FC<IProps> = ( { profile } ) => {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  const handleClick = async () => {
    await redirectToAuthCodeFlow(clientId);
  }

  return (
    <Navbar>
      <h1>Music Player</h1>
      {!profile ? (
          <button className="primary-button" onClick={handleClick}>
            <span>
              <em>
                Login
              </em>
            </span>
            <span>
              <em>
                Login
              </em>
            </span>
          </button>
        ) : (
          <Profile profile={profile}/>
        )}
    </Navbar>
  );
};

export default Nav;
