const darkness=document.querySelector(".darkness")

/* wand */

const wand=document.createElement("div")
wand.classList.add("wand")
document.body.appendChild(wand)

document.addEventListener("mousemove",(e)=>{

let x=e.clientX
let y=e.clientY

darkness.style.background=
`radial-gradient(circle 180px at ${x}px ${y}px, transparent, black 80%)`

wand.style.left=x+"px"
wand.style.top=y+"px"

})

/* spellbook */

$(document).ready(function(){

$("#book").turn({
width:800,
height:500,
autoCenter:true
})

})

/* magical text */

document.querySelectorAll(".magic-text").forEach((t,i)=>{
setTimeout(()=>{t.style.opacity=1},i*500)
})

/* canvas for spell drawing */

const canvas=document.getElementById("spellCanvas")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let drawing=false
let points=[]

document.addEventListener("mousedown",(e)=>{
drawing=true
points=[]
})

document.addEventListener("mouseup",()=>{

drawing=false

recognizeSpell(points)

ctx.clearRect(0,0,canvas.width,canvas.height)

})

document.addEventListener("mousemove",(e)=>{

if(!drawing)return

points.push({x:e.clientX,y:e.clientY})

ctx.strokeStyle="gold"
ctx.lineWidth=3
ctx.lineTo(e.clientX,e.clientY)
ctx.stroke()

})

/* spell recognition */

function recognizeSpell(points){

if(points.length<10)return

let dx=points[points.length-1].x-points[0].x
let dy=Math.abs(points[points.length-1].y-points[0].y)

/* horizontal line */

if(Math.abs(dx)>200 && dy<50){

castSpell("lumos")
return

}

/* circle detection */

let minX=Math.min(...points.map(p=>p.x))
let maxX=Math.max(...points.map(p=>p.x))
let minY=Math.min(...points.map(p=>p.y))
let maxY=Math.max(...points.map(p=>p.y))

let width=maxX-minX
let height=maxY-minY

if(Math.abs(width-height)<50){

castSpell("patronum")
return

}

/* Z shape rough */

if(points.length>40){

castSpell("alohomora")

}

}

/* spell effects */

function castSpell(spell){

spellFlash()

if(spell==="lumos"){

document.body.style.background="#222"

alert("💡 Lumos!")

}

if(spell==="patronum"){

alert("🦌 Expecto Patronum!")

}

if(spell==="alohomora"){

alert("🔓 Alohomora!")

}

}

/* flash */

function spellFlash(){

let flash=document.createElement("div")

flash.style.position="fixed"
flash.style.width="100%"
flash.style.height="100%"
flash.style.background="white"
flash.style.opacity="0.5"
flash.style.zIndex="9"

document.body.appendChild(flash)

setTimeout(()=>flash.remove(),200)

}