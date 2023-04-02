let ronnie = document.getElementById('gymImg')
let arnold = document.getElementById('gymImg2')
let dumbbell = document.getElementById('gymDumbbell')
let gt = document.getElementById('gymText')
dumbbell.addEventListener('mouseenter', entrar)
dumbbell.addEventListener('mouseleave', sair)

function entrar() {
  ronnie.style.opacity = '1'
  arnold.style.opacity = '1'
  gt.style.backgroundColor = 'rgb(0, 225, 225)'
}

function sair() {
  ronnie.style.opacity = '0'
  arnold.style.opacity = '0'
  gt.style.backgroundColor = ''
}

// COMPUTADOR 

let pcIcon = document.getElementById('pcIcon')
let pcText = document.getElementById('pcText')
let pcImg = document.getElementById('pcImg')
pcIcon.addEventListener('mouseenter', entrar2)
pcIcon.addEventListener('mouseleave', sair2)

function entrar2() {
  pcImg.style.opacity = '1'
  pcText.style.backgroundColor ='rgb(0, 225, 225)'
}

function sair2() {
  pcImg.style.opacity = ''
  pcText.style.backgroundColor =''
}

// FUTEBOL

let futIcon = document.getElementById('futIcon')
let futText = document.getElementById('futText')
let futImg = document.getElementById('futImg')

futIcon.addEventListener('mouseenter', entrar3)
futIcon.addEventListener('mouseleave', sair3)

function entrar3() {
  futText.style.backgroundColor = 'rgb(0, 225, 225)'
  futImg.style.opacity = '1'
}

function sair3() {
  futText.style.backgroundColor = ''
  futImg.style.opacity = '0'
}

// about

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

let vgi = document.getElementById('videoGameIcon')
let vgt = document.getElementById('videoGameText')

let ai =  document.getElementById('administrarIcon')
let at = document.getElementById('administrarText')

let pi = document.getElementById('problemsIcon')
let pt = document.getElementById('problemsText')

vgi.addEventListener('click', click6)
ai.addEventListener('click', click7)
pi.addEventListener('click', click8)

function click6() {
  at.style.opacity = '0'
  vgt.style.opacity = '1'
  pt.style.opacity = '0'
}

function click7() {
  at.style.opacity = '1'
  vgt.style.opacity = '0'
  pt.style.opacity = '0'
}

function click8() {
  at.style.opacity = '0'
  vgt.style.opacity = '0'
  pt.style.opacity = '1'
}