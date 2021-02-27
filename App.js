  // Importamos as bibliotecas e componentes principais para nosso projeto
  import React, { Component } from 'react';
  import { View, Text, Image, ImageBackground } from 'react-native';


  // Criamos a nossa classe App para renderizar nosso projeto
  class App extends Component {
    render() {
      // Caminho URI da nossa imagem
      let logoURI = "https://reactjs.org/logo-og.png";
      // Caminho local da nossa imagem
      let logoLocal = require('./src/images/reactLogo.png');

      return (
        // Area que será utilizada pelo nosso conteúdo
        <View>
          <ImageBackground source={logoLocal} style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'center'}} imageStyle={{opacity:0.1,}}>
          {/* Inserindo textos e estilizando */}
          <Text style={{fontSize: 20, textTransform: 'uppercase', textAlign: 'center'}}>Olá, Mundo!</Text>
          <Image 
            style = {{width:150, height:150}} 
            source = {logoLocal}
          />
          <Text style={{color: '#3fd4eb', fontSize: 16, textAlign: 'center' }}>Esse é o meu primeiro aplicativo!</Text>
          <Text style={{color: 'lightseagreen', textAlign: 'center'}}>Agora vamos estilizar nosso projeto.</Text>         
          
          {/* Inserindo imagem utilizando variavel */}


          </ImageBackground>
        </View>
      )
    }
  }

  // Informamos qual classe será renderizada no aplicativo
  export default App;
              