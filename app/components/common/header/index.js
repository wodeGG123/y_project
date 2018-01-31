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
    static defaultProps = {
        title:'标题'
    }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

