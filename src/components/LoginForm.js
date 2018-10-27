import React, { Component } from 'react';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component{

    state = { 
        email : '',
        password: ''
    };

    render(){
        return(
            <Card>
                <CardSection/>
                    <Input
                        isSecureTextEntry = {false}
                        placeholder = {'email'}
                        value = {this.state.email}
                        onChangeText = {email => this.setState({ email })}
                        />
                <CardSection/>
                <CardSection>
                    <Input
                        isSecureTextEntry = {true}
                        placeholder = {'password'}
                        value = {this.state.password}
                        onChangeText = { password => this.setState({password})}
                    />
                </CardSection>
                <CardSection>
                    <Button label = {'Login'}/>
                </CardSection>
            </Card>
        );
    }

}

export default LoginForm;