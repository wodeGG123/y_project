/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import App from './app/app.js'


export default class y_project extends Component {
   constructor(props){
      super(props);
      this.state = {
          
      };
   }  
  render() {
    return (<App />);
  }
}

AppRegistry.registerComponent('y_project', () => y_project);
