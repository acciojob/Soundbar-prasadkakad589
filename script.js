const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    const sound = button.dataset.sound;
    const audioPath = `sounds/${sound}.mp3`;

    console.log("Playing:", audioPath); // debug

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(audioPath);

    currentAudio.play().catch(err => {
      console.error("Error playing audio:", err);
      alert("Sound file not found or blocked!");
    });
  });
});