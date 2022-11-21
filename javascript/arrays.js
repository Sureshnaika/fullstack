let arr1=Array(1,2,3,4,5,)
console.log(arr1)
console.log(arr1.length)

let arr3="India".split('')
console.log(arr3)

let arr4=Array(3).fill('banana')         //it will addd 8 banana items in arra
console.log(arr4)

console.log(arr1[3])

let arr2=['apple','banana']
console.log(arr2)
console.log(arr1.concat(arr4))

let arr5=[1,2,3,4,'banana','apple']
console.log(arr5)

arr5.pop()
console.log(arr5)

arr5.push('abcd',1,2,3,4)
console.log(arr5)

arr5.shift()
console.log(arr5)

arr5.unshift(100)
console.log(arr5)

arr5=[5,5,6,7,1,3,9]
arr5.sort()
console.log(arr5)
arr5.reverse()
console.log(arr5)

let arr6=[1,2,3,4,5,6,7,8,9]
//console.log(arr6.slice(2,5))

arr6.splice(3,3,'banana','abcd')
console.log(arr6)

console.log(arr6.indexOf('abcd'))

