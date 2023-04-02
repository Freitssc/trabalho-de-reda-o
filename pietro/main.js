let guitarIcon = document.getElementById('guitarIcon')
let guitarText = document.getElementById('guitarText')
guitarIcon.addEventListener('mouseenter', entrar)
guitarIcon.addEventListener('mouseleave', sair)

function entrar() {
  guitarText.style.backgroundColor = 'rgb(148, 91, 255)'
}

function sair() {
  guitarText.style.backgroundColor = ''
}

let musicUser = document.getElementById('musicUser')
let musicText = document.getElementById('musicText')
musicUser.addEventListener('mouseenter', entrar2)
musicUser.addEventListener('mouseleave', sair2)

function entrar2() {
  musicText.style.backgroundColor = 'rgb(148, 91, 255)'
}

function sair2() {
  musicText.style.backgroundColor = ''
}

let baby = document.getElementById('baby')

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

let mathProgress = document.getElementById('mathProgress')
let mathSkilsIcon = document.getElementById('mathSkilsIcon')

let codeProgress = document.getElementById('codeProgress')
let codeSkilsIcon = document.getElementById('codeSkilsIcon')

let guitarProgress = document.getElementById('guitarProgress')
let guitarSkilsIcon = document.getElementById('guitarSkilsIcon')

mathSkilsIcon.addEventListener('click', clickSkils)
codeSkilsIcon.addEventListener('click', clickSkils2)
guitarSkilsIcon.addEventListener('click', clickSkils3)

function clickSkils() {
  mathProgress.style.animation = 'mathProgress 1s both'
}

function clickSkils2() {
  codeProgress.style.animation = 'codeProgress 1s both'
}

function clickSkils3() {
  guitarProgress.style.animation = 'guitarProgress 1s both'
}