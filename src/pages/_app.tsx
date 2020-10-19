import GlobalStyle from '../styles/GlobalStyle'

import dark from '../styles/themes/dark'

import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
