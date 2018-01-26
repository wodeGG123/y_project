import {StackNavigator} from 'react-navigation';

//---
import Welcome from './pages/welcome/index.js';
import Home from './pages/home/index.js';



const RootNavigator = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header:null
    },
  },
  Home:{
  	screen: Home,
    navigationOptions: {
      header:null
    },
  }
},{
    headerMode: 'screen',
});

export default RootNavigator