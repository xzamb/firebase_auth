import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ onChangeText, value, placeholder, isSecureTextEntry }) =>{

    const { inputStyle, containerStyle } = styles;

    return(
        <View style = { containerStyle }>
            <TextInput
                secureTextEntry = {isSecureTextEntry}
                autoCorrect = {false}
                placeholder = {placeholder} 
                value = {value}
                onChangeText = {onChangeText}
                style = { inputStyle }
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 15,
        fontSize: 18,
        lineHeight: 23,
        height: 40
    },

    containerStyle: {
        height: 40,
        align: 'center'
    }
};


export { Input };