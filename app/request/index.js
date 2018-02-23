import 'whatwg-fetch'
import API from './api.js'

let Request = new Object()

Request.get = (url,params)=>{	
	let _url = API.DOMAIN+url;
    let paramsArray = [];
    //拼接参数
	if(params){
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (_url.search(/\?/) === -1) {
            _url += '?' + paramsArray.join('&')
        } else {
            _url += '&' + paramsArray.join('&')
        }
	}
    return fetch(_url,{
		method: 'GET',
		mode:'cors'
	})
	.then((res)=>{
		return res.json()
    })
}

Request.post = (url,params)=>{	
	let _url = API.DOMAIN+url;

	return fetch(_url,{
		method: 'POST',
		mode:'cors',
		body:JSON.stringify(params)
	})
	.then((res)=>{return res.json()})
	
}

export default Request
