import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles.js';
import Header from '../../components/common/header/index.js'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Button from 'apsl-react-native-button'
import Theme from '../../theme.js'
import {EditModal} from '../../components/common/modal/index.js'
var _ = require('lodash');

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          modal:{
              visible:false,
              title:'',
              rightFN:(data)=>{this.saveAnswer(data)},
              leftFN:()=>{this.closeModal()},
          }
      };
   }
    editAnswer(){
        let modal  = _.cloneDeep(this.state.modal);
        modal.visible = true;
        modal.title = '回答';
        this.setState({
            modal
        })
    }
    saveAnswer(data){
        console.log(data)

        let modal  = _.cloneDeep(this.state.modal);
        modal.visible = false;
        this.setState({
            modal
        })
    }
    closeModal(){
        let modal  = _.cloneDeep(this.state.modal);
        modal.visible = false;
        this.setState({
            modal
        })
    }
  render() {

    return (
      <View style={styles.container}>
          <Header left={true} navigation={this.props.navigation} title='答疑解惑' />
          <ScrollableTabView
              tabBarUnderlineStyle={{backgroundColor:Theme.color,borderRadius:3,height:3}}
              tabBarBackgroundColor='#ffffff'
              tabBarActiveTextColor={Theme.color}
              tabBarInactiveTextColor={Theme.textBlack2}
              tabBarTextStyle={{fontSize:14}}
          >
              <ScrollView tabLabel="未回答" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.block} >
                      <View style={styles.question}>
                          <View style={styles.questionTop}>
                              <View style={styles.questionTitle}>
                                  <Text style={styles.questionTitleText}>
                                      1.问题标题
                                  </Text>
                              </View>
                              <View style={styles.questionButtonWrap}>
                                  <Button onPress={()=>{this.editAnswer()}} style={styles.questionButton} textStyle={styles.questionButtonText}>回答</Button>
                              </View>


                          </View>
                          <View style={styles.questionContent}>
                              <Text style={styles.questionContentText}>
                                  问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容
                              </Text>
                          </View>
                      </View>
                      <View style={styles.question}>
                          <View style={styles.questionTop}>
                              <View style={styles.questionTitle}>
                                  <Text style={styles.questionTitleText}>
                                      1.问题标题
                                  </Text>
                              </View>
                              <View style={styles.questionButtonWrap}>
                                  <Button onPress={()=>{this.editAnswer()}} style={styles.questionButton} textStyle={styles.questionButtonText}>回答</Button>
                              </View>


                          </View>
                          <View style={styles.questionContent}>
                              <Text style={styles.questionContentText}>
                                  问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容
                              </Text>
                          </View>
                      </View>
                  </View>
              </ScrollView>
              <ScrollView tabLabel="已回答" contentContainerStyle={styles.scrollViewWrap} >
                  <View style={styles.block} >
                      <View style={styles.question}>
                          <View style={styles.questionTop}>
                              <View style={styles.questionTitle}>
                                  <Text style={styles.questionTitleText}>
                                      1.问题标题
                                  </Text>
                              </View>
                              <View style={styles.questionButtonWrap}>
                                  <Button onPress={()=>{this.editAnswer()}} style={styles.questionButton} textStyle={styles.questionButtonText}>回答</Button>
                              </View>


                          </View>
                          <View style={styles.questionContent}>
                              <Text style={styles.questionContentText}>
                                  问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容
                              </Text>
                          </View>
                      </View>
                      <View style={styles.question}>
                          <View style={styles.questionTop}>
                              <View style={styles.questionTitle}>
                                  <Text style={styles.questionTitleText}>
                                      1.问题标题
                                  </Text>
                              </View>
                              <View style={styles.questionButtonWrap}>
                                  <Button onPress={()=>{this.editAnswer()}} style={styles.questionButton} textStyle={styles.questionButtonText}>回答</Button>
                              </View>


                          </View>
                          <View style={styles.questionContent}>
                              <Text style={styles.questionContentText}>
                                  问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容
                              </Text>
                          </View>
                      </View>
                  </View>
              </ScrollView>

          </ScrollableTabView>



        <EditModal {...this.state.modal} />
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

