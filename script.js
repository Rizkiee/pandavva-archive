let videos = []

const members = {

"Pandavva":{
name:"Pandavva",
avatar:"https://unavatar.io/youtube/@PANDAVVA"
},

"Sadewa Sagara":{
name:"Sadewa Sagara",
avatar:"https://unavatar.io/youtube/@Sadewa_Sagara"
},

"Nakula Nalendra":{
name:"Nakula Nalendra",
avatar:"https://unavatar.io/youtube/@Nakula_Nalendra"
}

}

/* ambil id youtube */
function getID(url){

const regExp = /(?:youtube\.com\/(?:live\/|watch\?v=)|youtu\.be\/)([^?&]+)/

const match = url.match(regExp)

return match ? match[1] : null

}

/* buat card */
function createCard(v){

const id = getID(v.url)

if(!id) return ""

const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

const avatar = members[v.member]?.avatar || ""

return `

<div class="card" onclick="window.open('${v.url}','_blank')">

<div class="thumb">
<img src="${thumb}">
<div class="duration">${v.duration}</div>
</div>

<div class="title">${v.title}</div>

<div class="meta">

<img class="avatar" src="${avatar}">

<div class="text">
<div>${v.member}</div>
<div class="info">${v.date}</div>
</div>

</div>

</div>

`

}

/* render video */
function render(member="all"){

const content=document.getElementById("content")

content.innerHTML=""

let filtered = videos

if(member!="all"){
filtered = videos.filter(v=>v.member===member)
}

/* ambil kategori unik */
const types=[...new Set(filtered.map(v=>v.type))]

types.forEach(type=>{

const section=document.createElement("div")

section.className="section"

section.innerHTML=`

<div class="sectionHeader">
<h2>${type}</h2>
</div>

<div class="row" id="row-${type}"></div>

`

content.appendChild(section)

const row=document.getElementById(`row-${type}`)

/* render card */
let html=""

filtered
.filter(v=>v.type===type)
.forEach(v=>{
html+=createCard(v)
})

row.innerHTML=html

})

}

/* member bar */
function renderMembers(){

const bar=document.getElementById("memberBar")

bar.innerHTML=""

bar.innerHTML+=`

<div class="member" onclick="render('all')">
<img src="https://i.imgur.com/6VBx3io.png">
<span>All</span>
</div>

`

for(const key in members){

const m=members[key]

bar.innerHTML+=`

<div class="member" onclick="render('${key}')">
<img src="${m.avatar}">
<span>${m.name}</span>
</div>

`

}

}

/* load database */
document.addEventListener("DOMContentLoaded",()=>{

fetch("https://opensheet.elk.sh/16IveyFW68vwyVHRIVH9MU0Jblh6HjUQ3PQU_QiE2C8c/videos")
.then(res=>res.json())
.then(data=>{

videos=data

videos.sort((a,b)=> new Date(b.date || 0) - new Date(a.date || 0))

renderMembers()
render()

})
.catch(err=>{
console.error("Fetch error:",err)
})

document.getElementById("homeBtn").onclick=()=>render()

})

