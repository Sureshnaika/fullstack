import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './Images/suresh.jpg';



const root = ReactDOM.createRoot(document.getElementById('root'));




let person = 'Suresha N'

let headerStyle = {
        width: '100%',
        background: '#ff0000',
        height: '100px',


}

const Candidate = () =>(
    <div>
        <img src={userImage} alt='suresh'></img>
        <h4>Suresha N</h4>
    </div>
    
)

let Skillset = () => {
    const skills = ['HTML','CSS','Reactjs','Nodejs','MongoDB'];
    var skill_set =''
    if (person === 'Suresha N'){                                                              //function
         skill_set = skills.map((skill) => <li key={skill}>  {skill}</li>)
    }
    else{
         skill_set = <h3>No data found</h3>
    }
    
    return skill_set
} 

const Header = () =>(
    <div style={headerStyle}>
        <h1>Resume</h1>
        <p>In this tutorial we will learn about reactjs</p>                       
    </div>
)

const Content = () =>(
    <div className='main-wrapper'>
    
    <Candidate/>
    <ul>
        <Skillset/>
    </ul>
    <p>In this tutorial we will learn about reactjs</p>
</div>
)
const Footer = () =>(
    <div className='footer-wrapper'>
        <h4>This is footer</h4>
    </div>
)







const App = () => (
<div>
    <Header/>
    <Content/>
    <Footer/>

</div>
)

root.render(<App/>);

