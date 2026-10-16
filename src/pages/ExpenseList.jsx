import React, { useEffect, useState } from 'react'
import { deleteExpenseApi, expenseListApi } from '../services/api'
import { Link } from 'react-router-dom'

function ExpenseList() {

    const [expenses,setExpenses]=useState()

    useEffect(()=>{getAllExpenses()},[])

   async  function getAllExpenses(){

        let response = await expenseListApi()
        if(response.status>=200 && response.status<300){
           
          setExpenses(response.data)
            
        }
    }


    async function hadleDeleteButtonClick(id){

      let response = await deleteExpenseApi(id)

      if (response.status>=200 && response.status<300){

        getAllExpenses()
      }

    }

  return (
    <div>
      
      {expenses&& expenses.length>0 ? (expenses.map((e)=>(
        <div>
          <h1>{e.title}</h1>
          <p>{e.amount}</p>
          <p>{e.category}</p>
          <p>{e.priority}</p>

          <Link to={`/expense/${e.id}`}>Detail</Link>
          <Link to={`/expense-update/${e.id}`}>Update</Link>
          <button onClick={()=>hadleDeleteButtonClick(e.id)}>Delete</button>
          <hr />
        </div>
      ))) :(<p>no expenses added</p>)
      }

    </div>
  )
}

export default ExpenseList
