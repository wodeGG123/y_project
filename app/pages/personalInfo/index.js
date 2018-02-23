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
import {EditModal} from '../../components/common/modal/index.js'
import Member from '../../request/member.js'

var _ = require('lodash');

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          userInfo : store.getState().userInfo.userinfo,
          accessToken: store.getState().userInfo.accessToken,
          modal:{
              visible:false,
              title:'',
              data:{},
              rightFN:(data)=>{this.saveItem(data)},
              leftFN:()=>{this.closeEdit()},
          }
      };
   }
   editItem(param,param2){
       let modal  = _.cloneDeep(this.state.modal);
       modal.visible = true;
       modal.title = param.title;
       modal.data = param2;
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
   saveItem(data){
       let modal  = _.cloneDeep(this.state.modal);
       //未知键值对赋值
       modal.data[Object.keys(modal.data)[0]] = data;
       let _data = {
           id:this.state.userInfo.id,
           Member: modal.data,
           accessToken: this.state.accessToken
       }
       //关闭modal编辑框
       modal.visible = false;
       this.setState({
           modal
       })
       //请求服务器数据修改
       Member.edit(_data)
       .then((data)=>{
           if(data){
              this.setState({
                  userInfo:store.getState().userInfo.userinfo
              })
           }
       })
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
                          <Text style={styles.itemLeftText}>手机号</Text>
                      </View>
                      <View style={styles.itemMid}>
                          <Text style={styles.itemMidText}>{userInfo.mobile}</Text>
                      </View>
                      <View style={styles.itemRight}>

                      </View>

                  </View>
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
                          <Text onPress={()=>{this.editItem({title:'昵称'},{nickname:userInfo.nickname})}} style={styles.itemMidText}>{userInfo.nickname||userInfo.mobile}</Text>
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
                          <Text onPress={()=>{this.editItem({title:'邮箱'},{email:userInfo.email})}} style={styles.itemMidText}>{userInfo.email}</Text>
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
                          <Text onPress={()=>{this.editItem({title:'地址'},{address:userInfo.address})}} style={styles.itemMidText}>{userInfo.address}</Text>
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
                          <Text onPress={()=>{this.editItem({title:'邮编'},{postcode:userInfo.postcode})}} style={styles.itemMidText}>{userInfo.postcode}</Text>
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



