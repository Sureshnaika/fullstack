let arr1 = [1,2,3,4,5,6,7,8,9]
let [x,y,z,...a]=arr1
console.log(a)

let arr2 = [1,2,3,4]
let [s,u,r,e]=arr2
console.log(s)

let bikes =[['Hero','KTM','Honda','Bajaj'],['Slendor','Duke 200','Activa','Pulser']]
let [Companies,Model]=bikes
console.log(Companies,Model)

let fe=['HTML','CSS','JS']
let be=['NODE','EXPRESS','MONGODB']

fs=[...fe,...be]
console.log(fs)

let shape={
        w:10,
        h:20,
        area:30

}
let {w:width,h:height,ar:area}=shape
console.log(width)
