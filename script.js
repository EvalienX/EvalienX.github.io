// Get reference to the audio element
const audioPlayer = document.getElementById('audio-player');

// List of audio files to play in sequence
const audioFiles = ['audio1.mp3', 'audio2.mp3'];
let currentAudioIndex = 0;

// Function to play the next audio file in the queue
function playNextAudio() {
    if (currentAudioIndex < audioFiles.length) {
        audioPlayer.src = audioFiles[currentAudioIndex];
        audioPlayer.load();
        audioPlayer.play();
        currentAudioIndex++;
    } else {
        // If all audio files have been played, start over
        currentAudioIndex = 0;
        playNextAudio();
    }
}

// Event listener to play the next audio when the current one ends
audioPlayer.addEventListener('ended', playNextAudio);

// Start playing the first audio
playNextAudio();
