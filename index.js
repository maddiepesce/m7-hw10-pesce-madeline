// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
var username = localStorage.getItem('username')
var noteContent = localStorage.getItem('textarea')

form.onsubmit = function(e) {
  e.preventDefault()
  username = nameSpan.value
  noteContent = textarea.value
  localStorage.setItem('username', nameSpan)
  localStorage.setItem('textarea', noteContent)
  nameSpan.textContent = username
}

// find the count cookie
var cookies = document.cookie.split('; ')
var count = 0

var countCookie = cookies
  .find(function(cookie) {
    return cookie.startsWith('cookieCount')
  })
// if the count cookie is set, grab its value and store in count
if (countCookie) {
  count = countCookie.split('=')[1]
}
// show the current count when the page loads
countEl.textContent = count

// find the username cookie
var nameCookie = cookies
  .find(function(cookie) {
    return cookie.startsWith('username')
  })

  if (nameCookie) {
    nameEl.textContent = nameCookie.split('=')[1]
  }

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  nameSpan.onblur = function() {
    document.cookie = 'username=' + nameSpan.textContent + ";"
  }
  textarea.onblur = function() {
    document.cookie = 'username=' + textarea.textContent + ";"
  }

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp