// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // player은 html에서 지정한 id값 요소 찾도록
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', /* 유튭 링크 뒤에 붙는 거 */
        playerVars : {
            autoplay : true, // 자동 재생 유무
            loop : true, // 반복 재생 유무
            playlist : 'An6LvWQuj_8' // 반복 재생할 유튭 영상 ID 목록
        },
        events : {
            onReady : function(event) {
                event.target.mute() // 음소거
            }
        }
    });
}
