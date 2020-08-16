import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import { GlobalProvider } from './context/globalState';
import Lyrics from './components/Lyrics';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Fragment>
          <NavigationBar />
          <div className="container">
            <Switch>
              <Route path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </GlobalProvider>
  );
};

export default App;
