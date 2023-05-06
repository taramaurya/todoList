import React,{useContext,Fragment} from "react";
import {Todocontext } from "../../App";
import './todo.component.css'

export const Todo =(props)=>{

    const todoList =useContext(Todocontext);
    console.log(props.data);
  return (
        <Fragment>
            {
                props.data &&
                <div className="todo_list_container">
                    <p className='list_text'>{props.data}</p>
                    <span className='button_delete' onClick={()=>{todoList.deletetodo(props.index)}}>Delete</span>
                </div>
            }
        </Fragment>
    )
}