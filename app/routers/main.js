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
import Course from '../pages/course/index.js'
import ShoppingCar from '../pages/shoppingCar/index.js'
import Mine from '../pages/mine/index.js'


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




//routers
const Main = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
          tabBarVisible:true,
          tabBarLabel:'首页',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='md-home' /></View>)}
        }
    },
    News: {
        screen: News,
        navigationOptions:{
            tabBarVisible:true,
            tabBarLabel:'资讯',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='md-cafe' /></View>)}
        }
    },
    Course: {
        screen: Course,
        navigationOptions:{
            tabBarVisible:true,
            tabBarLabel:'课程',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='md-bookmarks' /></View>)}
        }
    },
    ShoppingCar: {
        screen: ShoppingCar,
        navigationOptions:{
            tabBarVisible:true,
            tabBarLabel:'购物车',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='md-cart' /></View>)}
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions:{
            tabBarVisible:true,
            tabBarLabel:'我的',
            tabBarIcon:(param)=>{return(<View style={styles.tabBarIcon}><Icon style={{color:param.tintColor}} size={24} name='md-person' /></View>)}
        }
    },

}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: Theme.color,
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