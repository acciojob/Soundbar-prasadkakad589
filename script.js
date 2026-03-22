const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // STOP BUTTON
    if (btn.classList.contains("stop")) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      return;
    }

    const sound = btn.getAttribute("data-sound");

    // Remove previous audio element from DOM
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove();
    }

    // ✅ Create an actual <audio> element in DOM
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}.mp3`;
    audio.autoplay = true;
    audio.controls = true; // Optional: makes Cypress detect it

    // Append to body so Cypress sees it
    document.body.appendChild(audio);

    // Save reference
    currentAudio = audio;
  });
});