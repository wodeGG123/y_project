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
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Icon from 'react-native-vector-icons/Ionicons'
import Button from 'apsl-react-native-button'
import Theme from '../../theme.js'
import {EditModal} from '../../components/common/modal/index.js'
import {QAQ,QAA} from '../../request/qa.js'

var _ = require('lodash');

export default class Main extends Component {
   constructor(props){
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
          modal:{
              visible:false,
              title:'',
              rightFN:(data)=>{this.saveAnswer(data)},
              leftFN:()=>{this.closeModal()},
          },
          dataSource:ds.cloneWithRows([]),
          data:[],
          page:1,
          userId:false,
          questionId:0,
      };
   }
    editAnswer(qid){
        let modal  = _.cloneDeep(this.state.modal);
        modal.visible = true;
        modal.title = '回答';
        this.setState({
            modal,
            questionId:qid,
        })

    }
    saveAnswer(data){
        
        var userId = store.getState().userInfo.userinfo.id;
        QAA.add({
            params:{
                qid:this.state.questionId,
                content:data,
                userid:userId
            }
        })
        .then((data)=>{
            console.log(data)
        })
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
    componentDidMount(){
        var userId = store.getState().userInfo.userinfo.id;
        var params = JSON.stringify({userid:userId});

        this.getData({status:0});
    }
    
    getData(param,init){
        QAQ.list(param)
        .then((data)=>{
            if(data){
                var _data = data.data;
                if(!init){
                    _data = this.state.data.concat(data.data);
                }
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(_data),
                    data: _data,
                    page: parseInt(data.currentPage)+1,
                })
                
            }
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
            <ListView
                tabLabel="未回答" 
                style={styles.scrollViewWrap}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                onEndReached={()=>{this.getData({page:this.state.page})}}
                onEndReachedThreshold={60}
                renderRow={(rowData)=> <View style={styles.question}>
                        <View style={styles.questionTop}>
                            <View style={styles.questionTitle}>
                                <Text style={styles.questionTitleText} numberOfLines={1}>
                                {rowData.question}
                                </Text>
                            </View>
                            <View style={styles.questionButtonWrap}>
                                <Button onPress={()=>{this.editAnswer(rowData.id)}} style={styles.questionButton} textStyle={styles.questionButtonText}>回答</Button>
                            </View>
                        </View>
                        <View style={styles.questionContent}>
                            <Text style={styles.questionContentText}>
                                {rowData.content}
                            </Text>
                        </View>
                    </View>}
                contentContainerStyle={styles.listWrap}

            />
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


class QaBlock extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (<View>

        </View>)
    }
}