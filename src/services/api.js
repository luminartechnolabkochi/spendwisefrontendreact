import axios from "axios";




export function signUpApi(payLoad){
    let headers={
        "Content-Type":"application/json"
    }
    return axios.post("http://127.0.0.1:8000/accounts/signup/",payLoad,{headers})
}

export function signInApi(payLoad){
    let headers={
        "Content-Type":"application/json"
    }

    return axios.post("http://127.0.0.1:8000/accounts/token/",payLoad,{headers})


}



export function expenseListApi(){

    let token = localStorage.getItem("token")
     let headers={
        "Content-Type":"application/json",
        "Authorization":token
    }

    return axios.get("http://127.0.0.1:8000/transactions/expenses/",{headers})

}


export function deleteExpenseApi(id){

    let token = localStorage.getItem("token")
    let headers={
        "Content-Type":"application/json",
        "Authorization":token
    }

    return axios.delete(`http://127.0.0.1:8000/transactions/expenses/${id}/`,{headers})


}