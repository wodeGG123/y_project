import {
  Alert,
} from 'react-native';
import Request from './index.js'
import API from './api.js'


let Common = new Object()

Common.categroy = ()=>{
    return Request.get(API.COURSE_CATEGORY)
		.then((data)=>{	
			if(data.msg == 'failed'){
				return false
			}else{
				return data
			}
		})
}

export default Common
