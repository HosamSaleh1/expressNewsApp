const request = require('request')

const news = (callback)=>{
    const url = `https://newsapi.org/v2/everything?q=egypt&apiKey=705eb8fdef79463785fd709e68626731`

    request({url,json:true},(error,response)=>{
        if(error){
            callback('Error has occurred', undefined)
        }else if(response.body.status === 'error'){
        callback('Error title: ', response.body.code)
        callback('Error Message: ', response.body.message)
    }else{
        for(let i = 0;i < response.body.articles.length;i++){
        callback(undefined,
            {
            title: response.body.articles[i].title,
            description: response.body.articles[i].description,
            url: response.body.articles[i].url
        })
    }
    }
    })
}

module.exports = news