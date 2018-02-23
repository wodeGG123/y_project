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
        // "LoginForm":{
        //     "loginname":'yeshulin',
        //     "password":'123456'
        // },
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
	.then((data2)=>{
        if(data2.msg == 'failed'){
            return data2.error
        }else{
        	//获取全局store里面userinfo的值，修改并保存
			let userInfo = store.getState().userInfo;
            userInfo.userinfo[Object.keys(data.Member)[0]] = data.Member[Object.keys(data.Member)[0]]
			store.dispatch({
				type:'SET_USER_INFO',
				data:userInfo
			});
            //把store里面的userinfo的值赋给本地存储
			storage.save({
				key:'userInfo',
				data:userInfo
			})
            return true
        }
	})
}

Member.resetPWD = (data)=>{
	console.log(data);
	return Request.post(API.RESET_PWD,data)
	.then((data2)=>{
		console.log(data2)
		return data2
	})
}

export default Member
