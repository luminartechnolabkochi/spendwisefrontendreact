import axios from "axios";




export function signUpApi(payLoad){
    let headers={
        "Content-Type":"application/json"
    }
    return axios.post("http://127.0.0.1:8000/accounts/signup/",payLoad,{headers})
}