const express = require ('express')
const mimic = require ('./mimic')

const app = express()
app.get('/api/mimic', (request, response) =>{
    response.json(mimic)
})

app.listen(3000, () =>{
    console.log('server is running')
})