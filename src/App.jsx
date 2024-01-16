
import './App.css';
import { useState } from 'react';
function App(){
  const [todos,setTodos]=useState([])
  const [toDo,setToDo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDos} onChange={(e)=>setToDos([
          e.target.value
        ])} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDo(
          [...toDo,{id:Date.now(),text:toDos,status:false}]
        )} className="fas fa-plus"></i>
      </div>
      </div>
  )
}
export default App;