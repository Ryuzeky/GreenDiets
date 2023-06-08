var video = document.getElementById("myVideo");
var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var forwardBtn = document.getElementById("forwardBtn");
var btnRewind = document.getElementById("rewindBtn");

playBtn.addEventListener("click", function() {
  video.play();
});

pauseBtn.addEventListener("click", function() {
  video.pause();
});

forwardBtn.addEventListener("click", function() {
  video.currentTime += 5; // Adelanta 10 segundos (puedes ajustar el valor según tus necesidades)
}); 
rewindBtn.addEventListener('click', function() {
    video.currentTime -= 5;
  });