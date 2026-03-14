function getVideoId(url){
const regExp = /v=([^&]+)/;
const match = url.match(regExp);
return match ? match[1] : null;
}

const avatars = {
"sadewa":"https://yt3.googleusercontent.com/ytc/AIdro_xxxxxx",
"arjuna":"https://yt3.googleusercontent.com/ytc/AIdro_yyyyy"
};

const container = document.getElementById("video-container");

fetch("videos.json")
.then(res => res.json())
.then(data => {

data.forEach(video => {

const videoId = getVideoId(video.url);

const thumbnail =
`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

const avatar = avatars[video.member.toLowerCase()];

container.innerHTML += `

<div class="card" onclick="window.open('${video.url}')">

<div class="thumb">

<img src="${thumbnail}">

<div class="duration">${video.duration}</div>

</div>

<div class="video-info">

<img class="avatar" src="${avatar}">

<div class="text">
<div class="channel">${video.member}</div>
<div class="date">${video.date}</div>
</div>

</div>

<div class="title">${video.title}</div>

</div>

`;

});

});
