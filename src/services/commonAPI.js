import axios from 'axios';

export const commonAPI = async (httpMethod,url,reqbody)=>{
    const reqConfig ={
        method:httpMethod,
        url,
        data:reqbody,
        headers:{
            "Content-Type":"application/json"
        }

    }
    return await axios(reqConfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}