import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css'

//Custom components
// import { FindOutMore } from './components/findOutMore/FindOutMore';
import Hamburger from './components/partials/hamburger/Hamburger';
// import FindoutLink from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {FindoutHeader} from './components/findOutMore/FindoutHeader';
import Landing from './components/landing/Landing';
import FindoutLanding from './components/findoutmore/FindoutLanding';
import { LandingLinks } from './components/Navigation';




import * as routes from './routes/routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-container">


          <Switch>

            <Route path="/" component={Landing} exact />
            <Route path="/findoutmore" component={FindoutLanding} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
