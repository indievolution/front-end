import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Title } from './Title/Title';
import { Menu } from './Menu/Menu';

const App: React.FC = () => {
  useEffect(() => {
    const currentUrl = window.location.href;
    for (let i = currentUrl.length - 1; i > 0; i--) {
      if (currentUrl[i] === '/') {
        return window.location.replace(currentUrl.substring(0, i + 1));
      }
    }
  });
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={Title} />
        <Route path="/menu" exact component={Menu} />
      </HashRouter>
    </div>
  );
};

export default App;
