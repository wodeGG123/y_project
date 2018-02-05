
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
    position:'relative',
  },
  tip:{
    width:deviceWidth,
    height:50,
    borderTopWidth:1,
    borderTopColor: '#eeeeee',
    backgroundColor:'#ffffff',
    paddingLeft:15,
    paddingRight:15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    
  },
  tipPrice:{
    
  },
  tipPriceText:{
    fontSize:16,
    color:Theme.color3
  },
  tipButton:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
  },
  tipCartWrap:{
    height:50,
    width:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Theme.color
  },
  tipCart:{
    width:26,
  },
  tipButtonTextWrap:{
    width:100,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Theme.color2
  },
  tipButtonText:{
    fontSize:14,
    color:'#ffffff',
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
    paddingBottom:15,
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
        
    },
    introEvaluatesItem:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'flex-start',
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        paddingTop:16,
        paddingBottom:16,
    },
    introEvaluatesItemImageWrap:{
       width:40,

    },
    introEvaluatesItemImage:{
        width:40,
        height:40,
        borderRadius:20,
        overflow:'hidden',
    },
    introEvaluatesItemRight:{
        width:250,        
    },
    introEvaluatesItemRightTop:{
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
    },
    introEvaluatesItemRightTitle:{
        fontSize:14,
        color:Theme.textBlack3,
    },
    introEvaluatesItemRightStars:{
      marginLeft:15,
      justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
    },
    introEvaluatesItemRightStar:{
      marginRight:4,
    },
    introEvaluatesItemContent:{
      marginTop:10,
      backgroundColor:'#f0f0f0',
      borderRadius:2,
      paddingLeft:10,
      paddingRight:10,
      paddingTop:4,
      paddingBottom:4,
    },
    introEvaluatesItemContentText:{
      fontSize:12,
      color:Theme.textBlack3,
      lineHeight: 16
    },
    sections:{
       backgroundColor:'#ffffff',
        borderRadius: 3,
        overflow: 'hidden',
        paddingTop: 25,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 15,
    },
    section:{
        borderLeftWidth: 1,
        borderLeftColor: '#eeeeee',
        position:'relative',
        paddingBottom:10,
    },
    sectionMark:{
        position: 'absolute' ,
        width:8,
        height:8,
        backgroundColor:'#eeeeee',
        borderRadius:4,
        left:-4,
        top:4,
    },
    sectionTitle:{
      paddingLeft:15,
      justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
    },
    sectionTitleText1:{
      fontSize: 14,
      color:Theme.textBlack1,
    },
    sectionTitleText2:{
      fontSize: 12,
      color:Theme.textBlack3,
      marginLeft:10,
    },
    sectionCourses:{
      paddingLeft:20,
     
      paddingTop:15,
    },
    sectionCourse:{
      paddingLeft:10,
      marginBottom: 8,
      justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',

    },
    courseMark:{
      position: 'relative' ,
      top:1,
    },
    sectionCourseText:{
        fontSize:12,
        color:Theme.textBlack2,
        marginLeft:6,
    },
    consult:{
      padding:15,
      backgroundColor:'#ffffff',
      paddingBottom:30,
      borderRadius: 3,
    },
    consultInputWrap:{
      height:44,
      justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:3,
        overflow: 'hidden' ,
    },
    consultInputLeft:{
        backgroundColor:'#f0f0f0',
        flex:1,
        height:44,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
    },
    consultInput:{
      width:200,
      height:24,
      fontSize:14,
      color:Theme.textBlack1,
    },
    consultInputRight:{
        width:64,
        height:44,
        backgroundColor:Theme.color,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    consultInputRightText:{
        fontSize:14,
        color:'#ffffff',
    },
    question:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'flex-start',
        paddingTop:20,
    },
    questionLeft:{
      width:40,
    },
    questionLeftImg:{
      width:40,
      height:40,
      borderRadius:20,
    },
    questionMid:{
      width:210,
    },
    questionMidTitleWrap:{
      justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    questionMidTitle:{
      fontSize: 14,
      color:Theme.textBlack3
    },
    questionMidTitleTime:{
      fontSize:10,
      color:Theme.textBlack3
    },
    questionMidContent:{
      marginTop:10,
      backgroundColor:'#f0f0f0',
      borderRadius:2,
      paddingLeft:10,
      paddingRight:10,
      paddingTop:4,
      paddingBottom:6,
    },
    questionMidContentText:{
      fontSize:12,
      color:Theme.textBlack3,
      lineHeight: 16
    },
    questionRight:{
      width:30,

    },
    questionRightLike:{

    },
    questionRightLikeIcon:{

    },
    questionRightLikeText:{
      fontSize:12,
      color:Theme.textBlack3,
    }

});

export default styles