import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/common/header/index.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    return (
      <View style={styles.container}>
          <Header left={true} navigation={this.props.navigation} title='设置' />
          <View style={styles.itemsWrap}>
              <View style={styles.itemWrap}>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-contact-outline'/>
                      <Text onPress={()=>{this.props.navigation.navigate('PersonalInfo')}} style={styles.itemText}>个人资料</Text>
                  </View>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-settings-outline'/>
                      <Text onPress={()=>{this.props.navigation.navigate('ResetPassword')}}  style={styles.itemText}>修改密码</Text>
                  </View>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-notifications-outline'/>
                      <Text style={styles.itemText}>消息提示</Text>
                  </View>
              </View>
          </View>
          <View style={styles.itemsWrap}>
              <View style={styles.itemWrap}>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-undo-outline'/>
                      <Text style={styles.itemText}>引导页</Text>
                  </View>
                  <View style={styles.item}>
                      <Icon style={styles.itemIcon} color="#333333" size={24} name='ios-link-outline'/>
                      <Text style={styles.itemText}>关于</Text>
                  </View>
              </View>
          </View>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

