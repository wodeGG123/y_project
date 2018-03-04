import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './styles.js';
import Button from 'apsl-react-native-button'
import Icon from 'react-native-vector-icons/Ionicons'
import API from '../../../request/api.js'

import {Action_setTempData} from '../../../actions/common.js'
import moment from 'moment'



class UDBlock extends Component {

    static defaultProps = {
        data:{
            goods_thumb:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
            goods_name:'中考冲刺课程',
            fitfor:'初三',
            goods_studied:'262',
            url:'',
        }
    }

    constructor(props){
        super(props);
        this.state = {

        };
    }
    handlePress(){


        var action = Action_setTempData(this.props.data)
        store.dispatch(action)
        this.props.navigation.navigate('CourseInfo')

    }
    render() {
        let obj = this.props.data;
        return (<View style={styles.udBlockItem}>
                <TouchableHighlight onPress={()=>{this.handlePress()}} style={styles.udBlockItemImageWrap}>
                    <Image
                        style={styles.udBlockItemImage}
                        source={{uri: API.DOMAIN+obj.goods_thumb}}
                    />
                </TouchableHighlight>
                <View style={styles.udBlockItemTitleWrap}>
                    <Text numberOfLines={1} style={styles.udBlockItemTitle}>{obj.goods_name}</Text>
                </View>
                <View style={styles.udBlockItemTextWrap}>
                    <View style={styles.udBlockItemLeftTextWrap}>
                        <Text style={styles.udBlockItemLeftText}>针对<Text style={styles.udBlockTextColor}>初三</Text>学生使用</Text>
                    </View>
                    <View style={styles.udBlockItemRightTextWrap}>
                        <Text style={styles.udBlockItemRightText}><Text style={styles.udBlockTextColor}>362</Text>人学习过</Text>
                    </View>
                </View>

            </View>

        );
    }
}
UDBlock.contextTypes = {
    store: React.PropTypes.object
}


class UDBlockList extends Component {
   
   static defaultProps = {
      data:[{
          goods_thumb:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
          goods_name:'中考冲刺课程',
        fitfor:'初三',
          goods_studied:'262',
        url:'',
      },]
   }

   constructor(props){
      super(props);
      this.state = {
        
      };
   }  
  handlePress(){
    this.props.navigation.navigate('CourseInfo')
  }
  render() {
    
    return (<View style={[styles.udBlockWrap,this.props.style]}>
        {
            this.props.data?this.props.data.map((obj,index)=>{
            return (<View key={index} style={styles.udBlockItem}>
            <TouchableHighlight onPress={()=>{this.handlePress()}} style={styles.udBlockItemImageWrap}>
              <Image
              style={styles.udBlockItemImage}
              source={{uri: API.DOMAIN+obj.goods_thumb}}
              />
            </TouchableHighlight>
            <View style={styles.udBlockItemTitleWrap}>
              <Text numberOfLines={1} style={styles.udBlockItemTitle}>{obj.goods_name}</Text>
            </View>
           <View style={styles.udBlockItemTextWrap}>
               <View style={styles.udBlockItemLeftTextWrap}>
                <Text style={styles.udBlockItemLeftText}>针对<Text style={styles.udBlockTextColor}>初三</Text>学生使用</Text>
              </View>
              <View style={styles.udBlockItemRightTextWrap}>
                <Text style={styles.udBlockItemRightText}><Text style={styles.udBlockTextColor}>362</Text>人学习过</Text>
              </View>
            </View>

        </View>)
          }):null
        }
        
    </View>
      
    );
  }
}
UDBlockList.contextTypes = {
  store: React.PropTypes.object
}


class LRBlock extends Component {
   
   static defaultProps = {
      data:[{
        img:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
        title:'《妖猫传》终极海报绘制报绘制',
        time:'2018-01-29',
        url:'',
      },]
   }

   constructor(props){
      super(props);
      this.state = {
        
      };

   }

  handlePress(){
    this.props.navigation.navigate('NewsInfo')
  }
  render() {
    
    return (<View style={[styles.lrBlockWrap,this.props.style]}>
        {
            this.props.data?this.props.data.map((obj,index)=>{
            return (<View key={index} style={styles.lrBlockItem}>
            <TouchableHighlight onPress={()=>{this.handlePress()}} style={styles.lrBlockItemImageWrap}>
              <Image
              style={styles.lrBlockItemImage}
              source={obj.img?{uri: obj.img}:require('../../../statics/img/default.jpg')}
              />
            </TouchableHighlight>
            <View style={styles.lrBlockItemRight}>
              <View style={styles.lrBlockItemTitleWrap}>
                <Text style={styles.lrBlockItemTitle}>{obj.title}</Text>
              </View>
              <View style={styles.lrBlockItemTextWrap}>
                <Icon style={styles.lrBlockItemIcon} size={18} color='#999999' name='ios-time-outline' />
                <Text style={styles.lrBlockItemText}>
                {moment(obj.updated_at*1000).format('YYYY-MM-DD')}
                </Text>
              </View>
            </View>
        </View>)
          }):null
        }
        
    </View>
      
    );
  }
}
LRBlock.contextTypes = {
  store: React.PropTypes.object
}


