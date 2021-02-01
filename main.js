var videoPlayer = document.querySelector("#video-player");
var videoPlayBtn = document.querySelector("#video-play");
var videoPauseBtn = document.querySelector("#video-pause");
var videoPermotka = document.querySelector("#video-permotka");
var videoVolume = document.querySelector("#video-sound");
var volumeIndicator = document.querySelector("#volume-indicator");
var videoFullscreenBtn = document.querySelector("#video-fullscreen");
var videoImage = document.querySelector(".video-img");
var videoHolder = document.querySelector(".video-holder");

videoHolder.addEventListener('mouseover', function() {
    document.querySelector(".item").style.bottom = '5px';
});

videoHolder.addEventListener('mouseleave', function() {
    document.querySelector(".item").style.bottom = '-55px';
});

videoImage.addEventListener('click', function() {
    videoPlayer.play();
});

videoPlayer.addEventListener('click', function() {
    videoPlayer.pause();
});

videoPlayer.addEventListener('dblclick', function() {
    videoPlayer.play();
});

window.addEventListener('load', function() {
    videoPermotka.value = 0;
    videoVolume.value = 80;
    videoPlayer.value = 1;
    videoImage.setAttribute('src', './images/Iwantmore.jpg');
});

videoPlayer.addEventListener('volumechange', function() {
    var videoSoundVolume = videoPlayer.volume*100;
    if(videoSoundVolume >= 80) {
        volumeIndicator.setAttribute('src', "./images/volume-up-interface-symbol-1.svg");
    } else if(videoSoundVolume >= 50 && videoSoundVolume < 80) {
        volumeIndicator.setAttribute('src', "./images/volume-up-interface-symbol-2.svg");
    } else if(videoSoundVolume >= 20 && videoSoundVolume < 50) {
        volumeIndicator.setAttribute('src', "./images/volume-up-interface-symbol-3.svg");
    } else if(videoSoundVolume > 0 && videoSoundVolume < 20) {
        volumeIndicator.setAttribute('src', "./images/volume-up-interface-symbol-4.svg");
    }
});

videoPlayer.addEventListener('play', function() {
    videoImage.style.display = 'none';
    setInterval(function() {
        videoPermotka.value = (videoPlayer.currentTime*100)/videoPlayer.duration;
    }, 1000);
});

videoPlayer.addEventListener('ended', function() {
    alert('Tuadi!');
});

videoPlayBtn.addEventListener('click', function() {
    videoPlayer.play();
});

videoPauseBtn.addEventListener('click', function() {
    videoPlayer.pause();
});

videoPermotka.addEventListener('change', function() {
    videoPlayer.currentTime = (videoPermotka.value*videoPlayer.duration)/100;
});

videoVolume.addEventListener('change', function() {
    videoPlayer.volume = videoVolume.value/100;
});

videoFullscreenBtn.addEventListener('click', function() {
    if(videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen();
    } else if(videoPlayer.webkitRequestFullScreen) {
        videoPlayer.webkitRequestFullScreen();
    }
});

