import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css'

//Custom components
import Button from './components/CSS/Button';
import Header from './components/partials/Header';
import { Wrapper } from './components/Wrapper';
import { TomatoButton }from './components/CSS/Button';
import { Container } from './components/partials/Container';
import { FindOutMore } from './components/findOutMore/FindOutMore';
import Hamburger from './components/partials/hamburger/Hamburger';
import FindoutLink from './components/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {FindoutHeader} from './components/findOutMore/FindoutHeader';
// import {Navigation} from './src/Navigation';

import * as routes from './routes/routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-container">
          <FindoutLink />

            <Wrapper>
              <Container>
                <Header />
              </Container>
            </Wrapper><hr/>

            {/* <FindOutMore>
              // <Hamburger />
            </FindOutMore> */}


        </div>
      </Router>
    );
  }
}

export default App;
