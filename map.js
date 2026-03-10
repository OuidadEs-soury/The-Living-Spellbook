const map = document.getElementById("map")
const studentsContainer = document.getElementById("students")

/* reveal rooms when wand is close */

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

dot.style.left=x+"px"
dot.style.top=y+"px"

label.style.left=x+12+"px"
label.style.top=y+"px"

students.push({dot,label,x,y})

})

/* movement system */

function moveStudents(){

students.forEach(student=>{

student.x += (Math.random()-0.5)*20
student.y += (Math.random()-0.5)*20

student.x=Math.max(0,Math.min(map.clientWidth,student.x))
student.y=Math.max(0,Math.min(map.clientHeight,student.y))

student.dot.style.left=student.x+"px"
student.dot.style.top=student.y+"px"

student.label.style.left=(student.x+12)+"px"
student.label.style.top=student.y+"px"

})

}

setInterval(moveStudents,700)