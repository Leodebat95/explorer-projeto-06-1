// --------------- Variables -----------------------------
const routes = {
  "/": "Pages/home.html",
  "/universe": "/Pages/universo.html",
  "/exploration": "/Pages/exploracao.html",
  404: "Pages/404.html"
}



// --------------- Functions------------------------------
function routeHome(event) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
  backgroundHome()
}

function routeUniverse(event) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
  backgroundUniverse()
}

function routeExploration(event) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
  backgroundExploration()
}

function handle() {
  
  const { pathname } = window.location
    //const pathname = window.location.pathname
  const route = routes[pathname] || routes[404]

  fetch(route)
  .then(data => data.text())
  .then(html => document.querySelector('main').innerHTML = html)
}

handle()

window.onpopstate = () => handle()

window.routeHome = () => routeHome()
window.routeUniverse = () => routeUniverse()
window.routeExploration = () => routeExploration()



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
