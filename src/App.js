import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Widget from './Components/Widget';

class App extends React.Component {

  constructor(props){
    super(props);
    this.dummyData = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod nunc nisl. Curabitur eget nulla congue, cursus nisi sed, iaculis lorem.',
      'Aliquam quis lacus a metus fermentum iaculis id et purus. Phasellus vitae dictum orci. Curabitur faucibus luctus elementum.',
      'Etiam suscipit efficitur sem eget dictum. Duis ac augue condimentum, semper enim sit amet, sagittis libero.',
      'Aliquam consectetur ultrices aliquam. Aenean et accumsan sapien. Curabitur eu vehicula augue.'
    ]
  }

  render() {
    return (
      <div style={{flexGrow:1, margin:'10px'}}>
        <MuiThemeProvider theme={createMuiTheme()}>
          <Grid container spacing={16}>
            {
              this.dummyData.map( (item, key) => 
                <Widget key={key} content={item} />
              )
            }
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
