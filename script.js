let videos=[]


const members={

"group":{
name:"Group",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKZpandavva"
},

"Sadewa Sagara":{
name:"Sadewa",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKZsadewa"
},

"Nakula Nalendra":{
name:"Nakula",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKZnakula"
},

"Arjuna Arkana":{
name:"Arjuna",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKZarjuna"
},

"Bima Bayusena":{
name:"Bima",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKZbima"
},

"Yudistira Yogendra":{
name:"Yudistira",
avatar:"https://yt3.googleusercontent.com/ytc/APkrFKZyudi"
}

}



function getVideoId(url){

if(url.includes("watch?v="))
return url.split("watch?v=")[1].split("&")[0]

if(url.includes("youtu.be/"))
return url.split("youtu.be/")[1].split("?")[0]

if(url.includes("/live/"))
return url.split("/live/")[1].split("?")[0]

}



function createCard(video){

const id=getVideoId(video.url)

const thumb=`https://img.youtube.com/vi/${id}/hqdefault.jpg`

return `

<div class="card" onclick="window.open('${video.url}')">

<div class="thumb">

<img src="${thumb}">

<div class="duration">
${video.duration}
</div>

</div>

<div class="title">
${video.title}
</div>

</div>

`

}



function render(member="all"){

const content=document.getElementById("content")

content.innerHTML=""



let filtered=videos

if(member!="all")
filtered=videos.filter(v=>v.member==member || v.member=="ALL")



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
