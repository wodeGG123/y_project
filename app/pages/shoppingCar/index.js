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
import { CartBlock} from '../../components/common/block/index.js'
export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
          <Header title='购物车' />
          <ScrollView contentContainerStyle={styles.scrollViewWrap}>
              <View style={styles.block} >
                  <CartBlock navigation={this.props.navigation} style={styles.recommendWrap} />
              </View>
          </ScrollView>
          <View style={styles.tool}>
              <View style={styles.toolLeft}>
                  <Text style={styles.toolLeftText}>已选（1）</Text>
              </View>
              <View style={styles.toolRight}>
                  <View style={styles.toolRightPrice}>
                      <Text style={styles.toolRightPriceText}>￥388.00</Text>
                  </View>
                  <View style={styles.toolRightButton}>
                      <Text style={styles.toolRightButtonText}>下单</Text>
                  </View>
              </View>
          </View>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

