let txtKeyword = document.getElementById('keyword');
let btnSearch = document.getElementById('search');
btnSearch.onclick = function () {
    let keyword = txtKeyword.value;
    let divResult = document.getElementById('result');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let jsObject = JSON.parse(this.responseText);
            let listYoutubeVideo = jsObject.items;
            let htmlResult = "";
            for (let i = 0; i < listYoutubeVideo.length; i++) {
                htmlResult += `<div class="youtube-item">                       
                                    <div class="thumbnail">
                                        <img src="${listYoutubeVideo[i].snippet.thumbnails.high.url}" onclick="showVideo('${listYoutubeVideo[i].id.videoId}')">
                                    </div>  
                                    <div class="title" onclick="showVideo('${listYoutubeVideo[i].id.videoId}')">${listYoutubeVideo[i].snippet.title}</div>                     
                               </div>`;
            }
            divResult.innerHTML = htmlResult;
        }
    }

    if (keyword) {
        xhr.open("GET", `https://content.googleapis.com/youtube/v3/search?q=${keyword}&type=video&maxResults=9&part=snippet&key=AIzaSyDcwdSvwT9kMqmq8KejRWzfra_B7Jc0rAg`)
        xhr.send();
    }
}
let input = txtKeyword;
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});
var modal = document.getElementById("myModal");
let videoFrame = document.getElementById("video-frame");
function showVideo(videoId) {
    modal.style.display = "block";
    videoFrame.src = "https://www.youtube.com/embed/" + videoId;
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = 'none';
    videoFrame.src = "";
}

// Scroll to load more

