import React from 'react';
import { KupidoLogo } from './KupidoLogo';
import Button from '../CSS/Button';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FindoutLink from '../Navigation';
import * as routes from '../../routes/routes';
import {FindOutMore} from '../findOutMore/FindOutMore';


const Header = () =>
  <Router>
    <header>
      <KupidoLogo >Kupido Wholesale LLC</KupidoLogo>
      <h2 className='header-text'>Large Scale Cosmetics and Beauty Product Wholesalers!</h2>
      <h2 className='header-text'> 10 Year Industry Leaders!</h2>
      <h2 className='header-text'>Top Brands!</h2>
      <h2 className='header-text'>Call Us: 908.546.0561 (Ask for Jay)</h2><br />
      <Button primary>Member Portal</Button>
      <FindoutLink />

      <Route exact path={routes.FIND_OUT_MORE} component= {() => <FindOutMore />} />
      {/* <Button primary>Find Out More</Button> */}
    </header>
  </Router>


export default Header;
