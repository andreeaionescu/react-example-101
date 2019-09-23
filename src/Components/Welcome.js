import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Login from './Login';


export default class Welcome extends React.Component {

    render(){
        return (
            <Grid centered verticalAlign='middle' columns={2} style={{height:'100%'}}>
                <Grid.Column>    
                    <Image centered size='large' src='src/Images/code_girls.png' />
                </Grid.Column>
                <Grid.Column>
                    <Login/>
                </Grid.Column>
            </Grid>
        )
    }

}