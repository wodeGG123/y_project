import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
    ListView,
  Text,
    TextInput,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

import {TopHeader, SwitchBar } from '../../components/homeComponents/index.js'
import {UDBlock} from '../../components/common/block/index.js'
import Course from '../../request/course.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
       this.state = {
           dataSource:ds.cloneWithRows([]),
           data:[],
           page:1,
           history:[],
           keyWord:''
       };
   }
   componentWillMount(){
    storage.sync = {historyKeyWords(){
        storage.save({
              key: 'historyKeyWords',
              data: false
            });
       }}
      storage.load({
        key: 'historyKeyWords',
        autoSync: true,
        syncInBackground: true,
        syncParams: {
        },
      })
      .then((data)=>{

        if(data){

          this.setState({
              history:data
          })
        }
      })
      .catch((err)=>{})
       //获取初始数据
       this.getData({},true);
   }
    getData(params,init){
        
        params.courseName = params.courseName?params.courseName:this.state.keyWord
            
        Course.list(params)
            .then((data)=>{

                if(data){
                    var _data = this.state.data.concat(data.data)
                    if(init){
                        _data = data.data
                    }
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(_data),
                        data:_data,
                        page:parseInt(data.currentPage)+1,
                        keyWord:params.courseName,
                    })
                }
            })

    }
    saveHistoryKeyWords(text){
        //获取数据
        storage.sync = {historyKeyWords(){
            storage.save({
                  key: 'historyKeyWords',
                  data: false
                });
           }}
          storage.load({
            key: 'historyKeyWords',
            autoSync: true,
            syncInBackground: true,
            syncParams: {
            },
          })
          .then((data)=>{

              let _data = [];
            if(data){
              _data = data;
              _data.push(text)
            }else{
              _data.push(text)                
            }
            //保存数据  
            storage.save({
                key: 'historyKeyWords',  // 注意:请不要在key中使用_下划线符号!
                data:_data,
                
                // 如果不指定过期时间，则会使用defaultExpires参数
                // 如果设为null，则永不过期
                expires: null
            });
          })
          .catch((err)=>{})

        
    }
    removeHistoryKeyWords(){
        this.setState({
            history:[]
        })
        storage.remove({
            key: 'historyKeyWords'
        });
    }
  render() {

    return (
      <View style={styles.container}>
          <SearchHeader 
          search={(text)=>{
            this.saveHistoryKeyWords(text);              
            this.getData({
            courseName:text,
          },true)}} 
          navigation={this.props.navigation} 
          />
          {this.state.history.length>0?<View style={styles.tool}>
              <View style={styles.toolTitleWrap}>
                  <View><Text style={styles.toolTitle}>搜索历史</Text></View>
                  <View>
                      <Text onPress={this.removeHistoryKeyWords.bind(this)} style={styles.toolTitle}>
                          清除历史
                      </Text>
                  </View>

              </View>
              <View style={styles.toolItemWrap}>
                {this.state.history.map((obj,index)=>{
                    return (<View key={index} style={styles.toolItem}><Text onPress={()=>{this.getData({courseName:obj},true)}} style={styles.toolItemText}>{obj}</Text></View>)
                })}                
              </View>

          </View>:null}
          
          <View style={styles.tool}>
              <View style={styles.toolTitleWrap}>
                  <View><Text style={styles.toolTitle}>热门搜索</Text></View>
              </View>
              <View style={styles.toolItemWrap}>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投2</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投123</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投12</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投2</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投123</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText2}>投投12</Text></View>
              </View>

          </View>
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

class SearchHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
        };
    }
    handleCancel(){
        //返回页面
        this.props.navigation.navigate(this.props.navigation.state.params.preScreen)
    }
    render() {

        return (<View style={styles.top}>
                <View style={styles.topSearch}>
                    <Icon style={styles.topSearchIcon} size={20} color='#aaaaaa' name='ios-search' />
                    <TextInput
                        style={styles.topSearchText}
                        placeholder="搜索课程"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}

                    />
                </View>
                <View style={styles.topRight}>
                    <Text onPress={()=>{this.handleCancel()}} style={styles.topRightText}>取消</Text>
                </View>
            </View>
        );
    }
}
SearchHeader.contextTypes = {
    store: React.PropTypes.object
}


