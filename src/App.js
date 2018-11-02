import React, {Component} from 'react';
import {View} from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component{
    
    state ={
        isLogged: null
    }

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

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({isLogged : true});
                
            }else{
                this.setState({isLogged : false});
                
            }
        });
    }

    renderContent(){
        switch(this.state.isLogged){
            
            case true:
                return(
                    <CardSection>
                    <Button
                        onClick = { () => firebase.auth().signOut() }
                        label = {'Logout'}/> 
                    </CardSection>
                );

            case false:
                return <LoginForm/>;

            default:
                return( 
                    <CardSection>
                        <Spinner/>
                    </CardSection>
                );
        }
    }

    render(){
        return(
            <View>
                <Header headerText = {'Authentication'}/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;