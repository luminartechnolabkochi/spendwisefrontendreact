import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveExpenseApi } from '../services/api'

function ExpenseUpdate() {
    
    let { id } = useParams()
    useEffect(() => { getExpenseDetail() }, [id])

    var categories = [
        ["food", "food"],
        ["travel", "travel"],
        ["shopping", "shopping"],
        ["bills", "bills"],
        ["health", "ealth"],
        ["entertainment", "entertainment"],
        ["other", "other"]
    ]

    const [expense, setExepense] = useState({ title: "", amount: 0, category: "", priority: "", notes: "" })

    async function getExpenseDetail() {
        let response = await retrieveExpenseApi(id)
        if (response.status >= 200 && response.status < 300) {
            setExepense(response.data)

        }

    }


    return (
        <div>
            <form action="" >
                <div>
                    <label htmlFor="">title</label>
                    <input type="text"
                        onChange={(e) => setExepense({ ...expense, title: e.target.value })}
                        placeholder='enter title'
                        value={expense.title}
                    />
                </div>
                <div>
                    <label htmlFor="">amount</label>
                    <input type="number"
                        onChange={(e) => setExepense({ ...expense, amount: e.target.value })}
                        placeholder='enter amount'
                        value={expense.amount}
                    />
                </div>
                <div>
                    <label htmlFor="">category</label>
                    <select
                        onChange={(e) => setExepense({ ...expense, category: e.target.value })}
                        value={expense.category}
                        name="" id="">
                        {categories.map((c) => (
                            <option value={c[0]}>{c[1]}</option>
                        ))}
                    </select>

                </div>

                <div>
                    <label htmlFor="">notes</label>
                    <input type="text"
                        onChange={(e) => setExepense({ ...expense, notes: e.target.value })}
                        value={expense.notes}

                    />
                </div>
                <div>
                    <label htmlFor="">select priority</label>
                    <select
                        onChange={(e) => setExepense({ ...expense, priority: e.target.value })}
                        value={expense.priority}
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

export default ExpenseUpdate
