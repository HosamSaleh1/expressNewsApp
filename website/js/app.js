// General Variables
const searchForm = document.getElementById('searchForm')
const title = document.getElementById('title')
const description = document.getElementById('description')
const imageUrl = document.getElementById('imageUrl')
const showCard = document.getElementById('showCard')

const card = "<div class="card" style="width: 18rem;">
<img src="{{imageUrl}}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">{{title}}</h5>
  <p class="card-text">{{description}}</p>
  <a href="#" class="btn btn-primary">Read More</a>
</div>
</div>"