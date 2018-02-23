
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度
import Theme from '../../../theme.js'

const styles = StyleSheet.create({
  udBlockWrap:{
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  },
  udBlockItem:{
	width:170,
	height:150,
  },
  udBlockTextColor:{
	color:Theme.color
  },
  udBlockItemImageWrap:{
	width:170,
	height:105,
	borderRadius: 3,
	overflow: 'hidden',
  },
  udBlockItemImage:{
	width:170,
	height:105,
  },
  udBlockItemTitleWrap:{
  	width:170,
  	height:24,
  	flexDirection: 'row',
  	justifyContent: 'flex-start',
  	alignItems: 'center',
  	paddingLeft: 4,
  	paddingRight: 4,

  },
  udBlockItemTitle:{
	fontSize: 14,
	color:Theme.textBlack1,
  },
  udBlockItemTextWrap:{
  	width:170,
  	height:18,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'flex-start',
  	paddingLeft: 4,
  	paddingRight: 4,
  },
  udBlockItemLeftTextWrap:{
	
  },
  udBlockItemLeftText:{
	fontSize: 10,
	color: Theme.textBlack3
  },
  udBlockItemRightTextWrap:{
	
  },
  udBlockItemRightText:{
  	fontSize: 10,
	color: Theme.textBlack3
  },

  lrBlockWrap:{

  },
  lrBlockItem:{
	flexDirection: 'row',
  	justifyContent: 'space-between',
  	marginBottom: 15,
  },
  lrBlockItemImageWrap:{
  	width:170,
	height:105,
	borderRadius: 3,
	overflow: 'hidden',
  },
  lrBlockItemImage:{
  	width:170,
	height:105,
  },
  lrBlockItemRight:{
  	width:165,
  	height:105,
  	position: 'relative',
  },
  lrBlockItemTitleWrap:{
  	paddingTop: 10,

  },
  lrBlockItemTitle:{
	fontSize:14,
	color:Theme.textBlack1
  },
  lrBlockItemTextWrap:{
  	position: 'absolute',
  	width:165,
  	height:24,
  	bottom:0,
  	left:0,
  	flexDirection: 'row',
  	alignItems:'center',
  },
  lrBlockItemIcon:{
  	position: 'relative' ,
  	marginRight: 3
  },
  lrBlockItemText:{
  	fontSize: 12,
  	color:Theme.color
  },
    cartBlockWrap:{
  	 paddingLeft:15,
		paddingRight:15,
	},
    cartBlockItem:{
  		paddingTop:15,
		paddingBottom:15,
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'row',
		borderBottomColor:'#f0f0f0',
		borderBottomWidth:1,
	},
    cartBlockLeft:{
  		width:22,
	},
    cartBlockCheck:{
  		width:22,
		height:22,
		borderRadius:11,
		borderWidth:1,
		borderColor:'#f0f0f0',
        justifyContent:'center',
        alignItems:'center',
	},
    cartBlockCheckCenter:{
  		width:12,
		height:12,
		borderRadius:6,
		backgroundColor:Theme.color
	},
    cartBlockItemImageWrap:{
  		width:142,
		height:86,
	},
    cartBlockItemImage:{
        width:142,
        height:86,
		borderRadius:3,
	},
    cartBlockItemRight:{
		width:160,
        height:86,
		position:'relative',
		paddingTop:6,
	},
    cartBlockItemTitleWrap:{

	},
    cartBlockItemTitle:{
  		fontSize:14,
		color:Theme.textBlack1
	},
    cartBlockItemTextWrap:{

	},
    cartBlockItemText:{
  		fontSize:10,
		color:Theme.textBlack3
	},
    cartBlockItemPriceWrap:{
  		position:'absolute',
		left:0,
		bottom:6,
	},
    cartBlockItemPrice:{
		fontSize:12,
		color:Theme.color2,
	},








    orderBlockWrap:{
		marginLeft:15,
		marginRight:15,
	},
    orderBlockItem:{
        marginBottom: 15,
		backgroundColor:'#ffffff',
		borderRadius:3,
	},
    orderBlockItemTop:{
		paddingLeft:15,
		height:44,
		justifyContent:'flex-start',
		flexDirection:'row',
		alignItems:'center',
		backgroundColor:'#ffffff'
	},
    orderBlockItemTopText:{
  		fontSize:12,
		color: Theme.textBlack3,
	},
    orderBlockItemMid:{
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'row',
		paddingLeft:15,
		paddingRight:15,
		paddingBottom:15,
	},
    orderBlockItemImageWrap:{
		width:142,
		height:86,
		borderRadius:3,
		overflow:'hidden',
	},
    orderBlockItemImage:{
        width:142,
        height:86,
	},
    orderBlockItemRight:{
  		width:160,
		height:86,
	},
    orderBlockItemTitleWrap:{
  		paddingTop:8,

	},
    orderBlockItemTitle:{
  		fontSize:14,
		color:Theme.textBlack1,
	},
    orderBlockItemTextWrap:{
        position: 'absolute',
        width:165,
        height:24,
        bottom:0,
        left:0,
        flexDirection: 'row',
        alignItems:'center',
	},
    orderBlockItemText:{
        fontSize: 12,
        color:Theme.textBlack3
	},
    orderBlockItemBottom:{
		height:40,
		paddingLeft:15,
		paddingRight:15,
		borderTopWidth:1,
		justifyContent:'space-between',
		alignItems:'center',
		flexDirection:'row',
		borderTopColor:'#eeeeee'
	},
    orderBlockItemBottomTextWrap:{

	},
    orderBlockItemBottomText:{
  		fontSize:12,
		color:Theme.textBlack3,
	},
    orderBlockItemBottomButtonWrap:{
		height:22
	},
    orderBlockItemBottomButton:{
		backgroundColor:Theme.color2,
		width:60,
		height:22,
		borderWidth:0,
		borderRadius:3,
	},
    orderBlockItemBottomButtonText:{
		color:'#ffffff',
		fontSize:12
	}

});

export default styles