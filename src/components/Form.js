import React, {Component} from 'react';
import {View, Text, TextInput } from 'react-native';
import {form} from '../styles/index'; 

class Form extends Component {
    render() {
        return (            
            <View style={form.container}>
                  <Text style={form.texts}>Nome: </Text>
                  <TextInput placeholder="Informe seu nome" style={form.inputs} /> 
                  <Text></Text>
                  <Text style={form.texts}>Idade: </Text>   
                  <TextInput placeholder="Informe sua idade" keyboardType="numeric" style={form.inputs} /> 
              </View>
        );
    }
}
export default Form;