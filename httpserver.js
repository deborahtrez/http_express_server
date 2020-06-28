const ourHttp = require ('http')

const myServer = ourHttp.createServer((request, response) => {
    response.write('The server has worked')
    response.end()
})
console.log (myServer)

myServer.listen(3000, () =>{
    console.log ('Deborah\'s server is running')
})