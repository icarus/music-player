import React, { useEffect, useState } from 'react';
import ModernApp from '../Modern/App';
import RetroApp from '../Retro/App';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [accessToken, setAccessToken] = useState('');

  const renderApp = () => {
    if (currentPath.startsWith('/retro')) {
      return <RetroApp accessToken={accessToken} />;
    } else {
      return <ModernApp accessToken={accessToken} />;
    }
  };

  return (
    <div>
      {renderApp()}
    </div>
  );
};

export default App;
