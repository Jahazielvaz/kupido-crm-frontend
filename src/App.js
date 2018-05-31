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
// import {FindoutHeader} from './components/findOutMore/FindoutHeader';




class App extends Component {
  render() {
    return (
      <div id="main-container">
        <Wrapper>
          <Container>
            <Header />
            <Button primary>Member Portal</Button>
            <Button primary>Find Out More</Button>

          </Container>
        </Wrapper><hr/>

        <FindOutMore>
          // <Hamburger />
        </FindOutMore>


      </div>
    );
  }
}

export default App;
