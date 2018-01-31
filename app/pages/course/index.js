import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

import {TopHeader, SwitchBar } from '../../components/homeComponents/index.js'
import {UDBlock} from '../../components/common/block/index.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
          <TopHeader navigation={this.props.navigation} />
          <SwitchBar navigation={this.props.navigation} />
          <View style={styles.hr}></View>
          <ScrollView contentContainerStyle={styles.scrollViewWrap}>
              <View style={styles.block} >
                  <UDBlock style={styles.recommendWrap} />
              </View>
          </ScrollView>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

