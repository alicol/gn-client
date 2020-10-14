import React from 'react';
import Home from './Home/Home'
import './App.css';
import {createMuiTheme, MuiThemeProvider, responsiveFontSizes} from '@material-ui/core/styles'
import lime from '@material-ui/core/colors/lime'


declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }
}

let theme = createMuiTheme({
    status: {
      danger: '#ff1744',
    },
    palette: {
      primary: {
        main: '#29b6f6'
  
      },
      secondary: lime,
    },
  });
  theme = responsiveFontSizes(theme);


function App() {



  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Home />
    </div>
    </MuiThemeProvider>
  );
  }

export default App;
