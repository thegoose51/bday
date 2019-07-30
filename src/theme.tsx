import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#607d8b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
    },
  },
});

export default theme;