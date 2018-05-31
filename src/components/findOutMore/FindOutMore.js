import React from 'react';
import { KupidoLogo } from '../partials/KupidoLogo';
import { FindoutContainer } from './FindoutContainer';
import { FindoutHeader } from './FindoutHeader';
import '../../App.css'

const FindOutMore = () =>
  <FindoutContainer>
    <FindoutHeader>
      <KupidoLogo id='kupido-logo'>Kupido Wholesale LLC</KupidoLogo>
    </FindoutHeader>
  </FindoutContainer>

export { FindOutMore };
