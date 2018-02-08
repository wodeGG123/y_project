import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/common/header/index.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          userInfo : store.getState().userInfo.userinfo
      };
   }  
  render() {
    let userInfo = this.state.userInfo;
    return (
      <View style={styles.container}>
          <Header left={true} navigation={this.props.navigation} title='个人资料' />
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
                          <Text style={styles.itemMidText}>{userInfo.nickname||userInfo.mobile}</Text>
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
                          <Text style={styles.itemMidText}>{userInfo.mobile}</Text>
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
                          <Text style={styles.itemMidText}>{userInfo.email}</Text>
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
                          <Text style={styles.itemMidText}>{userInfo.address}</Text>
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
                          <Text style={styles.itemMidText}>{userInfo.postcode}</Text>
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


class EditModal extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return ( <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
          >

          </Modal>)
  }
}

