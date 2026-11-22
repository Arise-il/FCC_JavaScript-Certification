
const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playSound(key) {
  const audio = document.getElementById(key);

  if (!audio || !audio.classList.contains("clip")) {
    return;
  }

  const pad = audio.closest(".drum-pad");

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.id;

  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 150);
}

// Handle mouse clicks
drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    playSound(audio.id);
  });
});

// Handle keyboard presses
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  playSound(key);
});

