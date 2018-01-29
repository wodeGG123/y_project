import {StackNavigator} from 'react-navigation';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
//---

import Login,{Regist, Forget} from '../pages/member/index.js';


const styles = StyleSheet.create({
	headerLeftView:{
		width:30,
		height:30,
		justifyContent: 'center',
		alignItems: 'center',
	},
})


 
//router
const Member = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
    },
  },
  Regist:{
  	screen: Regist,
    navigationOptions: {

    },
  },
  Forget:{
  	screen: Forget,
    navigationOptions: {

    },
  }
},{
    headerMode: 'none',
});




export default Member