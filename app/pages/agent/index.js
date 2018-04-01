import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
  Text,
  WebView,
  View,
  Clipboard,
} from 'react-native';
import QRCode from 'react-native-qrcode';
import Button from 'apsl-react-native-button'
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/common/header/index.js'
export default class Main extends Component {
   constructor(props){
      super(props);
      let id = store.getState().userInfo.userinfo.id;
      this.state = {
        text:'https://github.com/cssivision/react-native-qrcode',
        id
      };
   }  
   handleCopy(){
    Clipboard.setString(this.state.text);
  }
  render() {
    
    return (
      <View style={styles.container}>
            <Header left={true} navigation={this.props.navigation} title='分享代理链接' />
            <ScrollView contentContainerStyle={styles.scrollViewWrap}>
               <View style={styles.textWrap}>
                 <Text style={styles.text}>
                   我的代理编号：
                 </Text>  
                 <Text style={styles.textDec}>{this.state.id}</Text>               
               </View>
                <View style={styles.textWrap}>
                  <Text style={styles.text}>
                    链接地址：{this.state.text}
                  </Text>
                  <Button onPress={()=>{this.handleCopy()}} style={styles.copyButton} textStyle={styles.copyButtonText}>
                    复制
                  </Button>

                </View>
                <View style={styles.imgWrap}>
                <QRCode
                  value={this.state.text}
                  size={200}
                  bgColor='black'
                  fgColor='white'/>
                </View>
                <View style={styles.textWrap2}>
                  <Text style={styles.text2}>代理商下所有的学员，请使用此链接进行注册，在注册页面代理商链接中请填的代理商编号。</Text>
                </View>
            </ScrollView>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

