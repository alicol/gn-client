import React, {useEffect, useState} from 'react';
//import Home from './Home/Home'
import Sidebar from './Home/Sidebar';
import Auth from './Auth/Auth';
import Router from 'react-router-dom';
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

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token != null) {
      setSessionToken(token);
    }
  }, [])

//LOG IN
const updateToken = (newToken:string) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
}

//LOG OUT
const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {return (sessionToken === localStorage.getItem('token')) ? <Sidebar token={sessionToken} updateToken={updateToken} clearToken={clearToken} /> : <Auth updateToken={updateToken} token={sessionToken} />}



  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">

      
    {/* <Sidebar updateToken={updateToken} token={sessionToken} clearToken={clearToken}/> */}
      {protectedViews()}

    </div>
    </MuiThemeProvider>
  );
  }

export default App;
