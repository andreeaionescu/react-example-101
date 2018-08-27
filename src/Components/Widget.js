import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';

export default class Widget extends React.Component {
    render(){
        return (
        <Grid item xs={3}>
            <Paper elevation={4}>
              <div>{this.props.content}</div>
            </Paper>
        </Grid>
    )
    }
}