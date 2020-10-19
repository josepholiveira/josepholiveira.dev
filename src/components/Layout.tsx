import React from 'react';
import { useRouter } from 'next/router';
import Container from './Container';
import Header from './Header';

import SEOComponent, { PropsSEO } from '@/components/SEO';

interface Props extends PropsSEO {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, ...rest }) => {
  const { asPath } = useRouter();


  return (
    <>  
      <SEOComponent {...rest} url={asPath} />
      <Header />
      <main role="main">
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;