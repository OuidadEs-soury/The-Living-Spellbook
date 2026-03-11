const map=document.getElementById("map")
const studentsContainer=document.getElementById("students")

const light=document.getElementById("light")

/* wand light */

document.addEventListener("mousemove",e=>{

light.style.left=e.clientX-125+"px"
light.style.top=e.clientY-125+"px"

})

/* reveal rooms */

document.addEventListener("mousemove",(e)=>{

const rooms=document.querySelectorAll(".room")

rooms.forEach(room=>{

const rect=room.getBoundingClientRect()

const dx=e.clientX-(rect.left+rect.width/2)
const dy=e.clientY-(rect.top+rect.height/2)

const distance=Math.sqrt(dx*dx+dy*dy)

if(distance<120){

room.style.opacity=1

}else{

room.style.opacity=0

}

})

})

/* students */

const studentNames=[

"Harry Potter",
"Hermione Granger",
"Ron Weasley",
"Draco Malfoy",
"Luna Lovegood",
"Neville Longbottom",
"Ginny Weasley",
"Fred Weasley",
"George Weasley"

]

const students=[]

studentNames.forEach(name=>{

const dot=document.createElement("div")
dot.className="student"

const label=document.createElement("div")
label.className="label"
label.innerText=name

map.appendChild(dot)
map.appendChild(label)

let x=Math.random()*map.clientWidth
let y=Math.random()*map.clientHeight

students.push({dot,label,x,y})

})

/* footprints */

function createFootprint(x,y){

const f=document.createElement("div")

f.className="footprint"

f.style.left=x+"px"
f.style.top=y+"px"

map.appendChild(f)

setTimeout(()=>{

f.remove()

},2000)

}

/* movement */

function moveStudents(){

students.forEach(s=>{

createFootprint(s.x,s.y)

s.x+=(Math.random()-0.5)*20
s.y+=(Math.random()-0.5)*20

s.x=Math.max(0,Math.min(map.clientWidth,s.x))
s.y=Math.max(0,Math.min(map.clientHeight,s.y))

s.dot.style.left=s.x+"px"
s.dot.style.top=s.y+"px"

s.label.style.left=s.x+12+"px"
s.label.style.top=s.y+"px"

})

}

setInterval(moveStudents,700)