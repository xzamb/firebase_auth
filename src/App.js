import React, {Component} from 'react';
import {View} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component{

    componentWillMount(){

        firebase.initializeApp(
                {
                    apiKey: 'AIzaSyCTuumDDk-eywg8Fb7aVGKAZrEe6iz4lrU',
                    authDomain: 'auth-6ff54.firebaseapp.com',
                    databaseURL: 'https://auth-6ff54.firebaseio.com',
                    projectId: 'auth-6ff54',
                    storageBucket: 'auth-6ff54.appspot.com',
                    messagingSenderId: '1001660354663'
                });
    }

    render(){
        return(
            <View>
                <Header headerText = {'Test'}/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;