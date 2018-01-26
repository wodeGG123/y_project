import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { Provider } from 'react-redux';

import configureStore from './store/ConfigureStore';

import App from './router.js'

const store = configureStore();

export default class Root extends Component {  

    render() {    

        return (<Provider store={store}><App /></Provider>)}

}
