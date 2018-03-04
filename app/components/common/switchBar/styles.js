
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度
import Theme from '../../../theme.js'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#f0f0f0'
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
});

export default styles