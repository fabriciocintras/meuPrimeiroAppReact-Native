import React, {Component} from 'react';
import {View, Text, TextInput, Button } from 'react-native';
import {form} from '../styles/index'; 

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "", idade: ""
        };
    }

    render() {


        return (            
            <View style={form.container}>

                <Text style={form.texts}>Nome: </Text>
                <TextInput placeholder="Informe seu nome" style={form.inputs} onChangeText = { (nomeDigitado) => this.setState({ nome : nomeDigitado })} /> 
                <Text></Text>

                <Text style={form.texts}>Idade: </Text>               
                <TextInput placeholder="Informe sua idade" keyboardType="numeric" style={form.inputs} onChangeText = { (idadeDigitada) => this.setState({ idade : idadeDigitada })} /> 
                <Text></Text>

                <Button title="Pronto!"></Button>
                <Text></Text>
                
                <View>
                    {/* Chamamos nossos States para serem exibidos os valores */}
                    <Text>Nome do usuário: {this.state.nome}</Text>
                    <Text>Idade do usuário: {this.state.idade} anos</Text>
                </View>
            </View>
    );
}
}

export default Form;