import {useRef, useContext} from 'react'
import { TodosContext } from '../store/todos-context'
import classes from './NewTodo.module.css'

const NewTodo:React.FC = () => {
    const todoCtx=useContext(TodosContext)

    const todoTextInputref =  useRef<HTMLInputElement>(null)
    
    const submitHandler = (event:React.FormEvent) =>{
        event.preventDefault()

        const eneterdText = todoTextInputref.current!.value
        
        
        if (eneterdText.trim().length === 0){
            return 
        }
        todoCtx.addTodo(eneterdText)
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type= 'text' id='text' ref={todoTextInputref} />
            <button>Add Buton</button>
        </form>
    )
}
export default NewTodo 