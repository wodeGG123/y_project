import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
    Image,
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
                      <View style={styles.introEvaluateTop}>
                          <View style={styles.introEvaluateTopTitleWrap}>
                              <View>
                                  <Text style={styles.introEvaluateTopTitleText}>综合评价</Text>
                              </View>
                              <View>
                                  <Text style={styles.introEvaluateTopTitleMarkText}>10.0</Text>
                              </View>
                          </View>
                          <View style={styles.introEvaluateTopEs}>
                              <View style={styles.introEvaluateTopEsItem}>
                                  <Text style={styles.introEvaluateTopEsItemText1}>内容实用：</Text><Text style={styles.introEvaluateTopEsItemText2}>10.0</Text>
                              </View>
                              <View style={styles.introEvaluateTopEsItem}>
                                  <Text  style={styles.introEvaluateTopEsItemText1}>通俗易懂：</Text><Text style={styles.introEvaluateTopEsItemText2}>10.0</Text>
                              </View>
                              <View style={styles.introEvaluateTopEsItem}>
                                  <Text  style={styles.introEvaluateTopEsItemText1}>逻辑清晰：</Text><Text style={styles.introEvaluateTopEsItemText2}>10.0</Text>
                              </View>
                          </View>
                      </View>
                  </View>

                  <View style={styles.introEvaluates}>
                        <View style={styles.introEvaluatesItem}>
                            <View style={styles.introEvaluatesItemImageWrap}>
                                <Image source={{uri: 'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg'}}  style={styles.introEvaluatesItemImage} />
                            </View>
                            <View style={styles.introEvaluatesItemRight}>
                                <View>
                                    <Text style={styles.introEvaluatesItemRightTitle}>weixin-duan</Text>
                                    <View style={styles.introEvaluatesItemRightStars}>
                                        <Icon style={styles.introEvaluatesItemRightStar} name='star' />
                                    </View>
                                </View>
                                <View style={styles.introEvaluatesItemContent}>
                                    <Text style={styles.introEvaluatesItemContentText}>
                                        老师讲的很好，通俗易懂
                                    </Text>
                                </View>
                            </View>
                        </View>

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

