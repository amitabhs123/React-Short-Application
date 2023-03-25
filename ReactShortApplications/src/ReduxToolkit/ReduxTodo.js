import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./todoSlice";

export default function ReduxTodo (){
    const [data, setData] = useState('')

    // useSelector help to get a data from store so basically it have state have get a value by name
    const todos = useSelector((state) => {
        return state?.tasks
    })

    const dispatch = useDispatch()
    // dispatch is perform post action toward store like delete, update, post

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(
            addTask({
                task: data,
            })
        )
        setData('')
    }
    
    const  removeTask = (ids) => {
        dispatch(
            deleteTask({
            id: ids,
        }))
    }
    return (
        <div>
            <h2>Todo List</h2>
            <input placeholder="Add item in list" type='text' onChange={(e) => setData(e.target.value)} />
            <button onClick={onSubmit}>Add Item</button>
            {todos.map(data => (
                <li>
                    <div>
                        {data.name}
                    </div>
                    <div>
                        <button onClick={() => removeTask(data.id)}>
                            Remove Item
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}