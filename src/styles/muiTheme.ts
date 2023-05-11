import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

export const interFont = Inter({ subsets: ["latin"] })

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: interFont.style.fontFamily,
  },
});

export default lightTheme;
