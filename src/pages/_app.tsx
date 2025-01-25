import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { Finger_Paint, Fira_Sans } from 'next/font/google';

const firaSans = Fira_Sans({ weight: '400', display: 'fallback', subsets: ['latin'] });
const fingerPaint = Finger_Paint({ weight: '400', display: 'fallback', subsets: ['latin'] });
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: any) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <div className={firaSans.className + ' ' + fingerPaint.className}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
}
