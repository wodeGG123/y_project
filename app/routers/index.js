import {StackNavigator} from 'react-navigation';

//---
import Welcome from '../pages/welcome/index.js';
import Main from './main.js';
import Member from '../pages/member/index.js';



//root router
const RootNavigator = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header:null
    },
  },
  Index:{
  	screen: Main,
    navigationOptions: {
      header:null
    },
  },
  Login:{
  	screen: Member,
    navigationOptions: {
      header:null
    },
  }
},{
    headerMode: 'screen',
});

export default RootNavigator