import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper';
import {TopHeader} from '../../components/homeComponents/index.js'
import {TabNavigator} from 'react-navigation'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
  render() {
    return (
      <View style={styles.container}>
          <TopHeader />
          <ScrollView>
            <Swiper style={styles.banner}>
              <View style={styles.slide1}>
                  <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                  <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                  <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          </ScrollView>

      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

const MyTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: '识兔',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={{uri : '识兔'}}
                    style={[tabBarIcon, {tintColor: tintColor}]}
                />
            ),
        },
    },

    }

    {
    tabBarPosition: 'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    tabBarOptions: {
        style: {
            height:49
        },
        activeBackgroundColor:'white',
        activeTintColor:'#4ECBFC',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        showLabel:false,
    }
});


