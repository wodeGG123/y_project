import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

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
        this.props.navigation.navigate('Course')
    }
    render() {

        return (<View style={styles.switchBar}>
            <ScrollView horizontal={true} contentContainerStyle={styles.switchBarScroll}>
              {this.props.items.map((obj,index)=>{
                  return (<View key={index} style={[styles.switchBarTextView,obj.act?styles.switchBarTextViewAct:{}]}><Text onPress={()=>{this.handlePress(index)}} style={[styles.switchBarText,obj.act?styles.switchBarTextAct:{}]}>{obj.title}</Text></View>)
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
      img:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
      text:'高考标准化考试',
      url:'',
    }
     
  }
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  
  render() {
    
    return (<View style={styles.courseBlockWrap}>
        <Image 
          style={styles.courseBlockImage}
          source={{uri: this.props.data.img}}
        />
        <View style={styles.courseBlockTextWrap}>
          <Text style={styles.courseBlockText}>{this.props.data.text}</Text>
        </View>
      </View>);
  }
}
CourseBlock.contextTypes = {
  store: React.PropTypes.object
}

export {TopHeader, SwitchBar, Title, CourseBlock}