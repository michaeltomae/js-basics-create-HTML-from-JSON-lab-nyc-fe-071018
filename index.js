document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
});

function updateHTMLContent(movieName) {
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let genre = document.getElementById('genre')
  let filmRating = document.getElementById('filmRating')
  let poster = document.getElementById('poster')
  let audienceScore = document.getElementById('audienceScore')
  let description = document.getElementById('description')
  let currentMovie = movies[movieName]
  let cast = document.getElementById('cast')
  let reviews = document.getElementById('reviews')

  title.innerHTML = currentMovie.title
  director.innerHTML = currentMovie.director
  genre.innerHTML = currentMovie.genre
  filmRating.innerHTML = currentMovie.filmRating
  poster.setAttribute('src', currentMovie.poster)
  description.innerHTML = currentMovie.description
  audienceScore.innerHTML = currentMovie.audienceScore
  let castInnerHTML = ""
  let reviewInnerHTML = ""
  
 for (let castMember of currentMovie.cast) {
   let role = castMember.role
   let actor = castMember.actor
   castInnerHTML += ("<p>" + role + ": " + actor + "</p>")
 }
 castInnerHTML +=""
 cast.innerHTML = castInnerHTML
  
  for (let review of currentMovie.reviews) {
    let userName = review.username
    let content = review.content
    reviewInnerHTML += ("<p>" + userName + ": " + content + "</p>")
}
reviewInnerHTML += ''
reviews.innerHTML = reviewInnerHTML
}

updateHTMLContent('Titanic')
 const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
    updateHTMLContent('Titanic')
  })
  terminatorButton.addEventListener('click', (event) => {
    updateHTMLContent('Terminator 2')
  })