
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
    }
});

export default styles