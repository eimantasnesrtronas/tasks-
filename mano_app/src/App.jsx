
import { useState } from 'react'
import './App.css'

function App()  {
  
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  


  return (
    <>
    <div>
      {error ? <div>Klaida! {error} </div> : null}
    </div>
      <div  >
        <a class="active" href="index.html">Main page</a>
        <a href="https://www.youtube.com/shorts/og4_0LWiefI">My JBL speaker</a>
        <a href=""></a>
        <a href=""></a>
      </div>
      
      
      <h1>hello world</h1>
      <div >
          <input 
            type="text"
            placeholder="Task"
            onChange={(e) =>{
              setTask(e.target.value);
             } } 
             value={task}
          />

          <button
           
           onClick={() =>{
            setError(null)
            
            
            if(task.trim().length == 0){
              setError("Task negali buti tuscias")
              return;
            }

            if(task.trim().length == 5){
             setError("Task negali buti ilgesnis negu 5 raides ")
             return;
            }
              setTasks(()=> [... tasks, task]);
              setTask("")
            }}
          >
            Add
          </button>
        
      </div>
      <div>
          <ul>
            {tasks.map((task)=> (
              <li>{tasks}</li>
            )) }
              
          </ul>
      </div>


      

      
    </>
  )
}

export default App
