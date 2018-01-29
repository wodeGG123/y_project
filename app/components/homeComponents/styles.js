
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import Theme from '../../theme.js'

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度

const styles = StyleSheet.create({
  top:{
  	height: 58,
  	width:deviceWidth-6,
  	backgroundColor:'#ffffff',
  	justifyContent: 'center',
  	flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 6,
	  paddingLeft: 6,
  },
  topSearch:{
	flex:5,
	height:28,
	backgroundColor:'#eee',
	justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position:'relative',
  },
  topSearchIcon:{
	marginLeft: 6
  },
  topRight:{
	  flex:1,
	  height:28,
	  justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
  },
  topRightText:{
	fontSize:12
  },
  topRightRound:{
	width:6,
	height:6,
	borderRadius: 6,
	backgroundColor: 'red',
	position:'absolute',
	right: 23,
	top:1,
  },
    switchBar:{
        height:44,
        width:deviceWidth,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
    },
    switchBarTextView:{
        marginLeft: 5,
        marginRight: 5,
        height:28,
        justifyContent:'center',
        alignItems:'center',
    },
    switchBarTextViewAct:{
       borderBottomWidth: 2,
       borderBottomColor: Theme.color
    },
    switchBarText:{
        color:'#666',
        paddingLeft:2,
        paddingRight: 2,
    },
     switchBarTextAct:{
        color: Theme.color,
    },
});

export default styles