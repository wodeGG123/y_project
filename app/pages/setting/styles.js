
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#f0f0f0'
  },
    itemsWrap:{
        marginTop:10,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#ffffff',
    },
    itemWrap:{
        width:deviceWidth-30
    },
    item:{
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        height:44,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',
    },
    itemText:{
        marginLeft:8,
        fontSize:14,
        color:Theme.textBlack1,
    },
    itemIcon:{
        position:'relative',
        top:2,
    }
});

export default styles