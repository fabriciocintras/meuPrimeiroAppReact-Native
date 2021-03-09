
  import React, { Component } from 'react'; 
  import { View, Text } from 'react-native'; 
import Form from './src/components/Form';
  import Header from './src/components/Header'; 

  class App extends Component { 

    render() { 
      return ( 
        <View>  
          <Header titulo="React Native" subtitulo="Uma biblioteca JavaScript."></Header>
          <Form></Form>
        </View> 
      ) 
    } 
  } 
  export default App;
              
            