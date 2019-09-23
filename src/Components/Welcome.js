import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import { Login, SignUp, ConfirmSignUp } from './Login';
import {Auth} from 'aws-amplify'

export default class Welcome extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone_number: '',
            authenticationCode: '',
            step: 0,
            existingUser: null,
        }
    }

    handleOnChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    signUp = async () => {
        const {username, password, email, phone_number } = this.state
        try {
            await Auth.signUp({ username, password, attributes: {email, phone_number}})
            console.log('successfully signed up!')
            this.setState({step: 1})
        } catch (err) {
            console.log('error signing up: ', err)
            if (err.code === "UsernameExistsException") {
                this.setState({existingUser: true, errMessage: err.message})
            }
        }
    }

    confirmSignUp = async () => {
        const { username, authenticationCode } = this.state
        try {
            await Auth.confirmSignUp(username, authenticationCode)
            console.log('user succesfully signed up!')
            this.setState({step: 2})
        } catch (err) {
            console.log('error confirming sing up: ', err)
        }
    }

    signIn = async () => {
        const { username, password } = this.state
        try {
            await Auth.signIn(username, password)
            console.log('user succesfully signed in!')
            this.setState({signedIn: true})
        } catch (err) {
            console.log('error logging in: ', err)
        }
    }

    clickSignIn = () => {
        this.setState({existingUser: false})
    }

    clickLogIn = () => {
        this.setState({existingUser: true})
    }

    displaySignUpOptions = () => {
        switch(this.state.step){
            case 0:
                return <SignUp singUp={this.signUp} handleOnChange={this.handleOnChange}/>
                break;
            case 1:
                return <ConfirmSignUp confirmSignUp={this.confirmSignUp} handleOnChange={this.handleOnChange}/>
                break;
            default:
                return <Login signIn={this.signIn} handleOnChange={this.handleOnChange}/>
        }
    }

    displayBasedOnUserType = (existingUser) => {
        if (!existingUser) return
        return existingUser===true ? <Login signIn={this.signIn} handleOnChange={this.handleOnChange}/> : this.displaySignUpOptions()
    }

    render(){
        return (
            <Grid centered verticalAlign='middle' columns={2} style={{height:'100%'}}>
                <Grid.Column>    
                    <Image centered size='large' src='src/Images/code_girls.png' />
                </Grid.Column>
                <Grid.Column>
                    <Header>Welcome to this awesome authentication page using AWS Amplify and React!</Header>
                    {this.state.existingUser ? <Login signIn={this.signIn} handleOnChange={this.handleOnChange}/> : this.displaySignUpOptions(this.state.step)}    
                </Grid.Column>
            </Grid>
        )
    }

}