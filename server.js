// Setup empty JS object to act as endpoint for all routes
const newsData = {}
// Require Express to run server and routes
const express = require('express')
const port = 3000
// Start up an instance of app
const app = express()
// Middleware
const bodyParser = require('body-parser')
// Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// Cors for corss origin allowance
const cors = require('cors')
app.use(cors())
//Initialize the main project folder
app.use(express.static('website'))

// Get Route
app.get('/news',(req,res)=>{
    res.status(200).send(newsData)
})



// Post Route
app.post('/news',(req,res)=>{
    const {title,description,imageUrl} = req.body
    newsData[title] = {
        description,
        imageUrl
    }
})

// Setup Server
app.listen(port,()=>{
    console.log('Server is running ...')
    console.log(`Server running on localhost: ${port}`)
})