import React from 'react';
import Welcome from './Components/Welcome'

class App extends React.Component {

  render() {
    return (
      <div style={{flexGrow:1, height:'100%'}}>
          <Welcome/>
      </div>
    );
  }
}

export default App;
