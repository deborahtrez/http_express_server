const ourPath = require('path')
const express = require('express')
const app = express()

app.use(express.static(ourPath.join(__dirname, 'public')))

app.listen(3000, () =>{
    console.log('server is running')
})