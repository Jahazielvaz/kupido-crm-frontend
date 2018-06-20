import React from 'react';
import { Link } from 'react-router-dom';
import Button from './CSS/Button'
import '../App.css'



import * as routes from '../routes/routes';

const LandingLinks = () =>
  <div>
    <Link to={routes.MEMBER_PORTAL}><Button primary>Member Portal</Button></Link>
    <Link to="/findoutmore"><Button primary>Find Out More</Button></Link>
  </div>

// const FindoutLink = () =>
//   <div id="na">
//     <ul>
//       <li id="coolButton"></li>
//     </ul>
//   </div>

export { LandingLinks };
// export { FindoutLink };
