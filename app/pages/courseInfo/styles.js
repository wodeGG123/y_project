
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
    introTextWrap:{

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
    introEsItem:{

    },
  introEsText:{
    fontSize:12,
    color: Theme.textBlack3
  },
    introEvaluate:{
        backgroundColor:'#ffffff',
        borderRadius: 3,
        overflow: 'hidden' ,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop:10,
    },
    introEvaluateTop:{
      paddingBottom:20,
    },
    introEvaluateTopTitleWrap:{
      justifyContent:'flex-start',
      flexDirection:'row',
      alignItems:'center',

    },
    introEvaluateTopTitleText:{
      fontSize:14,
        color:Theme.textBlack1,

    },
    introEvaluateTopTitleMarkText:{
      fontSize:12,
        color:Theme.color3,
        backgroundColor: '#f0f0f0',
        paddingLeft:4,
        paddingRight:4,
        marginLeft:10,
        borderRadius:2,
    },
    introEvaluateTopEs:{
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
    },
    introEvaluateTopEsItem:{
        borderWidth:1,
        borderColor:'#cccccc',
        borderRadius:2,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:3,
        paddingRight:3,
        paddingTop:1,
        paddingBottom:1,
        marginRight:6,
    },
    introEvaluateTopEsItemText1:{
       fontSize:10,
        color:Theme.textBlack3,

    },
    introEvaluateTopEsItemText2:{
        fontSize:10,
        color:Theme.textBlack2,

    },
    introEvaluates:{
        paddingLeft:15,
        paddingRight:15,
    },
    introEvaluatesItem:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'flex-start',
    },
    introEvaluatesItemImageWrap:{
       width:30,

    },
    introEvaluatesItemImage:{
        width:30,
        height:30,
        borderRadius:15,
        overflow:'hidden',
    }
});

export default styles