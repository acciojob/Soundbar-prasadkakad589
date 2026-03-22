const buttons = document.querySelectorAll(".btn");

let currentAudio = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    if (btn.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    const sound = btn.getAttribute("data-sound");

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.remove();
    }
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.autoplay = true;

    document.body.appendChild(audio);

    currentAudio = audio;
  });
});