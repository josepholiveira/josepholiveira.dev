
import React from 'react';
import SEO from '../components/SEO';

import Presentation from '../components/Presentation';

import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Form from '../components/FormSection';
import Footer from '../components/Footer';

export default function App() {
  return (
    <Layout>
      <SEO titlePrefix="Home" />

      <Presentation />
      <About />
      <Projects />
      <Form />
      <Footer />
    </Layout>
  );
}