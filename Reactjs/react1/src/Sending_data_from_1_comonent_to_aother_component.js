import React , {createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

let uSC = createContext()

let C1 = () =>
    {
        const student = 'Suresh'
        return (
            <uSC.Provider value={student}>
                <h1>This {student} first component</h1>
               {/*<C2 student={student}/>*/} 
               <C2 student={'Ramesh'}/>
            </uSC.Provider>
               ) 
    }
 
    let C2 = (props) =>
    {
        
        return ( 
                <div>
                     <h1>This {props.student}, second component</h1>
                    {/* <C3 student={props.student}/>*/}
                    <C3/>
                </div>
               )
    }

    let C3 = () =>
    {
        let st = useContext(uSC)
        return ( 
                <h1>This {st}, Third component</h1>
                
               )
    }

root.render(<C1/>); 

