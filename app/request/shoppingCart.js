
import Request from './index.js'
import API from './api.js'

let Shoppingcart = new Object()



Shoppingcart.list = (params)=>{
    return Request.get(API.SHOPPINGCART,params)
        .then((data)=>{
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}

Shoppingcart.add = (token,params)=>{
    return Request.post(API.ADD_SHOPPINGCART+token,params)
        .then((data)=>{
            console.log(API.ADD_SHOPPINGCART+token)
            console.log(params)
            console.log(data)
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}


export default Shoppingcart