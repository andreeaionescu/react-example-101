import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid container>
          <Grid item xs={3}>
            <Paper elevation={4}>
              <div>{'Inside the paper'}</div>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
