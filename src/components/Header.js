import React, {Component} from 'react';
import {View, Text, Image} from 'react-native'; 
 import { header } from '../styles/index.js';

class Header extends Component {
    render() {
        return (
            <View style={header.background}>
                <View style={header.container}>
                    <Text style={header.title}> {this.props.titulo} </Text>
                    <Text style={header.subtitle}> {this.props.subtitulo} </Text>
                    <Image style={header.logo} source={require('../images/react-logo.png')}></Image>
                </View>
            </View>
        );
    }
}

export default Header;