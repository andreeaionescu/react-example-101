import React from 'react';
import Welcome from './Components/Welcome'
import { withAuthenticator } from 'aws-amplify-react'

class App extends React.Component {

  render() {
    return (
      <div style={{flexGrow:1}}>
          <Welcome/>
      </div>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});
