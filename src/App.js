import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
           firebase.initializeApp({
               apiKey: 'AIzaSyB2hRspyQGVoi0LWd4M_29DiKLujKR90S8',
               authDomain: 'authentication-250eb.firebaseapp.com',
               databaseURL: 'https://authentication-250eb.firebaseio.com',
               projectId: 'authentication-250eb',
               storageBucket: 'authentication-250eb.appspot.com',
               messagingSenderId: '795539357321'
           });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;