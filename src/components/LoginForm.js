import React, { Component } from 'react';
import {Button, Card, CardSection} from './common';

class LoginForm extends Component{

    render(){
        return(
            <Card>
                <CardSection/>
                <CardSection/>
                <CardSection>
                    <Button label = {'Login'}/>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;