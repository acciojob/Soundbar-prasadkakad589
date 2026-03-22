const buttons = document.querySelectorAll(".btn");

let currentAudio = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Stop button
    if (btn.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    const sound = btn.getAttribute("data-sound");

    // Stop previous sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new sound
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});