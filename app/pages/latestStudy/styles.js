
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#f0f0f0',
  },
    scrollViewWrap:{
        marginTop:10,
        backgroundColor:'#ffffff',
    },
    block:{
        width:deviceWidth,
        paddingBottom: 15,
        paddingTop:15,
    },
    recommendWrap:{
        paddingLeft: 15,
        paddingRight: 15,
    },
    hr:{
      width:deviceWidth,
      height:10,
      backgroundColor:'#f0f0f0',
    }
});

export default styles