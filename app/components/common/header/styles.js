
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度
import Theme from '../../../theme.js'

const styles = StyleSheet.create({
  container: {
      width:deviceWidth,
      height:58,
    justifyContent: 'flex-end',
    alignItems: 'center',
      borderBottomWidth:1,
      borderBottomColor:'#e4e4e4',
      paddingBottom:10
  },
    title:{
    color:Theme.color,
        fontSize:20
    }
});

export default styles