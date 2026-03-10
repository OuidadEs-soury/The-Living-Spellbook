const map=document.getElementById("map")
const open=document.getElementById("openMap")

open.onclick=()=>{

map.style.transform="scale(1)"

}

/* footprints */

const footprintsContainer=document.getElementById("footprints")

function spawnFootprint(){

let f=document.createElement("div")

f.className="footprint"

let x=Math.random()*window.innerWidth
let y=Math.random()*window.innerHeight

f.style.left=x+"px"
f.style.top=y+"px"

footprintsContainer.appendChild(f)

setTimeout(()=>{

f.remove()

},4000)

}

setInterval(spawnFootprint,700)

/* wand reveal secrets */

document.addEventListener("mousemove",(e)=>{

let secrets=document.querySelectorAll(".secret")

secrets.forEach(secret=>{

let rect=secret.getBoundingClientRect()

let dx=e.clientX-(rect.left+rect.width/2)
let dy=e.clientY-(rect.top+rect.height/2)

let distance=Math.sqrt(dx*dx+dy*dy)

if(distance<120){

secret.style.opacity=1

}else{

secret.style.opacity=0

}

})

})