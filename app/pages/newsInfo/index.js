import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
  Text,
  WebView,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/common/header/index.js'
export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
            <Header left={true} navigation={this.props.navigation} title='资讯' />
            <ScrollView contentContainerStyle={styles.scrollViewWrap}>
               <View style={styles.titleWrap}><Text style={styles.title}>《妖猫传》终极海报绘制过程</Text></View>
               <View style={styles.timeWrap}><Text style={styles.time}>2018-01-29  17:45:00</Text></View>
               <View>
                 <WebView
                  style={styles.webView}
                  source={require('./source.html')}
                  javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                  />
               </View>
            </ScrollView>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

