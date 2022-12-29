let fs=require('fs');
const { text } = require('stream/consumers');
//fs.appendFile('Text.txt','Its a Good day',
fs.readFile('text.txt',
(error,text)=>{


    if (error) throw error;
    console.log(text.toString())
});