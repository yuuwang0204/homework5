// Add js here.
//initialize video and  button variables
let video = document.querySelector('.video');
let play_button = document.getElementById('play');
let pause_button = document.getElementById('pause');
let volume_slider = document.getElementById('slider');
let mute_button  = document.getElementById('mute');
let slowdown_button = document.getElementById('slower');
let speedup_button  = document.getElementById('faster');
let skip_ahead_button = document.getElementById('skip');
let volume_shown = document.getElementById('volume');


//initialize functions to control the video
//play the video
function playVideo(){
    video.play();
}
//pause the video
function pauseVideo(){
    video.pause();
}

//control volume
function volumeControl(){
    video.volume = this.value / 100;
    let volume_value = this.value;
    volume_shown.innerHTML = `${volume_value}`;


}
//mute the video
function muteVideo(){
    if(video.muted == false){
        video.muted = true;
        mute_button.innerHTML = 'Unmute';
        slider.value = 0;
        volume_shown.innerHTML = `${slider.value}`;
    }
    else if (video.muted == true){
        video.muted = false;
        mute_button.innerHTML = 'Mute';
        slider.value = 100;
        volume_shown.innerHTML = `${slider.value}`;
    }

}
//slow down the video
function slowDown(){
    if(video.playbackRate == 2.0){
        video.playbackRate = 1.0;
    }
    else if(video.playbackRate == 1.0){
        video.playbackRate = 0.5;
    }
    else if(video.playbackRate == 0.5){
        alert('Video is at slowest speed!');
    }

}

//speed up the video
function speedUp(){
    if(video.playbackRate == 0.5){
        video.playbackRate = 1.0;
    }
    else if(video.playbackRate == 1.0){
        video.playbackRate = 2.0;
    }
    else if(video.playbackRate == 2.0){
        alert('Video is at fastest speed!');
    }

}
//skip ahead
function skipAhead(){
    if (video.ended == false){
        video.currentTime = video.currentTime + 15;
    }
    else if (video.ended == true){
        video.load();
    }
}





//Page load, turn off auto play and looping
video.load();
video.loop = false;
video.autoplay = false;



play_button.addEventListener('click',playVideo);


pause_button.addEventListener('click', pauseVideo);
document.getElementById("volume").innerHTML="100";
volume_slider.addEventListener('change', volumeControl);
mute_button.addEventListener('click',muteVideo);
slowdown_button.addEventListener('click', slowDown);
speedup_button.addEventListener('click',speedUp);
skip_ahead_button.addEventListener('click', skipAhead);



