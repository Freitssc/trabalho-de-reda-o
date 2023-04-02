let backgroundBask = document.getElementById('baskText');
let baskBall = document.getElementById('baskBall')
baskBall.addEventListener('mouseenter', entrar)
baskBall.addEventListener('mouseleave', sair)

function entrar() {
  backgroundBask.style.backgroundColor = 'orangered'
}

function sair() {
  backgroundBask.style.backgroundColor = ""
}

// ACADEMIA 

let gym = document.getElementById('gymText')
let gymDumbbell = document.getElementById('gymDumbbell')
gymDumbbell.addEventListener('mouseenter', entrar2)
gymDumbbell.addEventListener('mouseleave', sair2)

function entrar2() {
  gym.style.backgroundColor = 'orangered'
}

function sair2() {
  gym.style.backgroundColor = ""
}

// AMIGOS

let friends = document.getElementById('emojiFriends')
let friendsText = document.getElementById('friendText')
friends.addEventListener('mouseenter', entrar3)
friends.addEventListener('mouseleave', sair3)

function entrar3() {
  friendsText.style.backgroundColor = 'orangered'
}

function sair3() {
  friendsText.style.backgroundColor = ''
}

let babyIcon = document.getElementById('babyIcon')
let planeIcon = document.getElementById('planeIcon')
let mathIcon = document.getElementById('mathIcon')
let planetIcon = document.getElementById('planetIcon')
let todayIcon = document.getElementById('todayIcon')

let babyText = document.getElementById('babyText')
let planeText = document.getElementById('planeText')
let mathText = document.getElementById('mathText')
let planetText = document.getElementById('planetText')
let todayText = document.getElementById ('todayText')


babyIcon.addEventListener('click', click5)
planeIcon.addEventListener('click', click)
mathIcon.addEventListener('click', click2)
planetIcon.addEventListener('click', click3)
todayIcon.addEventListener('click', click4)

function click() {
  baby.style.animation = 'plane 1s linear both'
  planeText.style.opacity='1'
  mathText.style.opacity='0'
  todayText.style.opacity='0'
  planetText.style.opacity='0'
  babyText.style.opacity='0'
}

function click2() {
  baby.style.animation = 'math 1s linear both'
  planeText.style.opacity='0'
  mathText.style.opacity='1'
  todayText.style.opacity='0'
  planetText.style.opacity='0'
  babyText.style.opacity='0'
}

function click3() {
  baby.style.animation = 'planet 1s linear both'
  planeText.style.opacity='0'
  mathText.style.opacity='0'
  todayText.style.opacity='0'
  planetText.style.opacity='1'
  babyText.style.opacity='0'
}

function click4() {
  baby.style.animation = 'today 1s linear both'
  planeText.style.opacity='0'
  mathText.style.opacity='0'
  todayText.style.opacity='1'
  planetText.style.opacity='0'
  babyText.style.opacity='0'
}

function click5() {
  babyText.style.opacity='1'
  planeText.style.opacity='0'
  mathText.style.opacity='0'
  todayText.style.opacity='0'
  planetText.style.opacity='0'
}

let baskaBall = document.getElementById('baskaBall')
let baskaText = document.getElementById('baskaText')

let geoIcon = document.getElementById('geoIcon')
let geoText = document.getElementById('geoText')


baskaBall.addEventListener('click', clickSkils1)
geoIcon.addEventListener('click', clickSkils2)
bikeIcon.addEventListener('click', clickSkils3)

function clickSkils1() {
  baskaText.style.opacity = '1'
  geoText.style.opacity = '0'
  bikeText.style.opacity = '0'
}

function clickSkils2() {
  baskaText.style.opacity = '0'
  geoText.style.opacity = '1'
  bikeText.style.opacity = '0'
}

function clickSkils3() {
  baskaText.style.opacity = '0'
  geoText.style.opacity = '0'
  bikeText.style.opacity = '1'
}