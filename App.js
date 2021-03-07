  // Importamos as bibliotecas e componentes principais para nosso projeto
  import React, { Component } from 'react';
  import { View, Text, Image,ScrollView } from 'react-native';


  // Criamos a nossa classe App para renderizar nosso projeto
  class App extends Component {
    render() {
// Caminho URI da nossa imagem 
let logoURI = "https://reactjs.org/logo-og.png"; 

// Array de imagens
// Esse array ira inserir a mesma imagem até o loop terminar
let imagens = []
for (let i=0; i < 5; i++) {
  imagens.push(<Image style = {{width:150, height:150, margin: 5}} source = {{uri: logoURI}} /> )
}
      return (
        <ScrollView>
          
        <View>
          
            {/* Inserindo textos e estilizando */} 
            <Text style={{fontSize: 20, textTransform: 'uppercase'}}>Olá, Mundo!</Text> 
            <Text style={{color: '#3fd4eb', fontSize: 16 }}>Esse é o meu primeiro aplicativo!</Text> 
            <Text style={{color: 'lightseagreen'}}>Agora vamos estilizar nosso projeto.</Text>  
            {/*ScrollView com rolagem horizontal*/}
            <ScrollView horizontal={true}>
           
         

            </ScrollView>
            {/* Chamada do Array que ira inserir as imagens vezes */}
           
        </View> 
      </ScrollView>
      )
    }
  }

  // Informamos qual classe será renderizada no aplicativo
  export default App;
              