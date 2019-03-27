const express = require('express')
const app = express();

// app.set(express.static('public/'))
app.get('/',(request,response,next)=>{
    // response.send({
    //     name:'Admin'
    // })
    response.sendfile('./public/index.html')
    // response.sendStatus(404)
    // response.sendfile('./public/hinhlogo.png')

})

app.listen(3000,()=>{
    console.log('Server start on port 3000')
})



