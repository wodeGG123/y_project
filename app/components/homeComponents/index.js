import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

class TopHeader extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
    return (<View style={styles.top}> 
            <View style={styles.topSearch}>
              <Text>搜索课程</Text>
              <Icon style={styles.topSearchIcon} size={20} name='ios-search' />
            </View>
            <View style={styles.topRight}>
              <Icon name='md-notifications-outline' size={16} />
              <Text style={styles.topRightText}>消息</Text>
              <View style={styles.topRightRound}></View>
            </View>
          </View>
    );
  }
}
TopHeader.contextTypes = {
  store: React.PropTypes.object
}

class SwitchBar extends Component{
    static defaultProps = {
        items:[{
            title:'推荐',
            act:true,
        },
        {
            title:'GMAT',
            act:false
        },
        {
            title:'高考冲刺',
            act:false
        },
        {
            title:'TOFEL',
            act:false
        },
        {
            title:'家庭教育',
            act:false
        }
        ]
    }
    constructor(props){
        super(props);
        this.state = {

        };
    }
    handlePress(index){
        console.log(this)
        this.props.navigation.navigate('Course')
    }
    render() {

        return (<View style={styles.switchBar}>
            {this.props.items.map((obj,index)=>{
                return (<View key={index}  style={[styles.switchBarTextView,obj.act?styles.switchBarTextViewAct:{}]}><Text onPress={()=>{this.handlePress(index)}} style={[styles.switchBarText,obj.act?styles.switchBarTextAct:{}]}>{obj.title}</Text></View>)
            })}
        </View>);
    }
}
SwitchBar.contextTypes = {
    store: React.PropTypes.object
}
export {TopHeader, SwitchBar}