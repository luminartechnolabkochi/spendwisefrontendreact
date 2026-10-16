import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveExpenseApi } from '../services/api'

function ExpenseDetail() {

    const [expense,setExpense]=useState()

    let {id}=useParams()
    useEffect(()=>{getExpenseDetail()},[id])

    async function getExpenseDetail(){
        let response = await retrieveExpenseApi(id)
        if(response.status>=200 && response.status<300){
            setExpense(response.data)
        }
    }

  return (
    <div>
      
      {expense&&(
        <div>
            <h1>{expense.title}</h1>
            <p>{expense.priority}</p>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <p>{expense.notes}</p>
        </div>
      )}
    </div>
  )
}

export default ExpenseDetail
