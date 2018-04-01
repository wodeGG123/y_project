
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
    textWrap:{
      width:deviceWidth,
      paddingLeft:15,
      paddingRight:15,
      marginBottom:10,
      justifyContent:'flex-start',
      alignItems:'center',
      flexDirection:'row',
      flexWrap:'wrap',
    },
    text:{
      fontSize:12,
      color:Theme.textBlack1,
      lineHeight:24,
      
    },
    imgWrap:{
      width:deviceWidth,
      paddingTop:15,
      paddingBottom:15,
      justifyContent:'center',
      alignItems:'center',
      
    },
    textDec:{
      borderWidth:1,
      borderColor:'#a4a4a4',
      padding:3,
      paddingLeft:6,
      paddingRight:6,
      fontSize:12,
      color:Theme.textBlack1,
      borderRadius:3,
    },
    copyButton:{
      backgroundColor:'#ffffff',
      borderWidth:0,
      width:40,
      height:20,
      borderRadius:3,
      marginLeft:3,
      position:'relative',
      top:5,
    },
    copyButtonText:{
      fontSize:12,
      color:Theme.textBlack1
    },

    textWrap2:{
      width:deviceWidth,
      justifyContent:'center',
      alignItems:'center',
    },
    text2:{
      width:280,
      fontSize:12,
      color:Theme.textBlack1,
      textAlign:'center',
      lineHeight:24,
    }
    
});

export default styles