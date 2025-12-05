document.addEventListener("DOMContentLoaded", () => {
  const playlist = document.getElementById("playlist");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const addSongForm = document.getElementById("addSongForm");
  const newSongInput = document.getElementById("newSong");

  let songs = Array.from(playlist.querySelectorAll("li p")).map(
    (el) => el.textContent
  );

  function renderPlaylist() {
    playlist.innerHTML = "";
    songs.forEach((song) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = song;
      li.appendChild(p);
      playlist.appendChild(li);
    });
  }

  function shuffleSongs() {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    renderPlaylist();
  }

  addSongForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newSong = newSongInput.value.trim();
    if (newSong) {
      songs.push(newSong);
      newSongInput.value = "";
      renderPlaylist();
    }
  });

  shuffleBtn.addEventListener("click", shuffleSongs);

  renderPlaylist();
});
