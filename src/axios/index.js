import JsonP from 'jsonp'
import axios from "axios";
export default class Axios {
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,res){
                if(res.status === 'success') {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    }

    static ajax(options){
        let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if (response.status === 200){
                    let res = response.data;
                    if (res.code === '0'){
                        resolve(res);
                    }else{
                        resolve(res);
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}
