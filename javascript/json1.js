let Data=   `{

    "user":[
        {
            "first_name":"suresh",
            "last_name":"Naik"
        },

        {
            "first_name":"Ramesh",
            "last_name":"Naik"
        },

        {
            "first_name":"Kiran",
            "last_name":"Naik"
        }
    ]

}`


// let newdata=  JSON.parse(Data)
// console.log(newdata['user'][0])
let jsonObjectdata = JSON.stringify(Data)    // to send data to server 
console.log(jsonObjectdata)


