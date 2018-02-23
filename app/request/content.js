
import Request from './index.js'
import API from './api.js'

let Content = new Object()



Content.list = (params)=>{
    return Request.get(API.CONTENT_LIST,params)
        .then((data)=>{
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}


export default Content