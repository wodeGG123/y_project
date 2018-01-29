import {StackNavigator} from 'react-navigation';

//---
import Welcome from '../pages/welcome/index.js';
import Main from './main.js';
import Member from './member.js';



//root router
const RootNavigator = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      
    },
  },
  Index:{
  	screen: Main,
    navigationOptions: {
      
    },
  },
  Member:{
  	screen: Member,
    navigationOptions: {
      
    },
  }
},{
    headerMode: 'none',
});

export default RootNavigator