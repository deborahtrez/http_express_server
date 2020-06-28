const express = require ('express')
const app = express ()
const ourPath = require ('path')

app.use(express.static(ourPath.join(__dirname,'public')))

app.listen(3000, () =>{
    console.log("This server is definitely running!")
})