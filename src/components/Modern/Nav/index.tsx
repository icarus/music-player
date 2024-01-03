import { Navbar, Profile, Burger } from './style';
import { redirectToAuthCodeFlow } from '../../../auth';

interface IProps {
  profile?: string | null;
  onBurgerClick: () => void;
}

const Nav:React.FC<IProps> = ( { profile, onBurgerClick, isSideVisible } ) => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const buttonText = isSideVisible ? "Close" : "Your Music";

  const handleClick = async () => {
    await redirectToAuthCodeFlow(clientId);
  }

  return (
    <Navbar>
      <h1>Music Player</h1>
      {!profile ? (
        <button className="primary-button" onClick={handleClick}>
          <span>
            <em>Login</em>
          </span>
          <span>
            <em>Login</em>
          </span>
        </button>
      ) : (
        <>
          <Profile profile={profile}/>
          <Burger onClick={onBurgerClick}>
            <button className="primary-button">
              <span>
                <em>{buttonText}</em>
              </span>
              <span>
                <em>{buttonText}</em>
              </span>
            </button>
          </Burger>
        </>
      )}
    </Navbar>
  );
};

export default Nav;
