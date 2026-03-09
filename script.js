/* wand light */

const darkness = document.querySelector(".darkness")

document.addEventListener("mousemove",(e)=>{

let x = e.clientX
let y = e.clientY

darkness.style.background =
`radial-gradient(circle 180px at ${x}px ${y}px, transparent, black 80%)`

wand.style.left = x + "px"
wand.style.top = y + "px"

})

/* glowing wand cursor */

const wand = document.createElement("div")
wand.classList.add("wand")

document.body.appendChild(wand)

/* initialize spellbook */

$(document).ready(function(){

$("#book").turn({

width:800,
height:500,
autoCenter:true

})

})

/* magical particles */

const particlesContainer = document.getElementById("particles")

for(let i=0;i<60;i++){

let p = document.createElement("div")

p.style.position="absolute"
p.style.width="4px"
p.style.height="4px"

p.style.background="gold"

p.style.borderRadius="50%"

p.style.left=Math.random()*window.innerWidth+"px"
p.style.top=Math.random()*window.innerHeight+"px"

p.style.opacity=Math.random()

particlesContainer.appendChild(p)

animateParticle(p)

}

function animateParticle(p){

let x = Math.random()*window.innerWidth
let y = Math.random()*window.innerHeight

p.animate(

[
{transform:`translate(0,0)`},
{transform:`translate(${x}px,${y}px)`}

],

{

duration:20000,
iterations:Infinity

}

)

}

/* spell system */

const spells = document.querySelectorAll(".spell")

spells.forEach(button => {

button.addEventListener("click",()=>{

let spell = button.dataset.spell

castSpell(spell)

})

})

function castSpell(spell){

if(spell==="lumos"){

document.body.style.background="#222"

spellFlash()

}

if(spell==="accio"){

spellFlash()
alert("✨ Objects fly toward your wand!")

}

if(spell==="alohomora"){

spellFlash()
alert("🔓 Magical locks open!")

}

if(spell==="patronum"){

spellFlash()
alert("🦌 A Patronus appears!")

}

}

/* spell flash effect */

function spellFlash(){

let flash=document.createElement("div")

flash.style.position="fixed"
flash.style.width="100%"
flash.style.height="100%"

flash.style.background="white"

flash.style.opacity="0.6"

flash.style.zIndex="9"

document.body.appendChild(flash)

setTimeout(()=>{

flash.remove()

},200)

}