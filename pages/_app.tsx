import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { amber, deepOrange, grey, common, } from '@mui/material/colors';
import { createContext, useContext, useMemo, useState } from 'react';

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: 'Space Mono, monospace'
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl'
      }
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: 'Roboto',
    allVariants: {
      color: 'white',
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl'
      }
    }
  },
})
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: grey,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: amber,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});


export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => mode === 'dark' ? darkTheme : lightTheme, [mode]);
  // const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Layout toggleDark={colorMode.toggleColorMode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
