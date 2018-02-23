
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const deviceHeight = Dimensions.get('window').height;    //设备的高度


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor:'#fff',
  },
  block:{
	width:deviceWidth,
	paddingBottom: 15,
  },
  blockHR:{
	width: deviceWidth,
	height: 10,
	backgroundColor:'#f0f0f0',
  },
  banner: {
	height:150,
  },
    slide:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
	},
	slideImg:{
        flex: 1,
		height:150,
		width:deviceWidth
	},

	slide1: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#9DD6EB'
	},
	slide2: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#97CAE5'
	},
	slide3: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#92BBD9'
	},
	text: {
	    color: '#fff',
	    fontSize: 30,
	    fontWeight: 'bold',
	},
	firstPbWrap:{
		paddingLeft: 15,
	},
	recommendWrap:{
		paddingLeft: 15,
		paddingRight: 15,
	}

});

export default styles