var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate  *= 0.9;
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime < video.duration - 5) {
		video.currentTime += 5;
	} else {
		video.currentTime = 0;
	}
	console.log("Current Time: " + video.currentTime);
	console.log(video.duration);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == false) {
		video.muted = true;
		this.innerHTML="Unmute";
	} else {
		video.muted = false;
		this.innerHTML="Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});