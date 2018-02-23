import {
  Alert,
} from 'react-native';
import Request from './index.js'
import API from './api.js'


let Course = new Object()

Course.list = (params)=>{
    return Request.get(API.COURSE_LIST,params)
		.then((data)=>{
			if(data.msg == 'failed'){
				return false
			}else{
				return data.data
			}
		})
}
Course.info = (params)=>{
    return Request.get(API.COURSE_INFO,params)
		.then((data)=>{
			if(data.msg == 'failed'){
				return false
			}else{
				return data.data
			}
		})
}
Course.play = (params)=>{
    return Request.get(API.COURSE_PLAY,params)
		.then((data)=>{
    		console.log(data)
			if(data.msg == 'failed'){
				return false
			}else{
				return data.data
			}
		})
}

export default Course
