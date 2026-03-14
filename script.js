let videos = []

/* avatar channel */
const members = {

"Pandavva":{
name:"Pandavva",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKYpandavva"
},

"Sadewa Sagara":{
name:"Sadewa Sagara",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKYsadewa"
},

"Nakula Nalendra":{
name:"Nakula Nalendra",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKYnakula"
},

"Arjuna Arkana":{
name:"Arjuna Arkana",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKYarjuna"
},

"Bima Bayusena":{
name:"Bima Bayusena",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKYbima"
},

"Yudistira Yogendra":{
name:"Yudistira Yogendra",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKYyudi"
}

}


/* ambil video id */
function getVideoId(url){

if(url.includes("watch?v="))
return url.split("watch?v=")[1].split("&")[0]

if(url.includes("youtu.be/"))
return url.split("youtu.be/")[1].split("?")[0]

if(url.includes("/live/"))
return url.split("/live/")[1].split("?")[0]

}



/* bikin card video */

function createCard(video){

const id = getVideoId(video.url)

const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`

const avatar = members[video.member]?.avatar || ""

return `

<div class="card" onclick="window.open('${video.url}')">

<div class="thumb">

<img src="${thumb}">

<div class="duration">
${video.duration}
</div>

</div>


<div class="meta">

<img class="avatar" src="${avatar}">

<div class="text">

<div class="title">
${video.title}
</div>

<div class="info">
${video.member} • ${video.date}
</div>

</div>

</div>

</div>

`

}



/* render kategori */

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
