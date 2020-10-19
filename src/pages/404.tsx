import React from 'react';

import Link from 'next/link';

import { Container } from '../styles/pages/404';
import SEO from '../components/SEO';

export default () => (
  <Container>
    <SEO titlePrefix="Página não encontrada" />

    <div className="half purple">
      <p>Oops, você encontrou um</p>
      <span>404</span>
    </div>
    <div className="half">
      <h3>Foi mal!!!</h3>
      <span className="sorry-text">
        Ou você tá perdidaço, ou eu sem querer te levei pra um lugar sem saída
        :(
      </span>
      <Link href="/">Voltar para a home</Link>
    </div>
  </Container>
);
