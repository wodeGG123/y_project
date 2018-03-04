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
import { LRBlock} from '../../components/common/block/index.js'
import Content from '../../request/content.js'

export default class Main extends Component {
   constructor(props){
      super(props);
      this.state = {
          data:false
      };
   }  
    componentWillMount(){
        Content.list()
            .then((data)=>{
                if(data){
                    this.setState({
                        data:data.data
                    })
                }
            })
    }
  render() {
    
    return (
      <View style={styles.container}>
            <Header title='资讯' />
            <ScrollView contentContainerStyle={styles.scrollViewWrap}>
                <View style={styles.block} >
                    <LRBlock data={this.state.data} navigation={this.props.navigation} style={styles.recommendWrap} />
                </View>
            </ScrollView>
      </View>
    );
  }
}
Main.contextTypes = {
  store: React.PropTypes.object
}

