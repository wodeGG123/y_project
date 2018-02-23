import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    Modal,
    View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import {MHeader} from '../header/index.js'

class EditModal extends Component{
    static defaultProps = {
        title:''
    }
    constructor(props) {
        super(props);
        this.state = {
            text:'',
        };
    }
    clearText(){
        this.setState({
            text:''
        })
    }
    render(){
        return (<Modal
            animationType={"slide"}
            transparent={false}
            visible={this.props.visible}
            onRequestClose={() => {}}
            onShow={() => {this.clearText()}}
        >
            <View style={styles.container}>
                <MHeader left={true} right={true} rightPress={()=>{this.props.rightFN(this.state.text)}} leftPress={()=>{this.props.leftFN()}} title={this.props.title} />
                <View style={styles.itemsWrap}>
                    <View style={styles.itemWrap}>

                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>{this.props.title}</Text>
                            </View>
                            <View style={styles.itemMid}>
                                <TextInput
                                    autoCapitalize='none'
                                    autoFocus={true}
                                    maxLength={100}
                                    style={styles.textInput}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    placeholder={'请输入'+this.props.title}
                                />

                            </View>
                            <View style={styles.itemRight}>

                            </View>

                        </View>

                    </View>
                </View>

            </View>
        </Modal>)
    }
}
export {EditModal}
