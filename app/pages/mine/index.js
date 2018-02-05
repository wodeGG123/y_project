import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
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
          <View style={styles.top}>
              <View style={styles.user}>
                <Image 
                  style={styles.userImg}
                  source={{uri: 'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg'}}
                />
                <View style={styles.userTextWrap}>
                    <Text style={styles.userText}>DUAN</Text>                  
                    <Icon style={styles.userSex} size={16} color='#ff7e00' name='md-male' />
                </View>
                
                
              </View>
              <View  style={styles.userInfo}>
                  <View style={[styles.userInfoTextWrap,{justifyContent: 'flex-start',borderRightWidth: 1,borderRightColor: '#b1e7da'}]}>
                    <Text style={styles.userInfoText}>学习时长：</Text>
                    <Text style={styles.userInfoText}>2135小时</Text>
                  </View>
                  <View style={[styles.userInfoTextWrap,{justifyContent: 'flex-end'}]}>
                    <Text style={styles.userInfoText}>经      验：</Text>
                    <Text style={styles.userInfoText}>6582</Text>
                  </View>
              </View>
          </View>
          <View>
            <View style={styles.itemsWrap}>
              <View style={styles.itemWrap}>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-bookmark-outline'/>
                      <Text style={styles.itemText}>我的订单</Text>
                  </View>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-cart-outline'/>
                      <Text style={styles.itemText}>购物车</Text>
                  </View>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-copy-outline'/>
                      <Text style={styles.itemText}>全部订单</Text>
                  </View>
              </View>
          </View>
          <View style={styles.itemsWrap}>
              <View style={styles.itemWrap}>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-chatbubbles-outline'/>
                      <Text style={styles.itemText}>答疑解惑</Text>
                  </View>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-create-outline'/>
                      <Text style={styles.itemText}>设置</Text>
                  </View>
              </View>
          </View>
          </View>








          <Text onPress={()=>{this.props.navigation.navigate('MyOrder')}}>MyOrder</Text>
          <Text onPress={()=>{this.props.navigation.navigate('Login')}}>Login</Text>
          <Text onPress={()=>{this.props.navigation.navigate('LatestStudy')}}>LatestStudy</Text>
          <Text onPress={()=>{this.props.navigation.navigate('Setting')}}>Setting</Text>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

