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
import Header,{MHeader} from '../../components/common/header/index.js'
import {EditModal} from '../../components/common/modal/index.js'

var _ = require('lodash');

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          userInfo : store.getState().userInfo.userinfo,
          modal:{
              visible:false,
              title:'',
              name:'',
              rightFN:()=>{this.saveItem()},
              leftFN:()=>{this.closeEdit()},
          }
      };
   }
   editItem(param){
       let modal  = _.cloneDeep(this.state.modal);
       modal.visible = true;
       modal.title = param.title;
       modal.name = param.name;
        this.setState({
            modal
        })
   }
   closeEdit(){
       let modal  = _.cloneDeep(this.state.modal);
       modal.visible = false;
       this.setState({
           modal
       })
   }
   saveItem(){
       let modal  = _.cloneDeep(this.state.modal);



       modal.visible = false;
       this.setState({
           modal
       })
   }
   componentDidUpdate(){
       console.log(this.state)
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
                          <Text onPress={()=>{this.editItem({title:'昵称',name:'nickname'})}} style={styles.itemMidText}>{userInfo.nickname||userInfo.mobile}</Text>
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
          <EditModal {...this.state.modal} />

      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}



