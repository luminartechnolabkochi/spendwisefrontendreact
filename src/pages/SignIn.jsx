import React, { useState } from 'react'
import { signInApi } from '../services/api';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    let redirect=useNavigate()

    const[credential,setCredential]=useState({username:"",password:""})

    async function handleSubmit(event){
        event.preventDefault()
        console.log(credential);

        let response = await signInApi(credential)

        if(response.status>=200 && response.status<300){
            console.log(response.data);// {"token":"w3456"}

           let authToken = "Token "+response.data.token
           localStorage.setItem("token",authToken)

            redirect("/dashboard")
           
            
        }
        else{
            console.log(response);
            
        }
        
    }

  return (
    <div>
        <h1>Login</h1>
     
        <form action="" onSubmit={handleSubmit}>

            <div>
                <label htmlFor="">username</label>
                <input type="text"
                onChange={(e)=>setCredential({...credential,username:e.target.value})}
                placeholder='enter username'/>
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="text"
            onChange={(e)=>setCredential({...credential,password:e.target.value})}

                />
            </div>
            <div>
                <button type='submit'>login</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn
