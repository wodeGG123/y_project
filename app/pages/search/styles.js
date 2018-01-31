
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import Theme from '../../theme.js'

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    hr:{
     width:deviceWidth,
        height:1,
        backgroundColor:"#eeeeee"
    },
    scrollViewWrap:{
        paddingTop:15
    },
    block:{
        width:deviceWidth,
        paddingBottom: 15,
    },
    recommendWrap:{
        paddingLeft: 15,
        paddingRight: 15,
    },
    top:{
        height: 58,
        width:deviceWidth,
        backgroundColor:'#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 6,
        paddingLeft:15,
        paddingRight:15,
    },
    topSearch:{
        flex:7,
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
        width:240,
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
    topRightText:{
        fontSize:16,
        color:Theme.color
    },
    tool:{

    },
    toolTitleWrap:{
      height:44,
        width:deviceWidth,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15
    },
    toolTitle:{
      fontSize:14,
        color:Theme.textBlack3,
    },
    toolItemWrap:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap:'wrap',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:15,

    },
    toolItem:{
      padding:10,
        borderRadius:3,
        marginRight:10,
        marginBottom:10,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toolItemText:{
      fontSize: 12,
        color:Theme.textBlack1
    },
    toolItemText2:{
        fontSize: 12,
        color:Theme.color
    }

});

export default styles