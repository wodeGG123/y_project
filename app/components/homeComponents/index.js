import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

class TopHeader extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (<View style={styles.top}> 
            <View style={styles.topSearch}>
              <Text>搜索课程</Text>
              <Icon style={styles.topSearchIcon} size={20} name='ios-search' />
            </View>
            <View style={styles.topRight}>
              <Icon name='md-notifications-outline' size={16} />
              <Text style={styles.topRightText}>消息</Text>
              <View style={styles.topRightRound}></View>
            </View>
          </View>
    );
  }
}
TopHeader.contextTypes = {
  store: React.PropTypes.object
}

export {TopHeader} 