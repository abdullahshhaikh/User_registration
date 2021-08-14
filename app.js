const express = require("express")
require("./db/mongoose")
const registerRouter = require("./routes/register")

const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded())
app.use(express.json())
app.use(registerRouter)

app.listen(3000,async(req,res)=>{
    console.log("Server is up and running");
})