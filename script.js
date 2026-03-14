let videos = []

const members = {

"Pandavva":{
name:"Pandavva",
avatar:"https://unavatar.io/youtube/@Pandavva"
},

"Sadewa Sagara":{
name:"Sadewa Sagara",
avatar:"https://unavatar.io/youtube/@SadewaSagara"
}

}

/* buat card video */
function createCard(v){

const id = getID(v.url)
const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`
const avatar = members[v.member]?.avatar || members["Pandavva"].avatar

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

if(member!="all")
filtered = videos.filter(v=>v.member==member)

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

filtered
.filter(v=>v.type==type)
.forEach(v=>{
row.innerHTML+=createCard(v)
})

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

/* load json */
fetch("videos.json")
.then(res=>res.json())
.then(data=>{

videos=data

renderMembers()
render()

})

/* tombol home */
document.getElementById("homeBtn").onclick=()=>render()
