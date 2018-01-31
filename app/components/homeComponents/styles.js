
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
  	width:deviceWidth-30,
  	backgroundColor:'#ffffff',
  	justifyContent: 'space-between',
  	flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 6,
  },
  topSearch:{
  	flex:9,
  	height:28,
  	backgroundColor:'#f5f5f5',
  	justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position:'relative',
    borderRadius:14,
  },
  topSearchIcon:{
	   marginLeft: 15,
     position: 'relative',
     top:1
  },
  topSearchText:{
    fontSize: 14,
    marginLeft: 4,
    color:Theme.textBlack4,
  },
  topRight:{
    flex:1,
    height:28,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    position:'relative',
  },
  topRightIcon:{

  },
  topRightRound:{
  	width:6,
  	height:6,
  	borderRadius: 6,
  	backgroundColor: 'red',
  	position:'absolute',
  	right: 0,
  	top:6,
  },
    switchBar:{
        height:32,
        width:deviceWidth,
    },
    switchBarScroll:{
        height:32,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
    },
    switchBarTextView:{
        marginLeft: 15,
        marginRight: 15,
        height:28,
        justifyContent:'center',
        alignItems:'center',
    },
    switchBarTextViewAct:{
       borderBottomWidth: 2,
       borderBottomColor: Theme.color
    },
    switchBarText:{
        color:Theme.textBlack1,
        fontSize:14,
    },
     switchBarTextAct:{
        color: Theme.color,
    },
    titleWrap:{
      height:44,
      width:deviceWidth,
      paddingLeft: 15,
      paddingRight: 15,
      justifyContent: 'space-between',
      flexDirection:'row',
      alignItems: 'center',
    },
    titleLeft:{
      borderLeftWidth: 3,
      paddingLeft:7,
      borderLeftColor: Theme.color,
    },
    titleLeftText:{
      fontSize:16,
      color:Theme.textBlack1
    },
    titleRight:{
      
    },
    titleRightText:{
      fontSize:12,
      color:Theme.textBlack2
    },
    courseBlockWrap:{
      width: 134,
      height: 84,
      backgroundColor:'#eee',
      marginRight:6,
      borderRadius:3,
      overflow: 'hidden',
      position: 'relative' 

    },
    courseBlockImage:{
      width: 134,
      height: 84,
    },
    courseBlockTextWrap:{
      position: 'absolute',
      left:0,
      bottom:0,
      width:134,
      height:22,
      paddingLeft:6,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection:'row',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    courseBlockText:{
      fontSize: 12,
      color: '#ffffff',
    }
});

export default styles