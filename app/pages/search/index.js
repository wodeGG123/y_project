import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
  Text,
    TextInput,
  View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'

import {TopHeader, SwitchBar } from '../../components/homeComponents/index.js'
import {UDBlock} from '../../components/common/block/index.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
     
      };
   }  

  render() {
    
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
          <ScrollView contentContainerStyle={styles.scrollViewWrap}>
              <View style={styles.block} >
                  <UDBlock style={styles.recommendWrap} />
              </View>
          </ScrollView>
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
        this.props.navigation.goBack()
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


