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
<!--                            <iframe src="https://www.youtube.com/embed/${listYoutubeVideo[i].id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                            <img src="${listYoutubeVideo[i].snippet.thumbnails.high.url}" alt="">
                        </div>
                         <div class="title">${listYoutubeVideo[i].snippet.title}</div>
                    </div>`;
            }
            divResult.innerHTML = htmlResult;
        }
    }
    xhr.open("GET", `https://content.googleapis.com/youtube/v3/search?q=${keyword}&type=video&maxResults=9&part=snippet&key=AIzaSyDcwdSvwT9kMqmq8KejRWzfra_B7Jc0rAg`)
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