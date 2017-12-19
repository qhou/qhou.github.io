var currVideo = 0;
console.log(currVideo);

var videos = [
    './media/video/scared_mild_1.mp4',
    './media/video/scared_moderate_2.mp4',
    './media/video/angry_mild.mp4'
]

window.onload = function () {

    window.addEventListener('unhandledrejection', event => {
        // Prevent error output on the console:
        event.preventDefault();
        console.log('Reason: ' + event.reason);

    });
    //'/Users/admin/GitHub/asd_vr/evaluation_tool/media/video/angry_mild.mp4'
    //'/Users/admin/GitHub/asd_vr/evaluation_tool/media/video/scared_mild_1.mp4'

    setVideoSrc(getVideoSrc(currVideo));
    videoListener();
}

function videosExceptionHandler() {
    if (currVideo >= videos.length) {
        alert('You have completed the evalutation.');
        return true;
    }
}

function getVideoSrc(i) {
    return videos[i];
}

function setVideoSrc(currSrc) {
    var player = document.getElementById("videoPlayer");
    var vid = document.getElementById("thisVideo");
    player.pause();
    vid.src = currSrc;
    player.load();
    player.play();
}

function videoListener() {
    var v = document.getElementById("videoPlayer");
    v.addEventListener("ended", function () { toggleOptions(); }, true);
}

function toggleOptions() {
    $('#introText').hide();
    $('#videoHolder').hide();
    $('#optionHolder').show();
}

function toggleIntro() {
    $('.intro').hide();
    $('#main-space').show();
}

function optionHelper() {
    //store op into dbr
    $('#optionHolder').hide();
    //choose video to show
    currVideo++;

    if (currVideo < videos.length) {
        console.log('passed exception');
        setVideoSrc(getVideoSrc(currVideo));
        console.log(currVideo);
        $('#videoHolder').show();
        //thisVid.play();
        videoListener();
    } else {
        
    videosExceptionHandler();
    $('#introText').show();
    $('#videoHolder').hide();
    $('#optionHolder').hide();
    }
}

function randomNum(min, max) {
    Math.floor((Math.random() * max) + min);
}