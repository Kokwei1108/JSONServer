const express = require('express')
const app = express()
var jsonfile = require('./json/sample2.json')

app.get("/", (req,res) =>{
    console.log(`test`)
    res.send('test');
})

app.get("/:id", (req,res) =>{
    console.log(`${req.params.id}`)
    res.json(jsonfile)
})
app.listen(3000)

