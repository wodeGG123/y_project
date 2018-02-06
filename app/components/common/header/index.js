import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Main extends Component {
    static defaultProps = {
        title:'标题'
    }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.container}>

          <View style={styles.left}>
          {
              this.props.left? <Icon style={styles.icon} size={24} color="#666666" name='ios-arrow-back' />:null
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


class THeader extends Component {
    static defaultProps = {
        title:'标题'
    }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (
      <View style={styles.tContainer}>

          <View style={styles.left}>
          {
              this.props.left? <Icon style={styles.icon} size={24} color='rgba(255,255,255,0.6)' name='ios-arrow-back' />:null
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
export {THeader}

