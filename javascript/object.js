let student ={
    first_name:"suresh",
    last_name:"Naik",
    age:26,
    gender:'Male',
    profile:['dancer','singer','model'],
    full_name:function()
    {
        return this.first_name + this.last_name
    }
    
}

console.log(student.full_name())

let student_10th={
    first_name:"sachin",
    last_name:'tendulkar'

}

console.log(student.full_name.call(student_10th))
console.log(student.full_name.apply(student_10th))
let fn=student.full_name.bind(student_10th)