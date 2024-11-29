// copied from https://github.com/stevenaeola/proglabs_js/tree/main/node_routing
const express = require('express')
const app = express()

app.get('/', function(req, resp){
   resp.send('Hello world')
})

app.listen(8090)