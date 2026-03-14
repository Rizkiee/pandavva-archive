let videos=[]

const avatars={
"Pandavva":"https://i.imgur.com/6VBx3io.png",
"Sadewa Sagara":"https://i.imgur.com/6VBx3io.png",
"Nakula Nalendra":"https://i.imgur.com/6VBx3io.png",
"Arjuna Arkana":"https://i.imgur.com/6VBx3io.png",
"Bima Bayusena":"https://i.imgur.com/6VBx3io.png",
"Yudistira Yogendra":"https://i.imgur.com/6VBx3io.png"
}


function getVideoId(url){

let id=null

if(url.includes("watch?v="))
id=url.split("watch?v=")[1]

else if(url.includes("youtu.be/"))
id=url.split("youtu.be/")[1]

else if(url.includes("/live/"))
id=url.split("/live/")[1]

if(id) id=id.split("?")[0]

return id
}


function createCard(video){

const id=getVideoId(video.url)

if(!id) return ""

const thumb=`https://img.youtube.com/vi/${id}/hqdefault.jpg`

const avatar=avatars[video.member]||avatars["Pandavva"]

return`

<div class="card" onclick="window.open('${video.url}')">

<div class="thumb">

<img src="${thumb}">
<div class="duration">${video.duration}</div>

</div>

<div class="meta">

<img class="avatar" src="${avatar}">

<div class="text">

<div class="title">${video.title}</div>
<div class="info">${video.member} • ${video.date}</div>

</div>

</div>

</div>

`
}


function render(member="all"){

const content=document.getElementById("content")

content.innerHTML=""

let filtered=videos

if(member!="all")
filtered=videos.filter(v=>v.member==member)

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


function renderMembers(){

const bar=document.getElementById("memberBar")

bar.innerHTML=""

bar.innerHTML+=`

<div class="member" onclick="render('all')">

<img src="${avatars["Pandavva"]}">
<span>All</span>

</div>

`

Object.keys(avatars).forEach(member=>{

bar.innerHTML+=`

<div class="member" onclick="render('${member}')">

<img src="${avatars[member]}">
<span>${member}</span>

</div>

`

})

}


fetch("videos.json")

.then(res=>res.json())

.then(data=>{

videos=data

renderMembers()

render()

})


document.getElementById("homeBtn").onclick=()=>render()section.innerHTML = `

<div class="sectionHeader">

<h2>${type}</h2>

</div>

<div class="row" id="row-${type}"></div>

`

content.appendChild(section)



const row = document.getElementById(`row-${type}`)



filtered

.filter(v=>v.type==type)

.forEach(v=>{

row.innerHTML += createCard(v)

})

})

}



/* member bar */

function renderMembers(){

const bar = document.getElementById("memberBar")

bar.innerHTML = ""

bar.innerHTML += `

<div class="member" onclick="render('all')">

<img src="${avatars["Pandavva"]}">

<span>All</span>

</div>

`



Object.keys(avatars).forEach(member=>{

bar.innerHTML += `

<div class="member" onclick="render('${member}')">

<img src="${avatars[member]}">

<span>${member}</span>

</div>

`

})

}



/* load json */

fetch("videos.json")

.then(res=>res.json())

.then(data=>{

videos = data

renderMembers()

render()

})



document.getElementById("homeBtn").onclick = () => render()
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

.slice(0,10)

.forEach(v=>{

row.innerHTML+=createCard(v)

})

})

}



/* render avatar member */

function renderMembers(){

const bar=document.getElementById("memberBar")

bar.innerHTML=""



bar.innerHTML+=`

<div class="member" onclick="render('all')">

<img src="https://yt3.googleusercontent.com/ytc/APkrFKYpandavva">

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

fetch("videos.json")

.then(res=>res.json())

.then(data=>{

videos=data

renderMembers()

render()

})



document.getElementById("homeBtn").onclick=()=>render()
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

.slice(0,10)

.forEach(v=>{

row.innerHTML+=createCard(v)

})

})

}



function renderMembers(){

const bar=document.getElementById("memberBar")

bar.innerHTML=""

bar.innerHTML+=`

<div class="member" onclick="render('all')">

<img src="https://yt3.googleusercontent.com/ytc/APkrFKZpandavva">

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



fetch("videos.json")

.then(res=>res.json())

.then(data=>{

videos=data

renderMembers()

render()

})



document.getElementById("homeBtn").onclick=()=>render()
