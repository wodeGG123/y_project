
import Request from './index.js'
import API from './api.js'

let Order = new Object()


Order.submit = (params)=>{
    return Request.post(API.ORDER_SUBMIT,params)
        .then((data)=>{
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}

Order.list = (params)=>{
    return Request.get(API.ORDER_LIST,params)
        .then((data)=>{
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}

export default Order