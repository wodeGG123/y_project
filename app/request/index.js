import 'whatwg-fetch'
import API from './api.js'

let Request = new Object()

Request.get = (url,params)=>{	
	let _url = API.DOMAIN+url;
	return fetch(_url,{
		method: 'GET',
		mode:'cors'
	})
	.then((res)=>{console.log(res)})
	.then((error)=>{console.log(error)})
}

Request.post = (url,params)=>{	
	let _url = API.DOMAIN+url;

	let _form = new FormData();
	//组装data成form格式
    for (var i in params){
      _form.append(i,params[i])
    }
	return fetch(_url,{
		method: 'POST',
		mode:'cors',
		body:JSON.stringify(params)
	})
	.then((res)=>{return res.json()})
	
}

export default Request
