//1. import json server
const JSONserver = require('json-server')

//2. create server for running json file like express
const rBuilderServer = JSONserver.create()

//3. create middleware
const middleware = JSONserver.defaults()

//4. define port to run server
const PORT = 3000 || process.env.PORT

//5. use middleware
rBuilderServer.use(middleware)

//6. import db.json file
const router = JSONserver.router("db.json")

//7. use router
rBuilderServer.use(router)

//8. tell server to listern for client request
rBuilderServer.listen(PORT, ()=>{
    console.log(`Resume Builder started at PORT number ${PORT}`)
})

