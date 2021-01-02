import React from 'react';

import { Content, SocialButton } from './styles';

import Image from 'next/image'

import Bubble from '../../assets/bubbles/bubble2.svg';
import Github from '../../assets/icons/github.svg';
import Linkedin from '../../assets/icons/in.svg';

export default function About() {
  return (
    <Content id="about">
      <img src={Bubble} alt="Left Bubble" id="left-bubble" />
      <div className="selfie" >
        <Image 
          width="352px" 
          height="452px"
          src="/selfie.png"
          alt="Joseph Oliveira"
        />
      </div> 
      

      <div className="about">
        <span>Quem sou</span>
        <h2>
          Há muito tempo, <br />
          numa galáxia <br />
          muito, muito distante...
        </h2>
        <p>
          ...um Padawan, chamado <b>Joseph Oliveira</b>, aos seus 11 anos de
          idade aprendia a desenvolver seus primeiros blogs, desde então
          cresceu apaixonado pelo desenvolvimento de software.
        </p>
        <p>
          Hoje esse Padawan chamado Joseph evoluiu para um Jedi, autodidata, desenvolvedor, instrutor e lifelong learner apaixonado
          por React, React Native, Node.js e todo o ecossistema por volta
          dessas tecnologias.
        </p>
      </div>
      <div className="socials">
        <SocialButton
          href="https://github.com/josepholiveira"
          rel="noopener noreferrer"
          aria-label="Github"
          target="_blank"
        >
          <img src={Github} alt="Github" />
        </SocialButton>

        <SocialButton
          href="https://www.linkedin.com/in/joseph-oliveira-294a19165/"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          target="_blank"
        >
          <img src={Linkedin} alt="Linkedin" />
        </SocialButton>
      </div>
    </Content>
  );
}
