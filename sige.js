// Song links with `intent://` for Android devices
const songs = {
  "Blue": "intent://www.youtube.com/watch?v=4adZ7AguVcw#Intent;package=com.google.android.youtube;scheme=https;end",
  "A Thousand Years": "intent://www.youtube.com/watch?v=rtOvBOTyX00#Intent;package=com.google.android.youtube;scheme=https;end"
};

// Event listener for the button
document.getElementById("confess-btn").addEventListener("click", () => {
  const mood = document.getElementById("mood").value;
  const selectedSong = document.querySelector('input[name="song"]:checked');
  
  if (!selectedSong) {
    document.getElementById("output").textContent = "Please select a song!";
    return;
  }

  const songName = selectedSong.value;
  const message = `I love you! Here's a song for this ${mood} mood: ${songName} ❤️`;
  
  // Display the confession message
  document.getElementById("output").textContent = message;

  // Open the song in the YouTube app using intent
  window.location.href = songs[songName];
});
