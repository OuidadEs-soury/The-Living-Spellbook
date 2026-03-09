const darkness = document.querySelector(".darkness")

document.addEventListener("mousemove", (e)=>{

let x = e.clientX
let y = e.clientY

darkness.style.background =
`radial-gradient(circle 150px at ${x}px ${y}px, transparent, black 80%)`

})
const spells = document.querySelectorAll(".spell")

spells.forEach(button => {

button.addEventListener("click", ()=>{

let spell = button.dataset.spell

castSpell(spell)

})

})

function castSpell(spell){

if(spell === "lumos"){

document.body.style.background = "#111"

}

if(spell === "accio"){

alert("Objects fly toward your wand!")

}

if(spell === "alohomora"){

alert("🔓 The magic unlocks hidden doors")

}

}