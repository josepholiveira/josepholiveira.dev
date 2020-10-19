import React from 'react';

import { Content } from './styles';

import Bubble from '../../assets/bubbles/bubble4.svg';

export default function Footer() {
  return (
    <Content>
      <img src={Bubble} alt="" id="bottom-bubble" />
    </Content>
  );
}
