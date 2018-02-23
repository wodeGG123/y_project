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
    
    return (
      <View style={styles.container}>
          <TopHeader navigation={this.props.navigation} />
          <SwitchBar navigation={this.props.navigation} />
          <View style={styles.hr}></View>
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

