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
          <Header left={true} title='个人资料' />
          <View style={styles.itemsWrap}>
              <View style={styles.itemWrap}>
                  <View style={styles.item}>
                      <View style={styles.itemLeft}>
                          <Text style={styles.itemLeftText}>头像</Text>
                      </View>
                      <View style={styles.itemMid}>
                          <Text style={styles.itemMidText2}>点击选择相册或拍照</Text>
                      </View>
                      <View style={styles.itemRight}>
                          <Icon name='ios-arrow-forward' size={24} color='#c3c3c3' style={styles.itemRightIcon} />
                      </View>

                  </View>
                  <View style={styles.item}>
                      <View style={styles.itemLeft}>
                          <Text style={styles.itemLeftText}>昵称</Text>
                      </View>
                      <View style={styles.itemMid}>
                          <Text style={styles.itemMidText}>DUAN</Text>
                      </View>
                      <View style={styles.itemRight}>
                          <Icon name='ios-arrow-forward' size={24} color='#c3c3c3' style={styles.itemRightIcon} />
                      </View>

                  </View>
                  <View style={styles.item}>
                      <View style={styles.itemLeft}>
                          <Text style={styles.itemLeftText}>手机号</Text>
                      </View>
                      <View style={styles.itemMid}>
                          <Text style={styles.itemMidText}>17000000001</Text>
                      </View>
                      <View style={styles.itemRight}>
                          <Icon name='ios-arrow-forward' size={24} color='#c3c3c3' style={styles.itemRightIcon} />
                      </View>

                  </View>
                  <View style={styles.item}>
                      <View style={styles.itemLeft}>
                          <Text style={styles.itemLeftText}>邮箱</Text>
                      </View>
                      <View style={styles.itemMid}>
                          <Text style={styles.itemMidText}>123456@qq.com</Text>
                      </View>
                      <View style={styles.itemRight}>
                          <Icon name='ios-arrow-forward' size={24} color='#c3c3c3' style={styles.itemRightIcon} />
                      </View>

                  </View>
                  <View style={styles.item}>
                      <View style={styles.itemLeft}>
                          <Text style={styles.itemLeftText}>地址</Text>
                      </View>
                      <View style={styles.itemMid}>
                          <Text style={styles.itemMidText}></Text>
                      </View>
                      <View style={styles.itemRight}>
                          <Icon name='ios-arrow-forward' size={24} color='#c3c3c3' style={styles.itemRightIcon} />
                      </View>

                  </View>
                  <View style={styles.item}>
                      <View style={styles.itemLeft}>
                          <Text style={styles.itemLeftText}>邮编</Text>
                      </View>
                      <View style={styles.itemMid}>
                          <Text style={styles.itemMidText}></Text>
                      </View>
                      <View style={styles.itemRight}>
                          <Icon name='ios-arrow-forward' size={24} color='#c3c3c3' style={styles.itemRightIcon} />
                      </View>

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

