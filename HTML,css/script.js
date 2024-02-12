// Get the video element
var video = document.getElementById("myVideo");
// Get the button element
var btn = document.getElementById("myBtn");

// Function to toggle video play/pause and update button text
function togglePlayPause() {
    if (video.paused) {
        // If video is paused, play it and change button text to "Pause"
        video.play();
        btn.textContent = "Pause";
    } else {
        // If video is playing, pause it and change button text to "Play"
        video.pause();
        btn.textContent = "Play";
    }
}

// Function to handle button click
btn.addEventListener("click", function() {
    // Toggle play/pause and update button text
    togglePlayPause();
});

// Event listener to update button text when video playback is ended
video.addEventListener("ended", function() {
    btn.textContent = "Play";
});
