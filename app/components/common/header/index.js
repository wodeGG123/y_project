import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Main extends Component {
    static defaultProps = {
        title:'标题',
    }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
  handleLeftButton(){
    console.log(this.props.navigation)
    this.props.navigation.state.params
    ?
    this.props.navigation.navigate(this.props.navigation.state.params.preScreen)
    :
    this.props.navigation.goBack()
  }
  render() {
    
    return (
      <View style={styles.container}>

          <View style={styles.left}>
          {
              this.props.left? <TouchableHighlight underlayColor='transparent' onPress={()=>{this.handleLeftButton()}}><Icon style={styles.icon} size={24} color="#666666" name='ios-arrow-back' /></TouchableHighlight>:null
          }
          </View>

          <View style={styles.mid}>
              <Text style={styles.title}>{this.props.title}</Text>
          </View>

          <View style={styles.right}>
              {this.props.right?<Icon style={styles.icon} size={24} color="#666666" name='ios-arrow-forward' />:null}
          </View>


      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

//透明头部
class THeader extends Component {
    static defaultProps = {
        title:'标题'
    }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
  handleLeftButton(){
    console.log(this.props.navigation)
    this.props.navigation.state.params
    ?
    this.props.navigation.navigate(this.props.navigation.state.params.preScreen)
    :
    this.props.navigation.goBack()
  }
  render() {
    
    return (
      <View style={styles.tContainer}>

          <View style={styles.left}>
          {
              this.props.left? <TouchableHighlight underlayColor='transparent' onPress={()=>{this.handleLeftButton()}}><Icon style={styles.icon} size={24} color='rgba(255,255,255,0.6)' name='ios-arrow-back' /></TouchableHighlight>:null
          }
          </View>

          <View style={styles.mid}>
              <Text style={styles.tTitle}>{this.props.title}</Text>
          </View>

          <View style={styles.right}>
              {this.props.right?<Icon style={styles.icon} size={24} color='rgba(255,255,255,0.6)' name='ios-arrow-forward' />:null}
          </View>


      </View>
    );
  }
}
THeader.contextTypes = {
  store: React.PropTypes.object
}

//弹窗头部
class MHeader extends Component {
    static defaultProps = {
        title:'标题',
    }
    constructor(props){
        super(props);
        this.state = {

        };
    }
    handleLeftButton(){
        this.props.leftPress()
    }
    handleRightButton(){
        this.props.rightPress()
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.left}>
                    {
                        this.props.left? <TouchableHighlight underlayColor='transparent' onPress={()=>{this.handleLeftButton()}}><Icon style={styles.icon} size={24} color="#666666" name='md-close' /></TouchableHighlight>:null
                    }
                </View>

                <View style={styles.mid}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>

                <View style={styles.right}>
                    {this.props.right?<Text style={styles.mHeaderRightText} onPress={()=>{this.handleRightButton()}}>保存</Text>:null}
                </View>


            </View>
        );
    }
}
MHeader.contextTypes = {
    store: React.PropTypes.object
}



export {THeader, MHeader}

