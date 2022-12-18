console.log("start")
setTimeout(function cb(){


    console.log("Welcome")
},5000



);
console.log('end')

function ck(){
    fetch("https://www.netflix.com/in/")
    .then(function cb(){
        console.log("welcome")
    })
}