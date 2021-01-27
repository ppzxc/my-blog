import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contents from './containers/Contents';
import Navigator from './components/Navigator';

function App() {
  return (
    <React.Fragment>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/contents" component={Contents} />
      <Route path="/about" component={About} />
    </React.Fragment>
  );
}

export default App;
