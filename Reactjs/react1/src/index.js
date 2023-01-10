import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';



const root = ReactDOM.createRoot(document.getElementById('root'));



let obj = {name:"Suresh", age:"25"} 

root.render(<Home user={obj} />);

