import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';

import {Action_setUserInfo} from '../../actions/member.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
  componentWillMount() {

   
    //添加获取不到值的方法
    // storage.sync = Object.assign(storage.sync,{userInfo(){
    //   storage.save({
    //         key: 'userInfo',
    //         data: false
    //       });
    //  }})
    storage.sync = {userInfo(){
      storage.save({
            key: 'userInfo',
            data: false
          });
     }}
     //入口获取userinfo,赋值给store
    storage.load({
      key: 'userInfo',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
      },
    })
    .then((data)=>{
      if(data){
          let action = Action_setUserInfo(data);          
          store.dispatch(action);
      }
    })
    .catch((err)=>{})


  }
  render() {
    
    return (
      <View style={styles.container}>
          <Text onPress={()=>{this.props.navigation.navigate('Home')}}>welcome</Text>
      </View>
    );
  }
}


