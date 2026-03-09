const darkness = document.querySelector(".darkness")

document.addEventListener("mousemove", (e)=>{

let x = e.clientX
let y = e.clientY

darkness.style.background =
`radial-gradient(circle 150px at ${x}px ${y}px, transparent, black 80%)`

})