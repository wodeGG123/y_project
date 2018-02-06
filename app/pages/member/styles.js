
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
    position: 'relative' ,
  },
  background:{
    width:deviceWidth,
    height:deviceHeight,
    position: 'absolute',
    left:0,
    top:0,
  },
  memberBlock:{
	  width:deviceWidth-60,
  },
  memberInputBlock:{
    width:deviceWidth-60,
    height:50,
    backgroundColor:'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative' ,
    borderRadius: 25,
    marginBottom: 20,
  },

  memberInputWrap:{
    height:50,
    paddingLeft: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  memberInput:{
    width:240,
    height:30,
  	fontSize: 16,
  	color:'rgba(255,255,255,0.6)',
  },
  memberIconWrap:{
    width:44,
    height:44,
    justifyContent: 'center',
    alignItems: 'center',
  },
   memberIcon:{
    color:'#999999',
  },
  memberButtonWrap:{
    width:deviceWidth-60,
    marginTop: 30,
  },
  memberButton:{
    backgroundColor: '#ffffff',
    borderWidth:0,
    height: 50,
    borderRadius:25,
  },
  memberButtonText:{
    fontSize: 18,
    color:Theme.color
  },
  memberAlertTextBlock:{
    width:deviceWidth-40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memberAlertTextWrap:{
    flexDirection: 'row',
  },
  memberAlertText:{
    color:'rgba(255,255,255,0.6)',
    fontSize:12,
    textDecorationLine: 'underline',
    backgroundColor:'transparent',
  },
  memberSendCode:{
    width:120,
    height: 50,
    backgroundColor:Theme.color,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
  },
  memberSendCodeText:{
    fontSize:16,
    color:'#ffffff'
  },
   memberInputBlock2:{
    width:deviceWidth-60,
    height:50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  memberInputWrap2:{
    width:180,
    height:50,
    paddingLeft: 40,
    backgroundColor:'rgba(0,0,0,0.4)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
   memberInput2:{
    width:140,
    height:30,
    fontSize: 16,
    color:'rgba(255,255,255,0.6)',
  },
});

export default styles