import { createTheme } from '@mui/material/styles';
import '@fontsource/lato'; // Import Lato font

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A4E61',
    },
    background: {
      default: '#F1F2F6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3A4E61',
      secondary: '#6B7C8A',
    },
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '12px',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontSize: '12px',
      fontWeight: 400,
    },
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none', // Disable uppercase
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: '#2F3F4F', // Slightly darker shade of primary
          },
        },
        contained: {
          backgroundColor: '#3A4E61',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#2F3F4F',
          },
        },
        outlined: {
          borderColor: '#3A4E61',
          color: '#3A4E61',
          '&:hover': {
            borderColor: '#2F3F4F',
            backgroundColor: 'rgba(58, 78, 97, 0.1)',
          },
        },
        text: {
          color: '#3A4E61',
          '&:hover': {
            backgroundColor: 'rgba(58, 78, 97, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
        },
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
        input: {
          padding: '12px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        //   padding: '6px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
        //   color: '#3A4E61',
        },
      },
    },
  },
});

export default theme;
