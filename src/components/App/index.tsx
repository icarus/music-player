import React, { useEffect, useState } from 'react';
import ModernApp from '../Modern/App';
import RetroApp from '../Retro/App';
import { getAccessToken } from '../../auth';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    if (currentPath.startsWith('/callback')) {
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get('code');
      if (code) {
        getAccessToken('your_client_id', code).then((accessToken) => {
          console.log('Access Token:', accessToken);
          window.location.pathname = '/modern';
        });
      }
    }
  }, [currentPath]);

  const renderApp = () => {
    switch (currentPath) {
      case '/modern':
        return <ModernApp />;
      case '/retro':
        return <RetroApp />;
      default:
        return <RetroApp />;
    }
  };

  return (
    <div>
      {renderApp()}
    </div>
  );
};

export default App;
