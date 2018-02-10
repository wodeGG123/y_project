import {
  Alert,
} from 'react-native';
import Request from './index.js'
import API from './api.js'


let Member = new Object()


Member.Login = (data)=>{
	return Request.post(API.LOGIN,{
		"LoginForm":{
        "loginname":data.username,
        "password":data.password
		    },
		    "isToken":true
		})
		.then((data)=>{
			  if(data.msg == 'failed'){
		        Alert.alert(
		          '用户名密码或错误！',
		          '',
		          [
		            {text: 'OK', onPress: () => {}},
		          ],
		          { cancelable: false }
		        )
		        return false
		      }else{
				storage.save({
					key:'userInfo',
					data:data.data
				})
				return data.data
		      }
		})
}
Member.LoginOut = (data)=>{
	console.log(data);
	return Request.post(API.LOGIN_OUT,{
		"accessToken":data.toString()
		})
	.then((data2)=>{
		console.log(data2)
			if(data2.msg == 'failed'){
				storage.remove({
					key: 'userInfo'
				});
				return false
			}else{
				storage.remove({
					key: 'userInfo'
				});
				return data2
			}
			
		})
}
Member.Regist = (data)=>{

	return Request.post(API.REGIST,{
		  "type":"mobile",
		  "SignupForm": {
		    "email": data.mobile+"@xx.com",
		    "mobile": parseInt(data.mobile),
		    "password": data.password,
		    "loginname": 'X'+data.mobile,
		    "top_userid": data.top_userid
		  }
		})
		.then((data)=>{
			if(data.msg == 'failed'){
				return data.error
			}else{
				return true
			}
		})

	
}
Member.edit = (data)=>{
	return Request.post(API.EDIT_USERINFO,data)
	.then((data)=>{console.log(data)})
}

export default Member
