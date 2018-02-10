import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
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

        };
    }

    render(){
        return (<Modal
            animationType={"slide"}
            transparent={false}
            visible={this.props.visible}
            onRequestClose={() => {console.log(123)}}
        >
            <View style={styles.container}>
                <MHeader left={true} right={true} rightPress={()=>{this.props.rightFN()}} leftPress={()=>{this.props.leftFN()}} title={this.props.title} />
                <View style={styles.itemsWrap}>
                    <View style={styles.itemWrap}>

                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>昵称</Text>
                            </View>
                            <View style={styles.itemMid}>
                                <Text style={styles.itemMidText}>请输入昵称</Text>
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
