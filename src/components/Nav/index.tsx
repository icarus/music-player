import React from 'react';
import { redirectToAuthCodeFlow } from '../../auth';

const Nav: React.FC = () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  const handleClick = async () => {
    await redirectToAuthCodeFlow(clientId);
  }

  return (
    <nav>
      <h1>Music Player</h1>
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
    </nav>
  );
};

export default Nav;
