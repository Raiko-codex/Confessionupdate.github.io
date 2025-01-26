// Song links with YouTube universal links
const songs = {
  "Blue": "https://www.youtube.com/watch?v=4adZ7AguVcw",
  "A Thousand Years": "https://www.youtube.com/watch?v=rtOvBOTyX00"
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

  // Redirect to the song's YouTube link
  window.location.href = songs[songName];
});