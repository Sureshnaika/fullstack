import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

class Header extends React.Component{

    state = {
        count : 1
    }
render(){
    let count = this.state.count
    return(
    <div className='container'>
        <h1>Resume</h1>
        <img src='Images/suresh.jpg' alt='user'></img>
        <p>Hello {this.props.user} welcome {count} times</p>  
        <button onClick={()=>{this.setState({count:this.state.count+1})}} className='btn btn-success'> +</button>   
        <button onClick={()=>{this.setState({count:this.state.count-1})}} className='btn btn-success ms-5'>-</button>                  
    </div>
    )
}
} 

const App = () => (
<div>
    <Header user={'Suresh'}/>
    

</div>
)

root.render(<App/>);

