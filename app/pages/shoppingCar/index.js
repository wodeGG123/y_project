import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/common/header/index.js'
import { CartBlock} from '../../components/common/block/index.js'
import Shoppingcart from '../../request/shoppingCart.js'
export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
        data:[],
        goods:0,
        sum:0,
        userId:false,
      };
   }  
   componentDidMount(){
      var userId = false;
      if(store.getState().userInfo){
        userId = store.getState().userInfo.userinfo.id;
        Shoppingcart.list({accesstoken:userId})
        .then((data)=>{
            console.log(data)
            if(data){
                this.setState({
                    data
                })
            }
        })
        this.setState({
            userId
        })
      }else{
        this.props.navigation.navigate("Login")
      }
     
   }
   handleOrder(){

   }
   onCheck(){

   }
  render() {
    return (
      <View style={styles.container}>
          <Header title='购物车' />
          <ScrollView contentContainerStyle={styles.scrollViewWrap}>
              <View style={styles.block} >
                  <CartBlock onCheck={()=>{this.onCheck()}} data={this.state.data} onSelect={()=>{}} navigation={this.props.navigation} style={styles.recommendWrap} />
              </View>
          </ScrollView>
          <View style={styles.tool}>
              <View style={styles.toolLeft}>
                  <Text style={styles.toolLeftText}>已选（{this.state.goods}）</Text>
              </View>
              <View style={styles.toolRight}>
                  <View style={styles.toolRightPrice}>
                      <Text style={styles.toolRightPriceText}>￥{parseFloat(this.state.sum)}</Text>
                  </View>
                  <View style={styles.toolRightButton}>
                      <Text onPress={()=>{this.handleOrder()}} style={styles.toolRightButtonText}>下单</Text>
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

