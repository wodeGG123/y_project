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
import Theme from '../../theme.js'
import ScrollableTabView from 'react-native-scrollable-tab-view'
export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
          <View  style={styles.top}>
              <View style={styles.videoWrap}></View>
              <View style={styles.videoTool}>
                  <View><Icon onPress={()=>{}} style={styles.videoToolIcon} size={20} color='rgba(255,255,255,0.4)' name='ios-close-circle' /></View>
                  <View><Icon style={styles.videoToolIcon} size={26} color='rgba(255,255,255,0.4)' name='ios-send' /></View>
              </View>
          </View>
          <ScrollableTabView
              tabBarUnderlineStyle={{backgroundColor:Theme.color,borderRadius:3,height:3}}
              tabBarBackgroundColor='#ffffff'
              tabBarActiveTextColor={Theme.color}
              tabBarInactiveTextColor={Theme.textBlack2}
              tabBarTextStyle={{fontSize:14}}
          >
              <ScrollView tabLabel="介绍" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.introWrap}>
                     <View style={styles.introTextWrap}>
                      <Text style={styles.introText}>2013年6月20日，PHP开发团队自豪地宣布推出PHP 5.5.0。此版本包含了大量的新功能和bug修复。需要开发者特别注意Windows XP 和 2003 系统。</Text> 
                     </View>
                      <View style={styles.introEsWrap}>
                        <View style={styles.introEsItem}>
                         <Text style={styles.introEsText}>难度：中级</Text> 
                        </View>
                         <View style={styles.introEsItem}>
                         <Text style={styles.introEsText}>时长：15小时</Text> 
                        </View>
                         <View style={styles.introEsItem}>
                         <Text style={styles.introEsText}>学习人数：83人</Text> 
                        </View>
                      </View>
                  </View>
                  <View style={styles.introEvaluate}>
                    
                  </View>
              </ScrollView>
              <ScrollView tabLabel="章节" contentContainerStyle={styles.scrollViewWrap} >
                  
              </ScrollView>
              <ScrollView tabLabel="咨询" contentContainerStyle={styles.scrollViewWrap} >
                  
              </ScrollView>

          </ScrollableTabView>

      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

