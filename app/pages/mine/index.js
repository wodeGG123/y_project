import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
          <Text onPress={()=>{this.props.navigation.navigate('MineOrder')}}>MineOrder</Text>
          <Text onPress={()=>{this.props.navigation.navigate('Login')}}>Login</Text>
          <Text onPress={()=>{this.props.navigation.navigate('LatestStudy')}}>LatestStudy</Text>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

