
import Storage from 'react-native-storage'
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
			if(data.msg == 'success'){
				
			}else{

			}
			return data;
		})
}
Member.LoginOut = (data)=>{
	return Request.post(API.LOGIN_OUT,{
		"accessToken":data
		})
}
Member.Regist = ()=>{

	return Request.post(API.REGIST,{
		  "type":"mobile",
		  "SignupForm": {
		    "email": "dbzhaoxk@163.com",
		    "mobile": 12345678910,
		    "password": "123456",
		    "loginname": "dbzhaoxk"
		  }
		}
)

	
}

export default Member
