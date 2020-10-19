// src/components/Header/Header.jsx
import React from 'react';

import Link from 'next/link'
import { Container } from './styles';
import logo from '../../assets/images/logo-light.svg';

export default function Header() {
  return (
    <Container>
      <div className="header-content">
        <Link href="/">
          <img src={logo} alt="Joseph Oliveira" className="header-logo" />
        </Link>
        <aside>
          <Link href="/#about">Quem sou</Link>
          <Link href="/#projects">Projetos</Link>
          <Link href="/#contact">Iniciar um projeto</Link>
        </aside>
      </div>
    </Container>
  );
} 