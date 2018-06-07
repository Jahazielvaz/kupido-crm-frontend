import React from 'react';
import { Link } from 'react-router-dom';
import Button from './CSS/Button'
import '../App.css'


import * as routes from '../routes/routes';

const FindoutLink = () =>
  <div id="na">
    <ul>
      <li id="coolButton"><Link to={routes.FIND_OUT_MORE}><Button primary>Find Out More</Button></Link></li>
    </ul>
  </div>

export default FindoutLink;
