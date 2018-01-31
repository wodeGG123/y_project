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
import Header from '../../components/common/header/index.js'
import { LRBlock} from '../../components/common/block/index.js'
export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
            <Header title='资讯' />
            <ScrollView contentContainerStyle={styles.scrollViewWrap}>
                <View style={styles.block} >
                    <LRBlock style={styles.recommendWrap} />
                </View>
            </ScrollView>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

