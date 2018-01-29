import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper';

//

import styles from './styles.js';
import {TopHeader, SwitchBar} from '../../components/homeComponents/index.js'


class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
   componentWillMount() {
     console.log(this)
   }
  render() {
    return (
      <View style={styles.container}>
          <TopHeader />
          <SwitchBar navigation={this.props.navigation} />
          <ScrollView>
            <Swiper style={styles.banner}>
              <View style={styles.slide1}>
                  <Text style={styles.text}>welcome</Text>
              </View>
              <View style={styles.slide2}>
                  <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                  <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          </ScrollView>
          <View>
            
          </View>

      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}


export default Main



