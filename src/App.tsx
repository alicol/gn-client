import React from 'react';
import Home from './Home/Home'
import './App.css';
import {createMuiTheme} from '@material-ui/core/styles'
import lime from '@material-ui/core/colors/lime'

const theme = createMuiTheme({
  status: {
    danger: 
  }
  palette: {
    primary: {
      main: '#29b6f6'

    },
    secondary: lime,
  }
})

function App() {



  return (
    <div className="App">

      <Home />
    </div>
  );
  }

export default App;
