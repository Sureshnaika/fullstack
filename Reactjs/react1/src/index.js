import React , {useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

let initialTasks = [
    {
        id:1,
        title:'Attend meeting',
        complete: false
    },
    {
        id:2,
        title:'Analyse the requirement',
        complete: false
    },
    {
        id:3,
        title:'Create Bioler Plate',
        complete: false
    }
]

let reducer = (state,action) =>{
    console.log(action.type)
switch(action.type){
    case 'COMPLETE':
    return state.map((task) =>
    {
        if (task.id === action.id)
        {
            return {...task, coplete: !task.complete}
        }
        else
        {
            return task
        }
    
    })
    default:
        {
            return state
        }
}
}


let C1 = () => 
     {  
        const [tasks,dispatch] = useReducer(reducer,initialTasks)
        
        let changeTheStatus = (task) =>{
            dispatch({id:task.id, type:'COMPLETE'})
        }
        return( 
           
            <div>
                {
                    tasks.map( (task) => 
                    (

                        <div key={task.id}>
                        <label>
                        <input type='checkbox' 
                        checked={task.complete} 
                        onChange={()=> changeTheStatus(task)}/>
                       &nbsp; {task.title}
                        </label>
                        </div>  
                    )
                   ) }
            </div>
        )
      }
 
root.render(<C1/>); 

