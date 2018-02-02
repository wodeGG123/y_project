
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#f0f0f0',
  },
  top:{
    width:deviceWidth,
    height:210,
    position: 'relative' ,
    paddingTop: 20
  },
  videoWrap:{
    width:deviceWidth,
    height:210,
    position: 'relative' ,
    backgroundColor:'#000000',
  },
  videoTool:{
     width:deviceWidth,
     paddingLeft: 15,
     paddingRight: 15,
     paddingTop:15,
     height:24,
     position: 'absolute',
     justifyContent:'space-between',
     flexDirection: 'row' ,
     alignItems:'center',
     top:20,
     left:0,
  },
  videoToolIcon:{
     backgroundColor:'transparent'
  },
  scrollViewWrap:{
    
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  introWrap:{
    backgroundColor:'#ffffff',
    borderRadius: 3,
    overflow: 'hidden' ,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  introText:{
    fontSize: 12,
    color:Theme.textBlack2,
  },
  introEsWrap:{
    justifyContent: 'space-between',
    flexDirection: 'row' ,
    alignItems:'center',
    marginTop: 15,
  },
  introEsText:{
    fontSize:12,
    color: Theme.textBlack3
  }

});

export default styles