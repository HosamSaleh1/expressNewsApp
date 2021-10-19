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


// Render Index.hbs
// app.get('/',(req,res)=>{
//     res.render('index',{
//         page:'Home Page',
//         name:'Hosam Saleh'
//     })
// })

// Get Route
// app.get('/news',(req,res)=>{
//     res.status(200).send(newsData)
// })



// Post Route
app.get('/',(req,res)=>{
    console.log(req.body)
    // res.render('index')
    // newsData.push(req.body)
    // const {title,description,imageUrl} = req.body
    // newsData[title] = {
    //     description,
    //     imageUrl
    // }
    news((error,data)=>{
        if(error){
            console.log(error)
        }else{
            newsData.push(data)
            console.log(data)
            res.send(newsData)
        }
    })
})
// const word = process.argv[2]
// news(word,(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         newsData.push(data)
//         console.log(data)
//     }
// })
// Render 404 Page
app.get('*',(req,res)=>{
    res.render('404 Page Not Found',{
        msg:'There is no page with this name',
        page:'Page Not Found',

    })
})
// Setup Server
app.listen(port,()=>{
    console.log(`Server is running ... on localhost: ${port}`)
})

