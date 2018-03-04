import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper';

//

import styles from './styles.js';
import {TopHeader, SwitchBar, Title, CourseBlock} from '../../components/homeComponents/index.js'
import {UDBlockList, LRBlock} from '../../components/common/block/index.js'
import Banner from '../../request/banner.js'
import Common from '../../request/common.js'
import Course from '../../request/course.js'
import Content from '../../request/content.js'

class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          banner:false,
          swichBar:[],
          data1:false,
          data2:false,
          data3:false,
      };
   }  
    componentWillMount(){
        //课程分类数据
        Common.categroy().then((data)=>{
            if(data){
                this.setState({
                    swichBar:data.data
                })
            }
        })
       //banner数据
        Banner.list()
            .then((data)=>{
                if(data){
                    this.setState({
                        banner:data.content
                    })

                }
            })
        //课程数据
        Course.list()
            .then((data)=>{
                if(data){
                    this.setState({
                        data1:data.data
                    })
                }
            })
        Course.list({pagesize:4})
            .then((data)=>{
                if(data){
                    this.setState({
                        data2:data.data
                    })
                }
            })
        //内容数据
        Content.list({pagesize:6})
            .then((data)=>{
                if(data){
                    this.setState({
                        data3:data.data
                    })
                }
            })
   }
  render() {
    return (
      <View style={styles.container}>
          <TopHeader navigation={this.props.navigation} />
          <SwitchBar items={this.state.swichBar} navigation={this.props.navigation} />
          <ScrollView>

                {this.state.banner?<Swiper style={styles.banner}>{this.state.banner.map((obj,index)=>{
                    return (<View key={index} style={styles.slide}>
                        <Image
                            style={styles.slideImg}
                            source={{uri:obj.url+obj.content}}
                        />
                    </View>)
                })}</Swiper>:<View style={styles.banner}></View>}

              <View style={styles.block} >
                 <Title text='新课首发' url='CourseIndex' navigation={this.props.navigation} />
                 <ScrollView horizontal={true} contentContainerStyle={styles.firstPbWrap}>
                     {
                         this.state.data1?this.state.data1.map((obj,index)=>{
                             return (<CourseBlock navigation={this.props.navigation} key={index} data={obj} />)
                         }):<CourseBlock />
                     }
                 </ScrollView>   
              </View>
               <View style={styles.blockHR} ></View>
               <View style={styles.block} >
                  <Title text='新课推荐' url='CourseIndex' navigation={this.props.navigation} />
                  <UDBlockList data={this.state.data2} navigation={this.props.navigation} style={styles.recommendWrap} />
               </View>
              <View style={styles.blockHR} ></View>
               <View style={styles.block} >
                  <Title text='行业资讯' url='NewsIndex' navigation={this.props.navigation} />
                  <LRBlock data={this.state.data3} navigation={this.props.navigation} style={styles.recommendWrap} />
               </View>
          </ScrollView>
        

      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}


export default Main



