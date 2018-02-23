import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/common/header/index.js'
import Member from '../../request/member.js'
import Button from 'apsl-react-native-button'

var _ = require('lodash');

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            old:'',
            new:'',
            reNew:''
        };
    }
    handleSubmit(){
        let userInfo = store.getState().userInfo;
        console.log(userInfo);





        Member.resetPWD({
            id: userInfo.userinfo.id,
            oldPassword: this.state.old,
            newPassword: this.state.new,
            accessToken: userInfo.accessToken
        })
        .then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header left={true} navigation={this.props.navigation} title='修改密码' />
                <View style={styles.itemsWrap}>
                    <View style={styles.itemWrap}>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>当前密码</Text>
                            </View>
                            <View style={styles.itemMid}>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.itemMidTextInput}
                                    autoCapitalize='none'
                                    placeholder='请输入当前密码'
                                    value={this.state.old}
                                    onChangeText={(text)=>{this.setState({old:text})}}
                                />
                            </View>
                            <View style={styles.itemRight}>

                            </View>

                        </View>

                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>新密码</Text>
                            </View>
                            <View style={styles.itemMid}>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.itemMidTextInput}
                                    autoCapitalize='none'
                                    placeholder='请输入新密码'
                                    value={this.state.new}
                                    onChangeText={(text)=>{this.setState({new:text})}}
                                />
                            </View>
                            <View style={styles.itemRight}>

                            </View>

                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>新密码</Text>
                            </View>
                            <View style={styles.itemMid}>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.itemMidTextInput}
                                    autoCapitalize='none'
                                    placeholder='请再次输入新密码'
                                    value={this.state.reNew}
                                    onChangeText={(text)=>{this.setState({reNew:text})}}
                                />
                            </View>
                            <View style={styles.itemRight}>

                            </View>

                        </View>

                    </View>
                </View>
                <View style={styles.submitWrap} >
                    <Button style={styles.submit} onPress={()=>{this.handleSubmit()}} textStyle={styles.submitText}>确认</Button>
                </View>

            </View>
        );
    }
}
Main.contextTypes = {
    store: React.PropTypes.object
}



