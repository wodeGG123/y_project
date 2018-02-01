
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度
import Theme from '../../../theme.js'

const styles = StyleSheet.create({
  container: {
      paddingLeft:15,
      paddingRight:15,
      height:58,
    justifyContent: 'center',
    alignItems: 'flex-end',
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#e4e4e4',
      paddingBottom:10,
      backgroundColor:'#ffffff',
  },
    title:{
        color:Theme.textBlack1,
        fontSize:20
    },
    left:{
        flex:1,
        justifyContent: 'flex-start',
        flexDirection:'row',
        alignItems: 'flex-end',
    },
    mid:{
        flex:4,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'flex-end',
    },
    right:{
        flex:1,
        justifyContent: 'flex-end',
        flexDirection:'row',
        alignItems: 'flex-end',
    },
    icon:{
        position:'relative',
        top:4,
    }
});

export default styles