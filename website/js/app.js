console.log('app.js is connected and running ...')
let imgList = document.querySelectorAll('img')
imgList.forEach(img=>{
    img.loading = 'lazy'
    img.src = img.data-src
})