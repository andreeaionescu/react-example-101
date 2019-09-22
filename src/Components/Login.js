import React from 'react'
import {Button, Form, Header} from "semantic-ui-react"

export default class Login extends React.Component {

    onSubmit(){
        
    }

    render(){
        return(
            <Form>
                <Header size="huge">Login to continue</Header>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Type your username here..'/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Type your password here..'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}