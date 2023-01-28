import React, { Component } from "react";
//
import { ThemeProvider as MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
//
import UserForm from './pages/UserForm';
import Layout from './layout/main.layout';

const myTheme = createTheme({
  palette: {
      secondary: {
          main: orange[500]
      }
  }
})
export class App extends Component {
  render() {
    return (
      <main>
        <MuiThemeProvider theme={myTheme}>
          <Layout>
            <UserForm />
          </Layout>
        </MuiThemeProvider>
      </main>
    )
  }
}

export default App;
