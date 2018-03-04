import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
    TouchableHighlight
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import API from '../../request/api.js'
import {Action_setTempData} from '../../actions/common.js'

class TopHeader extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
    handlePress(){
       this.props.navigation.navigate(
           'CourseSearch',
           {
               preScreen:this.props.navigation.state.routeName
           }
       )
    }
  render() {
    
    return (<View style={styles.top}> 
            <View style={styles.topSearch}>
              <Icon style={styles.topSearchIcon} size={20} color='#aaaaaa' name='ios-search' />
              <Text onPress={()=>{this.handlePress()}} style={styles.topSearchText}>搜索课程</Text>
            </View>
            <View style={styles.topRight}>
              <Icon size={22} color='#dddddd' name='md-notifications' />
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
        items:[]
    }
    static propTypes = {
      items:React.PropTypes.array
    }
    constructor(props){
        super(props);
        this.state = {
        };
    }
    handlePress(id){
        this.props.navigation.navigate('CourseIndex',{id})
    }
    render() {
        return (<View style={styles.switchBar}>
            <ScrollView horizontal={true} contentContainerStyle={styles.switchBarScroll}>
            <View style={[styles.switchBarTextView,styles.switchBarTextViewAct]}><Text style={[styles.switchBarText,styles.switchBarTextAct]}>首页</Text></View>
              {this.props.items&&this.props.items.map((obj,index)=>{
                  return (<View key={index} style={styles.switchBarTextView}><Text onPress={()=>{this.handlePress(obj.course_config_id)}} style={styles.switchBarText}>{obj.name}</Text></View>)
              })}
            </ScrollView>
        </View>);
    }
}
SwitchBar.contextTypes = {
    store: React.PropTypes.object
}


class Title extends Component {
  static defaultProps={
    text:'标题',
    url:'Main'
  }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
  more(){
    this.props.navigation.navigate(this.props.url);
  }
  render() {
    return (<View style={styles.titleWrap}>
      <View style={styles.titleLeft}><Text style={styles.titleLeftText}>{this.props.text}</Text></View>
      <View style={styles.titleRight}><Text onPress={()=>{this.more()}} style={styles.titleRightText}>查看全部></Text></View>
    </View>);
  }
}
Title.contextTypes = {
  store: React.PropTypes.object
}


class CourseBlock extends Component {
  static defaultProps={
    data:{
        goods_thumb:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
        goods_name:'高考标准化考试',
        url:'',
    }
     
  }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }
   handleClick(){

       var action = Action_setTempData(this.props.data)
       store.dispatch(action)
       this.props.navigation.navigate('CourseInfo')
   }
  render() {
    
    return (<TouchableHighlight underlayColor="transparent" onPress={()=>{this.handleClick()}}><View style={styles.courseBlockWrap}>
            <Image
              style={styles.courseBlockImage}
              source={{uri: API.DOMAIN+this.props.data.goods_thumb}}
            />
            <View style={styles.courseBlockTextWrap}>
              <Text numberOfLines={1} style={styles.courseBlockText}>{this.props.data.goods_name}</Text>
            </View>
          </View>
        </TouchableHighlight>);
  }
}
CourseBlock.contextTypes = {
  store: React.PropTypes.object
}

export {TopHeader, SwitchBar, Title, CourseBlock}