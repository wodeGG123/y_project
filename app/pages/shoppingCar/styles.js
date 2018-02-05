
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度
import Theme from '../../theme.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    scrollViewWrap:{
        paddingTop:15
    },
    block:{
        width:deviceWidth,
        paddingBottom: 15,
        backgroundColor:'#ffffff',
    },
    tool:{
        height:50,
        width:deviceWidth,
        paddingLeft:15,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        backgroundColor:'#ffffff',
        borderTopColor: '#e4e4e4',
        borderTopWidth: 1,
    },
    toolLeftText:{
        fontSize:12,
        color: Theme.textBlack3,
    },
    toolRight:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
    },
    toolRightPrice:{
        marginRight:15,
    },
    toolRightPriceText:{
        fontSize:16,
        color:Theme.color3
    },
    toolRightButton:{
        height:50,
        width:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Theme.color2
    },
    toolRightButtonText:{
        fontSize:14,
        color:'#ffffff',
    },

});

export default styles