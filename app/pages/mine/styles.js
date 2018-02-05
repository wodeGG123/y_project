
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

  },
top:{
	height:180,
	width:deviceWidth,
	paddingTop: 33,
	backgroundColor:Theme.color,
	alignItems: 'center',
},
user:{
	justifyContent: 'flex-start',
    alignItems: 'center',

},
userImg:{
	width:74,
	height:74,
	borderRadius: 37,
},
userTextWrap:{
	position: 'relative' ,
	marginTop: 10,
},
userText:{
	fontSize:16,
	color:'#ffffff',
},
userSex:{
	position: 'absolute' ,
	right: -20,
	top:2,
},
userInfo:{
	width:225,
	marginTop: 12,
	justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
},
userInfoTextWrap:{
    alignItems: 'center',
    flexDirection:'row',
    flex:1,
},
userInfoText:{
	fontSize: 10,
	color:'#b1e7da',
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