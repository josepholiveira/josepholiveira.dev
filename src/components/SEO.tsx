import React from 'react';
import Head from 'next/head';

export interface PropsSEO {
  title?: string;
  titlePrefix?: string;
  description?: string;
  image?: string;
  url?: string;
  siteUrl?: string;
  shouldIndexPage?: boolean;
}

const SEO: React.FC<PropsSEO> = ({
  title,
  titlePrefix,
  description,
  image = 'og.png',
  url,
  siteUrl,
  shouldIndexPage = true,
}) => {
  const pageTitle = title || `${titlePrefix} | Joseph Oliveira`;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  const pageImage = `/${image}`;

  const pageDescription =
    description || `O portfólio de um desenvolvedor autodidata, instrutor e lifelong learner apaixonado por React, React Native, Node.js e todo o ecossistema por volta dessas tecnologias.`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="image" content={pageImage} />
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#4545E5" />
      <meta name="msapplication-TileColor" content="#4545E5" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@josepholiveirad" />
      <meta name="twitter:creator" content="@josepholiveirad" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
};

export default SEO;