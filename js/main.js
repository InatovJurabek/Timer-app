// DOM elementlarini olish
const clockBtn = document.getElementById("btn");
const timerBtn = document.getElementById("btn2");
const stopwatchBtn = document.getElementById("btn3");

const header = document.querySelector(".card-header");
const display = document.getElementById("timeDisplay");

window.currentMode = "clock";

function stopAllModules() {
  if (window.timer && window.timer.pause) {
    window.timer.pause();
  }

  if (window.stopwatch && window.stopwatch.pause) {
    window.stopwatch.pause();
  }
}

clockBtn.addEventListener("click", () => {
  setActiveBtn(clockBtn);
  stopAllModules();
  window.currentMode = "clock";
  header.textContent = "Time";
  display.textContent = "";
});

timerBtn.addEventListener("click", () => {
  setActiveBtn(timerBtn);
  stopAllModules();
  window.currentMode = "timer";
  header.textContent = "Timer";

  if (window.timer && typeof window.timer.show === "function") {
    window.timer.show(display);
  }
});
stopwatchBtn.addEventListener("click", () => {
  setActiveBtn(stopwatchBtn);
  stopAllModules();
  window.currentMode = "stopwatch";
  header.textContent = "Stopwatch";

  if (window.stopwatch && typeof window.stopwatch.show === "function") {
    window.stopwatch.show(display);
  }
});

// Active section
const allBtns = document.querySelectorAll(".btn");

function setActiveBtn(activeBtn) {
  allBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });

  activeBtn.classList.add("active-btn");
}
window.addEventListener("DOMContentLoaded", () => {
  setActiveBtn(clockBtn);
});

// Full screeen
const fullscreenBtn = document.getElementById("fullscreenBtn");

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullscreenBtn.innerHTML =
      '<i data-lucide="minimize-2"></i><span class="btn-text">Exit</span>';
    if (typeof lucide !== "undefined") lucide.createIcons();
  } else {
    document.exitFullscreen();
    fullscreenBtn.innerHTML =
      '<i data-lucide="maximize-2"></i><span class="btn-text">Fullscreen</span>';
    if (typeof lucide !== "undefined") lucide.createIcons();
  }
}

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    fullscreenBtn.innerHTML =
      '<i data-lucide="maximize-2"></i><span class="btn-text">Fullscreen</span>';
    if (typeof lucide !== "undefined") lucide.createIcons();
  }
});

fullscreenBtn.addEventListener("click", toggleFullscreen);





