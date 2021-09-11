import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const font = "'Lato', sans-serif";

let theme = createTheme({
  palette: {
    primary: {
      main: '#246EB9'
    },
    secondary: {
      main: '#16ff4c'
    },
    error: {
      main: '#F06543'
    },
    warning: {
      main: '#F5EE9E'
    },
    info: {
      main: '#16c9ff'
    },
    success: {
      main: '#16ff4c'
    },
    background: {
      default: '#FDFFFC'
    }
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 69
    },
    h2: {
      fontSize: 57
    },
    h3: {
      fontSize: 48
    },
    h4: {
      fontSize: 40
    },
    h5: {
      fontSize: 33
    },
    h6: {
      fontSize: 28
    },
    subtitle1: {
      fontSize: 23
    },
    subtitle2: {
      fontSize: 19
    },
    body1: {
      fontSize: 19
    },
    body2: {
      fontSize: 16
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;