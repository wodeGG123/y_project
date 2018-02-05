
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
    backgroundColor:'#f0f0f0',
  },
    scrollViewWrap:{
        padding:15
    },
    titleWrap:{
      justifyContent:'center',
      alignItems: 'center',
    },
    title:{
      fontSize: 16,
      color: Theme.textBlack1,
    },
    time:{
fontSize: 10,
      color: Theme.textBlack3,
    },
    timeWrap:{
      marginTop: 10,
justifyContent:'center',
      alignItems: 'center',
    },

    webView:{
      width:deviceWidth-30,
      height:400
    }
    
});

export default styles