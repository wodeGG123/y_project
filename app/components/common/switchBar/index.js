import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    Modal,
    View,
    ScrollView,
} from 'react-native';
import styles from './styles.js';

class SwitchBar extends Component{
    static defaultProps = {
        items:[],
        defaultItemId:-1
    }
    static propTypes = {
        items:React.PropTypes.array
    }
    constructor(props){
        super(props);
        this.state = {
            defaultItemId:this.props.defaultItemId
        };
    }
    handlePress(id){
        this.setState({
            defaultItemId:id
        })
        if(this.props.getData){
            this.props.getData(id==-1?0:id)
        }
        
    }
    render() {
        return (<View style={styles.switchBar}>
            <ScrollView horizontal={true} contentContainerStyle={styles.switchBarScroll}>
            <View style={[styles.switchBarTextView,this.state.defaultItemId==-1?styles.switchBarTextViewAct:{}]}><Text onPress={()=>{this.handlePress(-1)}} style={[styles.switchBarText,this.state.defaultItemId==-1?styles.switchBarTextAct:{}]}>全部</Text></View>
              {this.props.items&&this.props.items.map((obj,index)=>{
                  return (<View key={index} style={[styles.switchBarTextView,this.state.defaultItemId==obj.course_config_id?styles.switchBarTextViewAct:{}]}><Text onPress={()=>{this.handlePress(obj.course_config_id)}} style={[styles.switchBarText,this.state.defaultItemId==obj.course_config_id?styles.switchBarTextAct:{}]}>{obj.name}</Text></View>)
              })}
            </ScrollView>
        </View>);
    }
}
SwitchBar.contextTypes = {
    store: React.PropTypes.object
}
export default SwitchBar
