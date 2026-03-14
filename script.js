fetch("videos.json")
.then(res => res.json())
.then(videos => {

const container = document.getElementById("video-container");

videos.forEach(video => {

let videoId = "";

if(video.link.includes("watch?v=")){
videoId = video.link.split("watch?v=")[1];
}

else if(video.link.includes("youtu.be/")){
videoId = video.link.split("youtu.be/")[1];
}

else if(video.link.includes("live/")){
videoId = video.link.split("live/")[1];
}

if(videoId.includes("&")){
videoId = videoId.split("&")[0];
}

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<a href="${video.link}" target="_blank">

<div class="thumb-container">

<img class="thumbnail"
src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg">

<div class="duration">${video.duration}</div>

</div>

</a>

<h3 class="title">${video.title}</h3>

<p class="channel">${video.member}</p>

<p class="date">${video.date}</p>
`;

container.appendChild(card);

});

});
