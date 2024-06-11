// const express = require('express')
// support
import express,{json} from 'express'
import router from './Routes'
const app= express()

app.use(json())// midleware adds a body property to all requests
app.use("/products", router)

app.listen(4000,()=>{
    console.log("App Running...");
    
})

