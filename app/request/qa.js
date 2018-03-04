
import Request from './index.js'
import API from './api.js'

let QAQ = new Object()
let QAA = new Object()

QAQ.add = (params)=>{
    return Request.post(API.QA_Q_ADD,params)
        .then((data)=>{
            console.log(data)
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}
QAQ.list = (params)=>{
    return Request.get(API.QA_Q_LIST,params)
        .then((data)=>{
            console.log(data)
            console.log(params)
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}

QAA.add = (params)=>{
    return Request.post(API.QA_A_ADD,params)
        .then((data)=>{
            console.log(data)
            console.log(params)
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}
QAA.list = (params)=>{
    return Request.get(API.QA_A_LIST,params)
        .then((data)=>{
            console.log(data)
            console.log(params)
            if(data.msg == 'failed'){
                return false
            }else{
                return data.data
            }
        })
}

export {QAQ,QAA}