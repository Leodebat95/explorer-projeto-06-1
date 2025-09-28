// --------------- Variables -----------------------------
const routes = {
  "/": "Pages/home.html",
  "/universe": "Pages/universo.html",
  "/exploration": "Pages/exploracao.html",
  404: "Pages/404.html"
}



// --------------- Functions------------------------------
function routeHome(href, event) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", href)

  handle()
  backgroundHome()
}

function routeUniverse(href, event) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", href)

  handle()
  backgroundUniverse()
}

function routeExploration(href, event) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", href)
    //window.history.pushState({}, "", event.target.href)

  handle()
  backgroundExploration()
}



function handle() {
  
  const { pathname } = window.location
    //const pathname = window.location.pathname
  const route = routes[pathname] || routes["/"]
  
  fetch(route)
  .then(data => data.text())
  .then(html => document.querySelector('main').innerHTML = html)
}

handle()

window.onpopstate = () => handle()

window.routeHome = (href) => routeHome(href)
window.routeUniverse = (href) => routeUniverse(href)
window.routeExploration = (href) => routeExploration(href)



// --------------- Background Functions------------------------------
function backgroundHome() {
  document.body.classList.add('bkg-home')
  document.body.classList.remove('bkg-uni')
  document.body.classList.remove('bkg-exp')
}

function backgroundExploration() {
  document.body.classList.add('bkg-exp')
  document.body.classList.remove('bkg-uni')
  document.body.classList.remove('bkg-home')
}

function backgroundUniverse() {
  document.body.classList.add('bkg-uni')
  document.body.classList.remove('bkg-home')
  document.body.classList.remove('bkg-exp')
}
