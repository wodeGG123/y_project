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
           dataSource:ds.cloneWithRows([])
       };
   }
   componentWillMount(){
       this.getData();
   }
    getData(params){
        Course.list()
            .then((data)=>{

                if(data){
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(data.data)
                    })
                }
            })
    }
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
          <SearchHeader navigation={this.props.navigation} />
          <View style={styles.tool}>
              <View style={styles.toolTitleWrap}>
                  <View><Text style={styles.toolTitle}>搜索历史</Text></View>
                  <View>
                      <Text  style={styles.toolTitle}>
                          清除历史
                      </Text>
                  </View>

              </View>
              <View style={styles.toolItemWrap}>
                  <View style={styles.toolItem}><Text style={styles.toolItemText}>投投</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText}>投投2</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText}>投投123</Text></View>
                  <View style={styles.toolItem}><Text style={styles.toolItemText}>投投12</Text></View>
              </View>

          </View>
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
              onEndReached={()=>{console.log(213)}}
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


