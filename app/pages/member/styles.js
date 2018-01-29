
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
  },
  loginLogo:{
  	width:deviceWidth,
  	height:200,
  	justifyContent: 'center',
    alignItems: 'center',
  },
  memberBlock:{
	  width:deviceWidth-40,
  },
  memberInputBlock:{
  	width:deviceWidth-40,
  	height:44,
  	backgroundColor:'#fff',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative' ,
  },
  memberInputWrap:{
    height:44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberInput:{
    width:240,
    height:30,
  	fontSize: 16,
  	color:'#666',
    backgroundColor:'#ffffff',
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
    width:deviceWidth-40,
    marginTop:10
  },
  memberButton:{
    backgroundColor: '#3385ff',
    borderWidth:0
  },
  memberButtonText:{
    fontSize: 18,
    color:'#ffffff'
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
    color:'#999999',
    fontSize:12
  },
  memberSendCode:{
    position: 'absolute', 
    right:6,
    top:6,
    width:80,
    height:32,
    backgroundColor:'#eee',
    borderWidth:1,
    borderColor:'#eee',
  },
  memberSendCodeText:{
    fontSize:12,
    color:'#666'
  }
  
});

export default styles