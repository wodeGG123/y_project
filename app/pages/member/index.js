import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button'
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
const deviceWidth = Dimensions.get('window').width;  
export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>
          <View style={styles.loginLogo}>
            <Text>login logo</Text>
          </View>
          <View style={styles.memberBlock}>
              <View style={styles.memberInputBlock}>
                <View style={styles.memberIconWrap} >
                  <Icon  style={styles.memberIcon} size={24} name='md-person' />  
                </View>
                <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={11}
                    placeholder='手机号' 
                  />  
                </View>
                
              </View>
              <View style={{width:deviceWidth-40,borderBottomColor: '#eee',borderBottomWidth: 1}}></View>
              <View style={styles.memberInputBlock}>
                 <View style={styles.memberIconWrap}>
                  <Icon style={styles.memberIcon} size={24} name='md-unlock' />
                 </View>
                 <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={16}
                    placeholder='密码' 
                  />  
                 </View>
                 
              </View>
              <View style={styles.memberButtonWrap}>
                <Button style={styles.memberButton} textStyle={styles.memberButtonText}>
                  登录
                </Button>
              </View>
              <View style={styles.memberAlertTextBlock}>
                <View style={styles.memberAlertTextWrap}>
                  <Text onPress={()=>{this.props.navigation.navigate('Forget')}} style={styles.memberAlertText}>忘记密码？</Text>
                </View>
                <View style={styles.memberAlertTextWrap}>
                  <Text style={styles.memberAlertText}>没有账号，</Text>
                  <Text onPress={()=>{this.props.navigation.navigate('Regist')}} style={{color:'#3385ff',fontSize: 12}}>立即注册</Text>
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

  render() {
    
    return (
      <View style={styles.container}>          
          <View style={styles.memberBlock}>
              <View style={{height:44}}></View>
              <View style={styles.memberInputBlock}>
                <View style={styles.memberIconWrap} >
                  <Icon  style={styles.memberIcon} size={24} name='md-person' />  
                </View>
                <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={11}
                    placeholder='手机号' 
                  />  
                </View>
                
              </View>
              <View style={{width:deviceWidth-40,borderBottomColor: '#eee',borderBottomWidth: 1}}></View>
              <View style={styles.memberInputBlock}>
                 <View style={styles.memberIconWrap}>
                  <Icon style={styles.memberIcon} size={24} name='md-code' />
                 </View>
                 <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={16}
                    placeholder='验证码' 
                  />  
                 </View>
                 <Button style={styles.memberSendCode} textStyle={styles.memberSendCodeText}>
                  发送验证码
                </Button>
              </View>
              <View style={{width:deviceWidth-40,borderBottomColor: '#eee',borderBottomWidth: 1}}></View>
              <View style={styles.memberInputBlock}>
                 <View style={styles.memberIconWrap}>
                  <Icon style={styles.memberIcon} size={24} name='md-unlock' />
                 </View>
                 <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={16}
                    placeholder='密码' 
                  />  
                 </View>
                 
              </View>
              <View style={{width:deviceWidth-40,borderBottomColor: '#eee',borderBottomWidth: 1}}></View>
              <View style={styles.memberInputBlock}>
                 <View style={styles.memberIconWrap}>
                  <Icon style={styles.memberIcon} size={24} name='ios-people' />
                 </View>
                 <View style={styles.memberInputWrap}>
                  <TextInput 
                    editable={true} 
                    style={styles.memberInput} 
                    maxLength={16}
                    placeholder='代理商码，通过代理的学员请必填' 
                  />  
                 </View>
                 
              </View>
              <View style={styles.memberButtonWrap}>
                <Button style={styles.memberButton} textStyle={styles.memberButtonText}>
                  注册
                </Button>
              </View>
              <View style={styles.memberAlertTextBlock}>
                <View style={styles.memberAlertTextWrap}>
                  <Text style={styles.memberAlertText}>已有账号，立即</Text>
                  <Text onPress={()=>{this.props.navigation.navigate('Login')}} style={{color:'#3385ff',fontSize: 12}}>登录</Text>
                </View>
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
            <View style={styles.memberBlock}>
                <View style={{height:44}}></View>
                <View style={styles.memberInputBlock}>
                    <View style={styles.memberIconWrap} >
                        <Icon  style={styles.memberIcon} size={24} name='md-person' />
                    </View>
                    <View style={styles.memberInputWrap}>
                        <TextInput
                            editable={true}
                            style={styles.memberInput}
                            maxLength={11}
                            placeholder='手机号'
                        />
                    </View>

                </View>
                <View style={{width:deviceWidth-40,borderBottomColor: '#eee',borderBottomWidth: 1}}></View>
                <View style={styles.memberInputBlock}>
                    <View style={styles.memberIconWrap}>
                        <Icon style={styles.memberIcon} size={24} name='md-code' />
                    </View>
                    <View style={styles.memberInputWrap}>
                        <TextInput
                            editable={true}
                            style={styles.memberInput}
                            maxLength={16}
                            placeholder='验证码'
                        />
                    </View>
                    <Button style={styles.memberSendCode} textStyle={styles.memberSendCodeText}>
                        发送验证码
                    </Button>
                </View>
                <View style={{width:deviceWidth-40,borderBottomColor: '#eee',borderBottomWidth: 1}}></View>
                <View style={styles.memberInputBlock}>
                    <View style={styles.memberIconWrap}>
                        <Icon style={styles.memberIcon} size={24} name='md-unlock' />
                    </View>
                    <View style={styles.memberInputWrap}>
                        <TextInput
                            editable={true}
                            style={styles.memberInput}
                            maxLength={16}
                            placeholder='填写新密码'
                        />
                    </View>

                </View>
                <View style={styles.memberButtonWrap}>
                    <Button style={styles.memberButton} textStyle={styles.memberButtonText}>
                        提交
                    </Button>
                </View>
                <View style={styles.memberAlertTextBlock}>
                    <View style={styles.memberAlertTextWrap}>
                        <Text style={styles.memberAlertText}>已有账号，立即</Text>
                        <Text onPress={()=>{this.props.navigation.navigate('Login')}} style={{color:'#3385ff',fontSize: 12}}>登录</Text>
                    </View>
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


