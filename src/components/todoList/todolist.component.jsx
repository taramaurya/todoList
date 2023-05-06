import React, {useContext,Fragment} from "react";
import {Todo} from '../todo/todo.component';
import {Todocontext } from "../../App";

export const TodoList =()=>{
    const todoList =useContext(Todocontext);

  //  console.log(todoList.todo_list);
    return(
        <Fragment>
            {
                todoList.todo_list.map((element,index)=>{
                     return <Todo  key={index} data={element} index={index}/>
                })
            }
        </Fragment>
    )
}