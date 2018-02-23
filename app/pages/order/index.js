import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Header from '../../components/common/header/index.js'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'
import {OrderBlock} from '../../components/common/block/index.js'
import Theme from '../../theme.js'
export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
          <Header left={true} navigation={this.props.navigation} title='我的订单' />
          <ScrollableTabView
              tabBarUnderlineStyle={{backgroundColor:Theme.color,borderRadius:3,height:3}}
              tabBarBackgroundColor='#ffffff'
              tabBarActiveTextColor={Theme.color}
              tabBarInactiveTextColor={Theme.textBlack2}
              tabBarTextStyle={{fontSize:14}}
          >
              <ScrollView tabLabel="未支付" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.block} >
                      <OrderBlock />
                  </View>
              </ScrollView>
              <ScrollView tabLabel="已支付" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.block} >
                      <OrderBlock />
                  </View>
              </ScrollView>

          </ScrollableTabView>




      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

