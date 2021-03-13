let txtKeyword = document.getElementById('keyword');
let btnSearch = document.getElementById('search');
btnSearch.onclick = function () {
    let keyword = txtKeyword.value;
    let divResult = document.getElementById('result');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let jsObject = JSON.parse(this.responseText);
            console.log(jsObject.items);
            let listYoutubeVideo = jsObject.items;
            let htmlResult = "";
            for (let i = 0; i < listYoutubeVideo.length; i++) {
                htmlResult += `<div class="youtube-item">                       
                        <div class="thumbnail">
                            <img src="${listYoutubeVideo[i].snippet.thumbnails.high.url}" onclick="showVideo('${listYoutubeVideo[i].id.videoId}')">
                        </div>  
                        <div class="title">${listYoutubeVideo[i].snippet.title}</div>                     
                    </div>`;
            }
            divResult.innerHTML = htmlResult;
        }
    }
    xhr.open("GET", `https://content.googleapis.com/youtube/v3/search?q=${keyword}&type=video&maxResults=9&part=snippet&key=AIzaSyC__kw4rrUc5tkntrhThEGTR5WSxCYcEB4`)
    // dữ liệu thực sự được gửi đi.
    xhr.send();
}
let input = document.getElementById("keyword");
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