class CartBlock extends Component {

    static defaultProps = {
        data:[{
            img:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
            title:'《妖猫传》终极海报绘制报绘制',
            target:'初三',
            price:'388.00',
            url:'',
        },]
    }

    constructor(props){
        super(props);
        this.state = {

        };
    }
    handlePress(){
        this.props.navigation.navigate('NewsInfo')
    }
    render() {
        return (<View style={[styles.cartBlockWrap,this.props.style]}>
                {
                    this.props.data.map((obj,index)=>{
                        return (<View key={index} style={styles.cartBlockItem}>
                            <View style={styles.cartBlockLeft}>
                                <View style={styles.cartBlockCheck}>
                                    <View style={styles.cartBlockCheckCenter}>

                                    </View>
                                </View>
                            </View>
                            <View onPress={()=>{this.handlePress()}} style={styles.cartBlockItemImageWrap}>
                                <Image
                                    style={styles.cartBlockItemImage}
                                    source={{uri: obj.goods_thumb.indexOf('http://')>0?obj.goods_thumb:API.DOMAIN+obj.goods_thumb}}
                                />
                            </View>
                            <View style={styles.cartBlockItemRight}>
                                <View style={styles.cartBlockItemTitleWrap}>
                                    <Text style={styles.cartBlockItemTitle}>{obj.goods_name}</Text>
                                </View>
                                <View style={styles.cartBlockItemTextWrap}>
                                    <Text style={styles.cartBlockItemText}>
                                        针对{obj.target}学生使用
                                    </Text>
                                </View>
                                <View style={styles.cartBlockItemPriceWrap}>
                                    <Text style={styles.cartBlockItemPrice}>
                                        {obj.price}
                                    </Text>
                                </View>
                            </View>
                        </View>)
                    })
                }

            </View>

        );
    }
}
CartBlock.contextTypes = {
    store: React.PropTypes.object
}



class OrderBlock extends Component {

    static defaultProps = {
        data:[{
            img:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
            title:'《妖猫传》终极海报绘制报绘制',
            fee:'388.00',
            url:'',
        },{
            img:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
            title:'《妖猫传》终极海报绘制报绘制',
            fee:'388.00',
            url:'',
        },{
            img:'http://www.sobeycollege.com/uploadfile/2016/0426/20160426020857843.jpg',
            title:'《妖猫传》终极海报绘制报绘制',
            fee:'388.00',
            url:'',
        },]
    }

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {

        return (<View style={[styles.orderBlockWrap,this.props.style]}>
                {
                    this.props.data.map((obj,index)=>{
                        return (<View key={index} style={styles.orderBlockItem}>
                            <View style={styles.orderBlockItemTop}>
                                <Text  style={styles.orderBlockItemTopText}>订单编号：1234521531643</Text>
                            </View>
                            <View style={styles.orderBlockItemMid}>
                                <View style={styles.orderBlockItemImageWrap}>
                                    <Image
                                        style={styles.orderBlockItemImage}
                                        source={{uri: obj.img}}
                                    />
                                </View>
                                <View style={styles.orderBlockItemRight}>
                                    <View style={styles.orderBlockItemTitleWrap}>
                                        <Text style={styles.orderBlockItemTitle}>{obj.title}</Text>
                                    </View>
                                    <View style={styles.orderBlockItemTextWrap}>
                                        <Text style={styles.orderBlockItemText}>
                                            实付：￥{obj.fee}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.orderBlockItemBottom}>
                                <View style={styles.orderBlockItemBottomTextWrap}>
                                    <Text style={styles.orderBlockItemBottomText}>总价：￥388.00</Text>
                                </View>
                                <View style={styles.orderBlockItemBottomButtonWrap}>
                                    <Button style={styles.orderBlockItemBottomButton} textStyle={styles.orderBlockItemBottomButtonText}>立即支付</Button>
                                </View>
                            </View>

                        </View>)
                    })
                }

            </View>

        );
    }
}
OrderBlock.contextTypes = {
    store: React.PropTypes.object
}

export {UDBlockList,UDBlock, LRBlock,CartBlock, OrderBlock}