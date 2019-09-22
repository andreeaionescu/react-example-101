import React from 'react'
import {Input, Button, Form, Header} from "semantic-ui-react"
import {Auth} from 'aws-amplify'
import { runInThisContext } from 'vm'

export default class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)
    }

    handleOnSubmit(e){
        e.preventDefault()
        console.log('Submitted!')
        console.log('Username: ', this.state.username)
        console.log('Password: ', this.state.password)
        this.setState({username: '', password: ''})
        e.target.reset()
    }

    setUsername(e){
        this.setState({username: e.target.value})
    }

    setPassword(e){
        this.setState({password: e.target.value})
    }

    render(){
        return(
            <Form onSubmit={this.handleOnSubmit}>
                <Header size="huge">Login to continue</Header>
                <Form.Field>
                    <label>Username</label>
                    <Input type='text' placeholder='Type your username here..' onChange={this.setUsername}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Input type='password' placeholder='Type your password here..' onChange={this.setPassword}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}