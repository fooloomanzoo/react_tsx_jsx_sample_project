import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './views/Home';
import Overview from './views/Overview';

import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/overview">Overview</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/overview" component={Overview} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
