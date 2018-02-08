import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Button from 'apsl-react-native-button'
import Member from '../../request/member.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          userInfo:{
            nickname:'未登录',
            sex:0,

          },
          login:false,
      };
   }  
  componentWillMount() {
    let userInfo = store.getState().userInfo;
    if(userInfo){
      this.setState({
        userInfo:userInfo.userinfo,
        accessToken:userInfo.accessToken,
        login:true,
      })
    }else{

    }
  }   
  handleEXIT(){
    Member.LoginOut(this.state.accessToken)
    .then((data)=>{
      if(data.msg == 'failed'){

      }else{
        this.props.navigation.navigate('Login',{preScreen:'Mine'})
      }
    })
  }
  render() {
    let userInfo = this.state.userInfo;
    return (
      <View style={styles.container}>
          <View style={styles.top}>
              <View style={styles.user}>
                <Image 
                  style={styles.userImg}
                  source={{uri: 'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg'}}
                />
                <View style={styles.userTextWrap}>
                    <Text style={styles.userText}>{userInfo.nickname||userInfo.mobile}</Text>                  
                    {userInfo.sex?<Icon style={styles.userSex} size={16} color='#ff7e00' name='md-male' />:<Icon style={styles.userSex} size={16} color='#ff7e00' name='md-female' />}
                </View>
                
                
              </View>
              <View  style={styles.userInfo}>
                  <View style={[styles.userInfoTextWrap,{justifyContent: 'flex-start',borderRightWidth: 1,borderRightColor: '#b1e7da'}]}>
                    <Text style={styles.userInfoText}>学习时长：</Text>
                    <Text style={styles.userInfoText}>2135小时</Text>
                  </View>
                  <View style={[styles.userInfoTextWrap,{justifyContent: 'flex-end'}]}>
                    <Text style={styles.userInfoText}>经验：</Text>
                    <Text style={styles.userInfoText}>6582</Text>
                  </View>
              </View>
          </View>
          <View>
            <View style={styles.itemsWrap}>
              <View style={styles.itemWrap}>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-bookmark-outline'/>
                      <Text onPress={()=>{this.props.navigation.navigate('MyOrder')}} style={styles.itemText}>我的订单</Text>
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
                      <Text onPress={()=>{this.props.navigation.navigate('Question')}} style={styles.itemText}>答疑解惑</Text>
                  </View>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-create-outline'/>
                      <Text onPress={()=>{this.props.navigation.navigate('Setting')}} style={styles.itemText}>设置</Text>
                  </View>
              </View>
          </View>
          </View>
          {
            this.state.login?<View style={styles.exitWrap} >
            <Button style={styles.exit} onPress={()=>{this.handleEXIT()}} textStyle={styles.exitText}>退出登录</Button>
          </View>:null
          }
          
          {
            !this.state.login?<TouchableHighlight style={styles.unLoginWrap} underlayColor='transparent' onPress={()=>{this.props.navigation.navigate('Login',{preScreen:'Mine'})}}><View style={styles.unLoginWrap}></View></TouchableHighlight>:null
          }
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

