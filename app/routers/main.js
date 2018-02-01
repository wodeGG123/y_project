import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
//---
import Theme from '../theme.js'


import HomeIndex from '../pages/home/index.js';
import News from '../pages/news/index.js'
import CourseIndex from '../pages/course/index.js'
import CourseSearch from '../pages/search/index.js'
import ShoppingCar from '../pages/shoppingCar/index.js'
import MineIndex from '../pages/mine/index.js'
import MineOrder from '../pages/order/index.js'
import LatestStudy from '../pages/latestStudy/index.js'


//router
const Home = StackNavigator({
    HomeIndex : {
        screen: HomeIndex,
        navigationOptions: {
            header:null
        },
    }

},{
    headerMode: 'screen',
})

//router
const Course = StackNavigator({
    CourseIndex : {
        screen: CourseIndex,
        navigationOptions: {
            header:null
        },
    },
    CourseSearch : {
        screen: CourseSearch,
        navigationOptions: {
            header:null
        },
    },

},{
    headerMode: 'screen',

})


//router
const Mine = StackNavigator({
    MineIndex : {
        screen: MineIndex,
        navigationOptions: {
            header:null
        },
    },
    MineOrder : {
        screen: MineOrder,
        navigationOptions: {
            header:null
        },
    },
    LatestStudy : {
        screen: LatestStudy,
        navigationOptions: {
            header:null
        },
    },

},{
    headerMode: 'screen',

})

//routers
const Main = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
          tabBarVisible:true,
          tabBarLabel:'首页',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='ios-home' /></View>)}
        }
    },
    News: {
        screen: News,
        navigationOptions:{
            tabBarVisible:true,
            tabBarLabel:'资讯',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='ios-information-circle-outline' /></View>)}
        }
    },
    Course: {
        screen: Course,
        navigationOptions:(navigator)=>({
            tabBarVisible:true,
            tabBarLabel:'课程',
            tabBarOnPress:(obj)=>{navigator.navigation.navigate('CourseIndex')},
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='ios-bookmarks-outline' /></View>)}
        })
    },
    ShoppingCar: {
        screen: ShoppingCar,
        navigationOptions:{
            tabBarVisible:true,
            tabBarLabel:'购物车',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='ios-cart-outline' /></View>)}
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions:(navigator)=>({
            tabBarVisible:true,
            tabBarLabel:'我的',
            tabBarOnPress:(obj)=>{navigator.navigation.navigate('MineIndex')},
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='ios-contact-outline' /></View>)}
        })
    },

}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: Theme.color,
        style: {
            backgroundColor: '#ffffff',
            borderTopColor:'#eeeeee',
            borderTopWidth:1,
          },
    },
});

const styles = StyleSheet.create({
    tabBarIcon:{
        display:'flex',
        width:44,
        height:44,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Main