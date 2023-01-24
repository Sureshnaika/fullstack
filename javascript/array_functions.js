let arr1=[1,2,3,4,'apple','banana']
arr1.forEach(arr1 => console.log(arr1))

let y=arr1.map(i => console.log(i))

let x=arr1.filter(i =>i>=3)   
console.log(x)

let arr2=[1,2,3,4,5]
let sum=arr2.reduce((add,i)=>add+i)
console.log(sum)

let a=arr2.every(i => i>3)     //if everything is greater than then it will return true , else false
console.log(a)

let b=arr2.some(i=>i>3)
console.log(b)
