import React from 'react';

import { Content, ProjectButton, ScrollButton } from './styles';

import logo from '../../assets/images/presentation-programmer.svg';
import Bubble from '../../assets/bubbles/bubble1.svg';
import BubbleMobile from '../../assets/bubbles/bubble1-mobile.svg';
import ArrowDown from '../../assets/icons/arrow-down.svg';

export default function Presentation() {
  return (
    <Content>
      <img src={Bubble} alt="Top Bubble" id="top-bubble" />
      <div className="presentation">
          <h1>
            Desenvolvo <br />
            projetos incríveis.
          </h1>
          <p>
            Aplicações fullstack para web e mobile <br /> desde o layout até o
            código.
          </p>
          <img src={BubbleMobile} alt="Programmer" id="mobile-bubble" />
          <div className="button-container">
            <ProjectButton
              className="start-project"
              rel="noopener noreferrer"
              aria-label="Iniciar projeto"
              href="/#contact"
            >
              Iniciar um projeto
            </ProjectButton>
            <ScrollButton
              className="scroll"
              rel="noopener noreferrer"
              aria-label="Scrolldown"
              href="/#about"
            >
              <img src={ArrowDown} alt="Arrow Down" />
            </ScrollButton>
          </div>
      </div>
        <img src={logo} alt="Programmer" className="programmer" />

    </Content>
  );
}
