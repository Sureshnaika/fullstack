
function Home(props) {

    let alertMsg = (name) => alert('Hello'+name+'!');

    return (
      <h1 onClick={()=>alertMsg("Suresh")}>Hello {props.user.name},
      your age is {props.user.age}</h1>
    );
  }
  
  export default Home;