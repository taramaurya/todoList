import './App.css';
import React, {useState} from 'react';
import {TodoForm} from  './components/todoForm/todoform.component';
import {TodoList} from './components/todoList/todolist.component';
import './App.css';


export const Todocontext =React.createContext();
function App() {
  
  const [list,setfield]= useState();
  const [alllist,setallfield]= useState([]);

   const addList  = (e)=>{
       setfield(e.target.value);
   }

   const submitForm  = ()=>{
       if(list !==''){
           setallfield(arr => [...arr, list]);
       }
   }

   const clearForm  = ()=>{
       if(alllist !==''){
           setallfield(['']);
       }
   }

   const deletetodo =(val) =>{
   
      var allTodosArray = [...alllist]; // make a separate copy of the array
      allTodosArray.splice(val, 1);
      setallfield(allTodosArray)
  
  }

  return (
    <>
    {/* deletetodo:deletetodo,todo_list:myArray */}
      <Todocontext.Provider value={{functionsubmit:submitForm, todo_function:addList, todo_allclear:clearForm,todo_list:alllist, deletetodo:deletetodo}}>
            <div className='mainContainer'>
                <TodoForm/>
                {/* <h4>{list}</h4> */}
                <TodoList/>
            </div>
    </Todocontext.Provider>
    </>
  );
}

export default App;
