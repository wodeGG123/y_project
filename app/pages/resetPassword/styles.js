
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
        backgroundColor:'#f0f0f0'
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
    itemLeft:{
        flex:2,
    },
    itemLeftText:{
        fontSize:14,
        color:Theme.textBlack1,
    },
    itemMid:{
        flex:6,
    },
    itemMidText:{
        fontSize:14,
        color:Theme.textBlack1,
    },
    itemMidTextInput:{
        fontSize:14,
        color:Theme.textBlack2,
        width:200,
        height:30,
    },
    itemMidText2:{
        fontSize:12,
        color:Theme.textBlack3
    },
    itemRight:{
        flex:1,
        alignItems:'flex-end'
    },
    itemRightIcon:{
        position:'relative',
        top:2,
    },
    submitWrap:{
        paddingLeft:15,
        paddingRight:15,
        marginTop: 15,
    },
    submit:{
        width:deviceWidth - 30,
        height:44,
        borderRadius:3,
        backgroundColor:Theme.color,
        justifyContent:'center',
        alignItems:'center',
        borderWidth: 0,
    },
    submitText:{
        fontSize:16,
        color:'#ffffff',

    }
});

export default styles