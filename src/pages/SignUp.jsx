import axios from 'axios';
import React, { useState } from 'react'
import { signUpApi } from '../services/api';


function SignUp() {

    const [user, setUser] = useState({ username: "", password1: "", password2: "", email: "", phone: "" })


    async function hadleSubmit(event) {
        event.preventDefault()
        let response = await signUpApi(user)
        if(response.status>=200 && response.status<300){
            console.log(response.data);
            
        }
    }




    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5 py-12">
            <div className="absolute -left-20 top-10 h-80 w-80 animate-float rounded-full bg-emerald-500/20 blur-3xl"></div>
            <div className="absolute -right-20 bottom-10 h-80 w-80 animate-float rounded-full bg-teal-400/20 blur-3xl [animation-delay:3s]"></div>

            <form action="" onSubmit={hadleSubmit} className="relative w-full max-w-md animate-fade-up space-y-5 rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                <h1 className="text-center text-2xl font-bold text-white">
                    Spend<span className="text-emerald-400">Wise</span>
                </h1>

                <div>
                    <label htmlFor="" className="mb-1.5 block text-sm font-medium text-slate-300">username</label>
                    <input type="text"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-300 focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder='enter username' />
                </div>

                <div>
                    <label htmlFor="" className="mb-1.5 block text-sm font-medium text-slate-300">password1</label>
                    <input
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-300 focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                        onChange={(e) => setUser({ ...user, password1: e.target.value })}
                        type="password" />
                </div>

                <div>
                    <label htmlFor="" className="mb-1.5 block text-sm font-medium text-slate-300">password2</label>
                    <input type="text"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-300 focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                        onChange={(e) => setUser({ ...user, password2: e.target.value })}

                    />
                </div>

                <div>
                    <label htmlFor="" className="mb-1.5 block text-sm font-medium text-slate-300">Enter Email</label>
                    <input type="email"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-300 focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}

                    />
                </div>

                <div>
                    <label htmlFor="" className="mb-1.5 block text-sm font-medium text-slate-300">Phone</label>
                    <input type="text"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-300 focus:border-emerald-400 focus:bg-white/10 focus:ring-4 focus:ring-emerald-400/20"
                        onChange={(e) => setUser({ ...user, phone: e.target.value })}

                        placeholder='enter phone number' />
                </div>

                <button type='submit' className="w-full rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 py-3 font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/50 active:translate-y-0">Register</button>


            </form>
        </div>
    )
}

export default SignUp