import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
    ListView,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Header from '../../components/common/header/index.js'
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'
import {OrderBlock} from '../../components/common/block/index.js'
import Theme from '../../theme.js'
import Order from '../../request/order.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
      this.state = {
          dataSource: ds.cloneWithRows([]),
          data:[],
          page:1,
          type:0,          
      };
   }  

   componentWillMount(){
        this.getData({page:1},true,this.state.type)
   }
   getData(params,init,type){
        let userId = store.getState().userInfo.userinfo.id;
        let _params = {userid:userId}
        params?Object.assign(_params,params):null;   
        if(type == 0){
            _params.status = 'unpay'
        }else{
            _params.status = 'success'
        }
        Order.list(_params)
        .then((data)=>{
            let _data = data.data;
            if(!init){
                _data = this.state.data.concat(data.data);
            }
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(_data),
                data:_data,
                page:data.currentPage+1,
                type:this.state.type||type
            })
        })
   }
  render() {
    
    return (
      <View style={styles.container}>
          <Header left={true} navigation={this.props.navigation} title='我的订单' />
          <ScrollableTabView
              tabBarUnderlineStyle={{backgroundColor:Theme.color,borderRadius:3,height:3}}
              tabBarBackgroundColor='#ffffff'
              tabBarActiveTextColor={Theme.color}
              tabBarInactiveTextColor={Theme.textBlack2}
              tabBarTextStyle={{fontSize:14}}
              onChangeTab={(data)=>{this.getData({page:1},true,data.i)}}
          >
              <ListView
                tabLabel="未支付" 
                style={styles.scrollViewWrap}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                onEndReached={()=>{this.getData({page:this.state.page})}}
                onEndReachedThreshold={60}
                renderRow={(rowData)=> <OrderBlock data={rowData} />}
                contentContainerStyle={styles.listWrap}
              />
              <ListView
                tabLabel="已支付" 
                style={styles.scrollViewWrap}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                onEndReached={()=>{this.getData({page:this.state.page})}}
                onEndReachedThreshold={60}
                renderRow={(rowData)=> <OrderBlock data={rowData} />}
                contentContainerStyle={styles.listWrap}
              />

          </ScrollableTabView>




      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

