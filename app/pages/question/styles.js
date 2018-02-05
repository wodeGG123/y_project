
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
      backgroundColor:'#f0f0f0',
  },
    scrollViewWrap:{
        paddingTop:10
    },
    block:{

        width:deviceWidth,
        paddingBottom: 15,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#ffffff'
    },
    question:{
        paddingTop:15,
        paddingBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',
    },
    questionTop:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',

    },
    questionTitle:{

    },
    questionTitleText:{
        fontSize: 16,
        color: Theme.textBlack1,
    },
    questionButtonWrap:{
      height:22,
    },
    questionButton:{
        borderWidth:1,
        borderColor:Theme.color,
        backgroundColor:'#ffffff',
        width:60,
        height:22,
        borderRadius:11,
    },
    questionButtonText:{
        fontSize:12,
        color:Theme.color,
    },
    questionContent:{
      paddingLeft:10,
        paddingRight:10,
        marginTop:4,

    },
    questionContentText:{
      fontSize:12,
        color:Theme.textBlack3,
        lineHeight:16,
    }

});

export default styles