import React, { useContext,Fragment } from "react";
import { Todocontext } from "../../App";
import "./todoform.component.css";



export const TodoForm = () =>{
    const todo =useContext(Todocontext);
    //console.log(todo);

//    const [list,setfield]= useState();
//    const [alllist,setallfield]= useState([]);

//     const addList  = (e)=>{
//         setfield(e.target.value);
//     }

//     const submitForm  = (e)=>{
//         if(list !==''){
//             setallfield(arr => [...arr, list]);
//         }
//     }

//     const clearForm  = (e)=>{
//         if(alllist !==''){
//             setallfield(['']);
//         }
//     }

    return(
        <Fragment>
            <div className="todo_title">
                <h2 className="todo_title_text">To Do list</h2>
            </div>
            <div>
                <input type='text' onChange={todo.todo_function} className="input_field"/> 
            </div>
            <div className="btn_container">
                <button className="clr_btn" onClick={()=> {todo.todo_allclear()}}>Clear</button>
                <button className="add_btn" onClick={()=>{ todo.functionsubmit() }}>Add</button> 
            </div>
            <div className="devider"/>
        </Fragment>
    )
}