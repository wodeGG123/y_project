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
import Icon from 'react-native-vector-icons/Ionicons'

import {TopHeader} from '../../components/homeComponents/index.js'
import SwitchBar from '../../components/common/switchBar/index.js'
import {UDBlock} from '../../components/common/block/index.js'
import Course from '../../request/course.js'
import Common from '../../request/common.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
      this.state = {
            dataSource:ds.cloneWithRows([]),
            data:[],
            swichBar:[],
            page:1,
            categroy:0,
      };
   } 
    componentDidMount(){
      //课程分类数据
      Common.categroy().then((data)=>{
        if(data){
            this.setState({
                swichBar:data.data
            })
        }
    })
    //获取默认课程数据
     if(this.props.navigation.state.params){
      this.getData({config:this.props.navigation.state.params.id,page:this.state.page},true)
     }else{
      this.getData({page:this.state.page},true)
     }
     

    }
    getData(param,init){
      if(param.config != 0){
        param.config = param.config||this.state.categroy; 
      }
           
      if(init){
        Course.list(param)
        .then((data)=>{
            if(data){                
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(data.data),
                    data: data.data,
                    page: parseInt(data.currentPage)+1,
                    categroy: param.config
                })
            }
        })
      }else{
        Course.list(param)
        .then((data)=>{
            if(data){
                let _data = this.state.data.concat(data.data);
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(_data),
                    data: _data,
                    page: parseInt(data.currentPage)+1,
                    categroy: param.config
                })
            }
        })
      }
      
      
    }

  render() {
    
    return (
      <View style={styles.container}>
          <TopHeader navigation={this.props.navigation} />
          <SwitchBar getData={(id)=>{this.getData({config:id,page:1},true)}} defaultItemId={this.props.navigation.state.params&&this.props.navigation.state.params.id} items={this.state.swichBar} navigation={this.props.navigation} />
          <View style={styles.hr}></View>
          <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              onEndReached={()=>{this.getData({page:this.state.page})}}
              onEndReachedThreshold={60}
              renderRow={(rowData)=> <UDBlock navigation={this.props.navigation} data={rowData} />}
              contentContainerStyle={styles.listWrap}
          />

      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

