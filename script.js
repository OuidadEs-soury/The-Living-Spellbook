const darkness = document.querySelector(".darkness")

document.addEventListener("mousemove",(e)=>{

let x = e.clientX
let y = e.clientY

darkness.style.background =
`radial-gradient(circle 180px at ${x}px ${y}px, transparent, black 80%)`

})

/* initialize book */

$(document).ready(function(){

$("#book").turn({

width:800,
height:500,
autoCenter:true

})

})

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

}

if(spell==="accio"){

alert("✨ Objects fly toward your wand!")

}

if(spell==="alohomora"){

alert("🔓 Magical locks open!")

}

if(spell==="patronum"){

alert("🦌 A Patronus appears!")

}

}