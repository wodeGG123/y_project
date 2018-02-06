import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import Button from 'apsl-react-native-button'
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
const deviceWidth = Dimensions.get('window').width;  
import MemberReq from '../../request/member.js';
import {THeader} from '../../components/common/header/index.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          username:'',
          password:''
      };
   }  
  handleSubmit(){    

    
   

    MemberReq.Login({
      username:this.state.username,
      password:this.state.password
    })
    .then((data)=>{console.log(data)})
  }
   handleSubmit2(){    
    let _Token = '74b2VVJWBQQHAlYABQcDVgUGW1ZXAgRdVFIHVwxSAFBRAA'
    MemberReq.LoginOut(_Token)
    .then((data)=>{console.log(data)})
  }
  render() {
    
    return (
      <View style={styles.container}>

          <Image
            resizeMode='cover'
            style={styles.background}
            source={require('./img/login_back.jpg')}
           />
           <THeader title='登录' />
          <View style={styles.memberBlock}>
              <View style={styles.memberInputBlock}>                
                <View style={styles.memberInputWrap}>
                  <TextInput 
                    autoCapitalize='none'
                    keyboardType='numeric'
                    placeholderTextColor='rgba(255,255,255,0.6)'
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={11}
                    placeholder='手机号'
                    value={this.state.username}
                    onChangeText={(text)=>{this.setState({username:text})}} 
                  />  
                </View>
                
              </View>
              <View style={styles.memberInputBlock}>
                 <View style={styles.memberInputWrap}>
                  <TextInput 
                    autoCapitalize='none'
                    placeholderTextColor='rgba(255,255,255,0.6)'
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={16}
                    placeholder='密码' 
                    value={this.state.password}
                    onChangeText={(text)=>{this.setState({password:text})}} 
                    secureTextEntry={true}
                  />  
                 </View>
                 
              </View>
              <View style={styles.memberButtonWrap}>
                <Button onPress={()=>{this.handleSubmit()}} style={styles.memberButton} textStyle={styles.memberButtonText}>
                  登录
                </Button>
                 <Button onPress={()=>{this.handleSubmit2()}} style={styles.memberButton} textStyle={styles.memberButtonText}>
                  登出
                </Button>
              </View>
              <View style={styles.memberAlertTextBlock}>
                <View style={styles.memberAlertTextWrap}>
                  <Text onPress={()=>{this.props.navigation.navigate('Forget')}} style={styles.memberAlertText}>忘记密码？</Text>
                </View>
                <View style={styles.memberAlertTextWrap}>
                  <Text style={styles.memberAlertText} onPress={()=>{this.props.navigation.navigate('Regist')}} >没有账号，立即注册</Text>
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

class Regist extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
  handleSubmit(){
    MemberReq.Regist().then((data)=>{console.log(data)})
  }
  render() {
    
    return (
      <View style={styles.container}>
       <Image
            resizeMode='cover'
            style={styles.background}
            source={require('./img/login_back.jpg')}
           />         
           <THeader left={true} title='注册' />
          <View style={styles.memberBlock}>
              <View style={{height:44}}></View>
              <View style={styles.memberInputBlock}>
                
                <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                      placeholderTextColor='rgba(255,255,255,0.6)'
                    maxLength={11}
                    placeholder='手机号' 
                  />  
                </View>
                
              </View>

              <View style={styles.memberInputBlock2}>
                 
                 <View style={styles.memberInputWrap2}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                      placeholderTextColor='rgba(255,255,255,0.6)'
                    maxLength={16}
                    placeholder='验证码' 
                  />  
                 </View>
                 <View style={styles.memberSendCode}>
                      <Text  style={styles.memberSendCodeText}>
                        发送验证码
                      </Text>
                    </View> 
              </View>

              <View style={styles.memberInputBlock}>
                 
                 <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                      placeholderTextColor='rgba(255,255,255,0.6)'
                    maxLength={16}
                    placeholder='密码' 
                  />  
                 </View>
                 
              </View>

              <View style={styles.memberInputBlock}>
                 
                 <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                      placeholderTextColor='rgba(255,255,255,0.6)'
                    maxLength={16}
                    placeholder='代理商码，通过代理的学员请必填' 
                  />  
                 </View>
                 
              </View>
              <View style={styles.memberButtonWrap}>
                <Button onPress={()=>{this.handleSubmit()}} style={styles.memberButton} textStyle={styles.memberButtonText}>
                  注册
                </Button>
              </View>
          </View>
      </View>
    );
  }
}
Regist.contextTypes = {
  store: React.PropTypes.object
}

class Forget extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (<View style={styles.container}>

            <Image
            resizeMode='cover'
            style={styles.background}
            source={require('./img/login_back.jpg')}
           />
           <THeader left={true} title='找回密码' />
            <View style={styles.memberBlock}>
                <View style={{height:44}}></View>
                <View style={styles.memberInputBlock}>
                    <View style={styles.memberInputWrap}>
                        <TextInput
                          autoCapitalize='none'
                          placeholderTextColor='rgba(255,255,255,0.6)'
                          editable={true} 
                          style={styles.memberInput} 
                          maxLength={11}
                          placeholder='手机号'
                        />
                    </View>

                </View>
                <View style={styles.memberInputBlock2}>
                    <View style={styles.memberInputWrap2}>
                        <TextInput
                            autoCapitalize='none'
                            placeholderTextColor='rgba(255,255,255,0.6)'
                            editable={true} 
                            style={styles.memberInput2} 
                            maxLength={11}
                            placeholder='验证码'
                        />
                    </View>
                    <View style={styles.memberSendCode}>
                      <Text  style={styles.memberSendCodeText}>
                        发送验证码
                      </Text>
                    </View>                   
                </View>
                <View style={styles.memberInputBlock}>
                    <View style={styles.memberInputWrap}>
                        <TextInput
                            autoCapitalize='none'
                            placeholderTextColor='rgba(255,255,255,0.6)'
                            editable={true} 
                            style={styles.memberInput} 
                            maxLength={16}
                            placeholder='填写新密码' 
                            secureTextEntry={true}
                        />
                    </View>

                </View>
                <View style={styles.memberButtonWrap}>
                    <Button style={styles.memberButton} textStyle={styles.memberButtonText}>
                        提交
                    </Button>
                </View>                
            </View>
        </View>
    );
  }
}
Forget.contextTypes = {
  store: React.PropTypes.object
}
export {Regist, Forget}


