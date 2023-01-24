import React , {useRef} from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

let C1 = () => 
     {
         let inpEl = useRef()
         let calBack = () => inpEl.current.value='Suresh'

        return( 

            <div>
                <input type='text' ref={inpEl}/>
                {/* <button onClick={()=>inpEl.current.value='Suresh'}>Click me</button> */}
                <button onClick={calBack}>Click me</button>
            </div>
        )


     }

root.render(<C1/>); 

