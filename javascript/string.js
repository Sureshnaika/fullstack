let str1=" suresh "
console.log("this is to check length of string ",str1.length)          
console.log(str1.trim())       //this returns function
console.log(str1.toUpperCase())
//console.log(str1.tolowerCse())        ==> to conevert into lowercase
console.log(str1.charAt(1))             //to check at what position what char is present


let str2= "Today is my Birthday"
console.log(str2.endsWith('Birthday'))       //if word is present then it will return true else false
console.log(str2.startsWith('today'))        // this is case sensitive if we enter today then it will display false
console.log(str2.indexOf('my'))             // at what position my word is present
console.log(str2.repeat(2))
console.log(str2.replace('Birthday','Good Day'))
console.log(str2.search(/my/))                  //if word is present then it will show index of word else shows -1
console.log(str2.search(/My/i))   
console.log(str2.match(/My/gi))   
