import React, { useState } from 'react'

function ExpenseAdd() {

    var categories = [
        ["food", "food"],
        ["travel", "travel"],
        ["shopping", "shopping"],
        ["bills", "bills"],
        ["health", "ealth"],
        ["entertainment", "entertainment"],
        ["other", "other"]
    ]

    const [expense,setExepense]=useState({title:"",amount:0,category:"",priority:"",notes:""})

    function handleSubmit(event){
        event.preventDefault()
        console.log(expense);
        
    }

    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">title</label>
                    <input type="text" 
                    onChange={(e)=>setExepense({...expense,title:e.target.value})}
                    placeholder='enter title'/>
                </div>
                <div>
                    <label htmlFor="">amount</label>
                    <input type="number"
                    onChange={(e)=>setExepense({...expense,amount:e.target.value})}
                    placeholder='enter amount' />
                </div>
                <div>
                    <label htmlFor="">category</label>
                    <select 
                    onChange={(e)=>setExepense({...expense,category:e.target.value})}
                    name="" id="">
                        {categories.map((c)=>(
                            <option value={c[0]}>{c[1]}</option>
                        ))}
                    </select>
                   
                </div>

                <div>
                    <label htmlFor="">notes</label>
                    <input type="text" 
                    onChange={(e)=>setExepense({...expense,notes:e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="">select priority</label>
                    <select 
                    onChange={(e)=>setExepense({...expense,priority:e.target.value})}
                    name="" id="">
                        <option value="need">need</option>
                        <option value="want">want</option>
                    </select>
                </div>

                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default ExpenseAdd
