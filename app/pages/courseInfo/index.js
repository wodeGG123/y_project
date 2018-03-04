import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
    Image,
    TextInput,
    TouchableHighlight,
  Text,
  View,
} from 'react-native';
import moment from 'moment'
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import VideoPlayer from 'react-native-video-player';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Theme from '../../theme.js'

import Course from '../../request/course.js'
import ShoppingCar from '../../request/shoppingCart.js'
import Order from '../../request/order.js'


export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
            data1:false,
            data2:false,
            userId:false,
      };
   }  
    componentWillMount(){


        let data1 = store.getState().tempData;
        let userId = store.getState().userInfo.userinfo.id;

        Course.info({id:data1.course.course_id})
            .then((data)=>{            
            if(data){
                this.setState({
                    data1:data1,
                    data2:data,
                    userId
                })
            }

       })
    }
    handlePlay(id){
        Course.play({id:id})
            .then((data)=>{
                console.log(data)
            })
    }
    handleBuy(){
        console.log('buy')
        Order.submit({
            userid:1,
            
        })
        .then((data)=>{
            console.log(data)
        })
    }
    addShoppingCar(){
        console.log(this.state)
        ShoppingCar.add(this.state.userId,{
            goods_id:this.state.data1.goods_id,
            goods_num:1,
        })
        .then((data)=>{
            console.log(data)
        })


        this.props.navigation.navigate('ShoppingCar',this.state.data1)
    }
  render() {
        let url = "http://19appsvideo.oss-cn-shanghai.aliyuncs.com/Act-ss-mp4-ld/f610538208314290a960684486a3c9b5/%E6%B5%8B%E8%AF%95%E4%B8%AD%E6%96%87%E8%A7%86%E9%A2%91.mp4"
    return (
      <View style={styles.container}>
          <View  style={styles.top}>
              <View style={styles.videoWrap}>
              <VideoPlayer
                video={{ uri: url }}
                videoWidth={375}
                videoHeight={210}
                duration={0}
                ref={r => this.player = r}
                />

              </View>
              <View style={styles.videoTool}>
                  <View><Icon onPress={()=>{}} style={styles.videoToolIcon} size={20} color='rgba(255,255,255,0.4)' name='ios-close-circle' /></View>
                  {/*<View><Icon style={styles.videoToolIcon} size={26} color='rgba(255,255,255,0.4)' name='ios-send' /></View>*/}
              </View>
          </View>
          <ScrollableTabView
              tabBarUnderlineStyle={{backgroundColor:Theme.color,borderRadius:3,height:3}}
              tabBarBackgroundColor='#ffffff'
              tabBarActiveTextColor={Theme.color}
              tabBarInactiveTextColor={Theme.textBlack2}
              tabBarTextStyle={{fontSize:14}}
          >
              <ScrollView tabLabel="介绍" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.introWrap}>
                     <View style={styles.introTextWrap}>
                      <Text style={styles.introText}>{this.state.data1?this.state.data1.course.description:'描述'}</Text>
                     </View>
                      <View style={styles.introEsWrap}>
                        <View style={styles.introEsItem}>
                         <Text style={styles.introEsText}>难度：中级</Text> 
                        </View>
                         <View style={styles.introEsItem}>
                         <Text style={styles.introEsText}>时长：{this.state.data1?moment.duration(parseInt(this.state.data1.course.auth_count_time)).asHours():'0'}小时</Text>
                        </View>
                         <View style={styles.introEsItem}>
                         <Text style={styles.introEsText}>学习人数：{this.state.data1?this.state.data1.course.learnnumber:'0'}人</Text>
                        </View>
                      </View>
                  </View>
                {/*
                     <View style={styles.introEvaluate}>
                      <View style={styles.introEvaluateTop}>
                          <View style={styles.introEvaluateTopTitleWrap}>
                              <View>
                                  <Text style={styles.introEvaluateTopTitleText}>综合评价</Text>
                              </View>
                              <View>
                                  <Text style={styles.introEvaluateTopTitleMarkText}>10.0</Text>
                              </View>
                          </View>
                          <View style={styles.introEvaluateTopEs}>
                              <View style={styles.introEvaluateTopEsItem}>
                                  <Text style={styles.introEvaluateTopEsItemText1}>内容实用：</Text><Text style={styles.introEvaluateTopEsItemText2}>10.0</Text>
                              </View>
                              <View style={styles.introEvaluateTopEsItem}>
                                  <Text  style={styles.introEvaluateTopEsItemText1}>通俗易懂：</Text><Text style={styles.introEvaluateTopEsItemText2}>10.0</Text>
                              </View>
                              <View style={styles.introEvaluateTopEsItem}>
                                  <Text  style={styles.introEvaluateTopEsItemText1}>逻辑清晰：</Text><Text style={styles.introEvaluateTopEsItemText2}>10.0</Text>
                              </View>
                          </View>
                      </View>

                       <View style={styles.introEvaluates}>
                        <View style={styles.introEvaluatesItem}>
                            <View style={styles.introEvaluatesItemImageWrap}>
                                <Image source={{uri: 'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg'}}  style={styles.introEvaluatesItemImage} />
                            </View>
                            <View style={styles.introEvaluatesItemRight}>
                                <View style={styles.introEvaluatesItemRightTop}>
                                    <Text style={styles.introEvaluatesItemRightTitle}>weixin-duan</Text>
                                    <View style={styles.introEvaluatesItemRightStars}>
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                    </View>
                                </View>
                                <View style={styles.introEvaluatesItemContent}>
                                    <Text style={styles.introEvaluatesItemContentText}>
                                        老师讲的很好，通俗易懂师讲的很好，通俗易懂师讲的很好，通俗易懂师讲的很好，通俗易懂师讲的很好，通俗易懂
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.introEvaluatesItem}>
                            <View style={styles.introEvaluatesItemImageWrap}>
                                <Image source={{uri: 'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg'}}  style={styles.introEvaluatesItemImage} />
                            </View>
                            <View style={styles.introEvaluatesItemRight}>
                                <View style={styles.introEvaluatesItemRightTop}>
                                    <Text style={styles.introEvaluatesItemRightTitle}>weixin-duan</Text>
                                    <View style={styles.introEvaluatesItemRightStars}>
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                        <Icon color={Theme.color2} size={18} style={styles.introEvaluatesItemRightStar} name='md-star' />
                                    </View>
                                </View>
                                <View style={styles.introEvaluatesItemContent}>
                                    <Text style={styles.introEvaluatesItemContentText}>
                                        老师讲的很好，通俗易懂师讲的很好，通俗易懂师讲的很好，通俗易懂师讲的很好，通俗易懂师讲的很好，通俗易懂
                                    </Text>
                                </View>
                            </View>
                        </View>
                  </View>
                  </View>

                */}
                 

                 
              </ScrollView>
              <ScrollView tabLabel="章节" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.sections}>
                      {
                          this.state.data2?this.state.data2.map((obj,index)=>{
                              return (<View key={index} style={styles.section}>
                                  <View style={styles.sectionMark}></View>
                                  <View style={styles.sectionTitle}>
                                      <Text style={styles.sectionTitleText1}>第{index+1}章</Text>
                                      <Text numberOfLines={1} style={styles.sectionTitleText2}>{obj.name}</Text>
                                  </View>
                                  <View style={styles.sectionCourses}>
                                      {obj.CourseBars.map((obj2,index2)=>{
                                          return obj2.CourseKnows.map((obj3,index3)=>{
                                              return(<TouchableHighlight onPress={()=>{this.handlePlay(obj3.knowsid)}} underlayColor='transparent' key={index2+''+index3} >
                                                  <View style={styles.sectionCourse}>
                                                  <Icon style={styles.courseMark} name='ios-play' color='#acabaa' size={16} />
                                                  <Text style={styles.sectionCourseText}>{index2+1}-{index3+1}</Text>
                                                  <Text numberOfLines={1} style={styles.sectionCourseText}>{obj3.name}</Text>
                                                  </View>
                                              </TouchableHighlight>)
                                          })
                                      })}

                                  </View>
                              </View>)
                          }):null
                      }


                  </View>
              </ScrollView>
              <ScrollView tabLabel="咨询" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.consult}>
                      <View style={styles.consultInputWrap}>                          
                          <View style={styles.consultInputLeft}>
                            <TextInput 
                            autoCapitalize='none'
                            style={styles.consultInput}
                            placeholder='输入您遇到的问题'
                             />  
                          </View>
                          <View style={styles.consultInputRight}>
                            <Text style={styles.consultInputRightText}>
                              发送
                            </Text>
                          </View>
                      </View>
                      
                      <View style={styles.questions}>
                          <View style={styles.question}>
                            <View style={styles.questionLeft}>
                              <Image 
                              style={styles.questionLeftImg} 
                              source={{uri: 'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg'}}
                              />
                            </View>
                            <View style={styles.questionMid}>
                               <View style={styles.questionMidTitleWrap}>
                                  <View>
                                    <Text style={styles.questionMidTitle}>weixin-duan</Text>
                                  </View> 
                                  <View>
                                    <Text style={styles.questionMidTitleTime}>2018-02-05 14:58:26</Text>
                                  </View>
                               </View>
                               <View style={styles.questionMidContent}>
                                 <Text style={styles.questionMidContentText}>老师讲得很好，通俗易懂老师讲得很好通老师讲得很好，通俗易懂老师讲得很好通</Text>
                               </View>
                            </View>
                            <View style={styles.questionRight}>
                                <View style={styles.questionRightLike}>
                                  <Icon style={styles.questionRightLikeIcon} name='md-thumbs-up' color='#c3c3c3' size={24}  />
                                  <Text style={styles.questionRightLikeText}>(15)</Text>
                                </View>
                            </View>
                        </View>

                         <View style={styles.question}>
                            <View style={styles.questionLeft}>
                              <Image 
                              style={styles.questionLeftImg} 
                              source={{uri: 'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg'}}
                              />
                            </View>
                            <View style={styles.questionMid}>
                               <View style={styles.questionMidTitleWrap}>
                                  <View>
                                    <Text style={styles.questionMidTitle}>weixin-duan</Text>
                                  </View> 
                                  <View>
                                    <Text style={styles.questionMidTitleTime}>2018-02-05 14:58:26</Text>
                                  </View>
                               </View>
                               <View style={styles.questionMidContent}>
                                 <Text style={styles.questionMidContentText}>老师讲得很好，通俗易懂老师讲得很好通老师讲得很好，通俗易懂老师讲得很好通</Text>
                               </View>
                            </View>
                            <View style={styles.questionRight}>
                                <View style={styles.questionRightLike}>
                                  <Icon style={styles.questionRightLikeIcon} name='md-thumbs-up' color='#c3c3c3' size={24}  />
                                  <Text style={styles.questionRightLikeText}>(15)</Text>
                                </View>
                            </View>
                        </View>
                      </View>

                      
                  </View>
              </ScrollView>
            
          </ScrollableTabView>
          <View style={styles.tip}>
            <View style={styles.tipPrice}>
              <Text style={styles.tipPriceText}>￥388.00</Text>  
            </View>
            <View style={styles.tipButton}>
              <View style={styles.tipCartWrap}>
                <Image resizeMode='contain' style={styles.tipCart} source={require('../../statics/img/add_cart.png')} />               
              </View>
              <View style={styles.tipButtonTextWrap}>
                <Text onPress={()=>{this.handleBuy()}} style={styles.tipButtonText}>
                  立即购买
                </Text>
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

