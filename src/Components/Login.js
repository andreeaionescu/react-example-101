import React from 'react'
import {Input, Button, Form, Header} from "semantic-ui-react"

class SignUp extends React.Component {

    render(){
        return(
            <Form>
                <Header size="huge">Sign up to continue</Header>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='username'
                        label='Username'
                        type='text'
                        placeholder='Type your username here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='password'
                        label='Password'
                        type='password'
                        placeholder='Type your password here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='email'
                        label='Email'
                        type='text'
                        placeholder='Type your email here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='phone_number'
                        label='Phone number'
                        type='text'
                        placeholder='Type your phone number here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Button type='submit' onClick={this.props.singUp}>Submit</Button>
            </Form>
        )
    }
}

class ConfirmSignUp extends React.Component {
    render(){
        return(
            <Form>
                <Header size="huge">Confirm sign up </Header>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='username'
                        label='Username'
                        type='text'
                        placeholder='Type your username here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='authenticationCode'
                        label='Authentication code'
                        type='text'
                        placeholder='Type authentication code here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Button type='submit' onClick={this.props.confirmSignUp}>Confirm Sign Up</Button>
            </Form>
        )
    }   
}

class Login extends React.Component {

    render(){
        return (
        <Form>
                <Header size="huge">Login to continue</Header>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='username'
                        label='Username'
                        type='text'
                        placeholder='Type your username here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Input}
                        name='password'
                        label='Password'
                        type='password'
                        placeholder='Type your password here..'
                        width={12}
                        onChange={this.props.handleOnChange}
                    />
                </Form.Group>
                <Button type='submit' onClick={this.props.signIn}>Submit</Button>
            </Form>
    )
}

}

export {Login, SignUp, ConfirmSignUp}