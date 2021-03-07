import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import Header from './src/components/Header'; 

// Criamos a nossa classe App para renderizar nosso projeto 
class App extends Component { 

  render() { 
    return ( 
      <View>  
        <Header></Header>
      </View> 
    ) 
  } 
} 

// Informamos qual classe será renderizada no aplicativo 
export default App;