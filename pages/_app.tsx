import { CacheProvider, EmotionCache } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import * as React from 'react';
import Header from "../components/header/Header";
import '../styles/globals.css';
import theme from '../styles/theme/theme';
import createEmotionCache from '../utility/createEmotionCache';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(theme);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Header children={undefined}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
