// Setup empty JS object to act as endpoint for all routes
const newsData = []
const news = require('./website/js/newsAPI')
const path = require('path')

// Require Express to run server and routes
const express = require('express')
const port = 3000
// Start up an instance of app
const app = express()
//Initialize the main project folder
const website = path.join(__dirname + '/website')
app.use(express.static(website))

// MiddelWare
app.use(express.json())

// Initialize and configer hbs
const hbs = require('hbs')
app.set("view engine", "hbs")

const partialsPath = path.join(__dirname + '/website/templates/partials')
const viewsPath = path.join(__dirname + "/website/templates/views")

app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Get Route
app.get('/',(req,res)=>{
    news('egypt',(error,data)=>{
        if(error){
            console.log(error)
        }else{
            newsData.push(data)
        }
        res.render('index',{
            newsData:newsData
        })
    })
})

app.get('/serch/:word',(req,res)=>{
    console.log(req)
    const word = req.params.word
    console.log(word)
    news(word,(error,data)=>{
        if(error){
            console.log(error)
        }else{
            newsData.push(data)
        }
        res.send({
            newsData:newsData
        })
    })
})

app.get('*',(req,res)=>{
    res.render('404page',{
        msg:'There is no page with this name',
        page:'Page Not Found',

    })
})
// Setup Server
app.listen(port,()=>{
    console.log(`Server is running ... on localhost: ${port}`)
})

