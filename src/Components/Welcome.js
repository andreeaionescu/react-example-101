import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Login from './Login';


export default class Welcome extends React.Component {

    render(){
        return (
            <Grid stretched columns={2}>
                <Grid.Column>    
                    <Image src='src/Images/background-flowers.jpg' />
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                    <Login/>
                </Grid.Column>
            </Grid>
        )
    }

}