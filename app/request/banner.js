import {
  Alert,
} from 'react-native';
import Request from './index.js'
import API from './api.js'


let Banner = new Object()

Banner.list = ()=>{
    return Request.get(API.BANNER,{id:18})
		.then((data)=>{
			if(data.msg == 'failed'){
				return false
			}else{
				return data.data
			}
		})
}

export default Banner
