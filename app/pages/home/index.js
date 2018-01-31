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
import {TopHeader, SwitchBar, Title, CourseBlock} from '../../components/homeComponents/index.js'
import {UDBlock, LRBlock} from '../../components/common/block/index.js'


class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          data1:[{}]
      };
   }  
   componentWillMount() {
     console.log(this)
   }
  render() {
    return (
      <View style={styles.container}>
          <TopHeader navigation={this.props.navigation} />
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
              <View style={styles.block} >
                 <Title text='新课首发' url='Course' navigation={this.props.navigation} />
                 <ScrollView horizontal={true} contentContainerStyle={styles.firstPbWrap}>
                   <CourseBlock /><CourseBlock /><CourseBlock /><CourseBlock />
                 </ScrollView>   
              </View>
               <View style={styles.blockHR} ></View>
               <View style={styles.block} >
                  <Title text='新课推荐' url='Course' navigation={this.props.navigation} />
                  <UDBlock style={styles.recommendWrap} />
               </View>
              <View style={styles.blockHR} ></View>
               <View style={styles.block} >
                  <Title text='行业资讯' url='Course' navigation={this.props.navigation} />
                  <LRBlock style={styles.recommendWrap} />
               </View>
          </ScrollView>
        

      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}


export default Main



