import {
  blue, blueGrey, deepOrange, deepPurple, indigo, pink, purple, red, teal,
} from '@material-ui/core/colors';
import IThemes from '../types/themes';

const THEMES: IThemes = {
  th001: {
    palette: {
      primary: blueGrey,
      secondary: pink,
    },
  },
  th002: {
    palette: {
      primary: deepPurple,
      secondary: blue,
    },
  },
  th003: {
    palette: {
      primary: purple,
      secondary: red,
    },
  },
  th004: {
    palette: {
      primary: indigo,
      secondary: pink,
    },
  },
  th005: {
    palette: {
      primary: blue,
      secondary: red,
    },
  },
  th006: {
    palette: {
      primary: deepOrange,
      secondary: red,
    },
  },
  th007: {
    palette: {
      primary: teal,
      secondary: red,
    },
  },
};

export default THEMES;
