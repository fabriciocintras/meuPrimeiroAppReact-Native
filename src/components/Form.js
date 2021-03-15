import React, {Component} from 'react';
import {View, Text, TextInput, Button } from 'react-native';
import {form} from '../styles/index'; 

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: "", idade: ""
        };
        this.concluir = this.concluir.bind(this);
    }
    concluir(){
        if(this.state.nome ===""|| this.state.idade ===""){
            alert("Por favor, preencha corretamente os campos.");
            return;
        }else{
            alert("Nome: " + this.state.nome + "\n" + "Idade: " + this.state.idade);
        }

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

                <Button title="Pronto!" onPress={this.concluir}></Button>
                <Text></Text>
                
              
            </View>
    );
}
}

export default Form;