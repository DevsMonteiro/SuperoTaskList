import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/home/Home';
import NavBar from '../components/layout/NavBar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { AdicionarTarefa } from '../components/listaTarefas/AdicionarTarefa';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 12,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/adicionartarefa" component={AdicionarTarefa} />
            <Redirect from='*' to='/' />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default App;
