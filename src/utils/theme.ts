const themeStyle = require('../../content/data/style.json');
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: themeStyle.mode ?? 'light',
        primary: {
            main: themeStyle.primaryColor ?? '#1F2B9D'
        },
        secondary: {
            main: themeStyle.secondaryColor ?? 'rgb(255, 198, 0)'
        },
        text: {
            primary: themeStyle.mode === 'dark' ? '#fff' : themeStyle.textPrimaryColor,
            secondary: themeStyle.mode === 'dark' ? '#979797' : themeStyle.textSecondaryColor
        }
    },
    typography: {
        fontFamily: '"Fira Sans", "Courier New", monospace',
        h1: {
            fontWeight: 400,
            fontFamily: '"Finger Paint", "Courier New", monospace'
        },
        h2: {
            fontWeight: 400,
            fontFamily: '"Finger Paint", "Courier New", monospace'
        },
        h3: {
            fontWeight: 500
        }
    }
});

const decoratedTheme = responsiveFontSizes(theme);

export default decoratedTheme;
