fetch("videos.json")
.then(response => response.json())
.then(videos => {

const container = document.getElementById("video-container");

videos.forEach(video => {

let videoId = "";

// ambil video ID dari berbagai format link youtube
if(video.link.includes("watch?v=")){
videoId = video.link.split("watch?v=")[1];
}

else if(video.link.includes("youtu.be/")){
videoId = video.link.split("youtu.be/")[1];
}

else if(video.link.includes("live/")){
videoId = video.link.split("live/")[1];
}

// bersihkan parameter tambahan
if(videoId.includes("&")){
videoId = videoId.split("&")[0];
}

// buat card video
const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<a href="${video.link}" target="_blank">

<img class="thumbnail"
src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg">

</a>

<h3>${video.title}</h3>

<p class="meta">
${video.member} • ${video.type} • ${video.format}
</p>
`;

container.appendChild(card);

});

});
