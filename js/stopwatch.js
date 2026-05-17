window.stopwatch = {
  time: 0,
  interval: null,
  isRunning: false,
  lapCount: 0,

  show(display) {
    display.innerHTML = `
        <div class="stopwatch-wrapper">

            <div id="stopwatchDisplay">

                <span class="main-time">
                    00:00
                </span>

                <span class="milliseconds">
                    00
                </span>

            </div>
            <div class="stopwatch-buttons">

                <button id="startStopwatch">
                    Start
                </button>

                <button id="pauseStopwatch">
                    Pause
                </button>

                <button id="resetStopwatch">
                    Reset
                </button>

                <button id="lapStopwatch">
                    Lap
                </button>

            </div>

            <div class="laps-container">

                <ul id="lapsList"></ul>

            </div>

        </div>
    `;

    this.addEvents();
    this.updateDisplay();
  },

  addEvents() {
    const startBtn = document.getElementById("startStopwatch");
    const pauseBtn = document.getElementById("pauseStopwatch");
    const resetBtn = document.getElementById("resetStopwatch");
    const lapBtn = document.getElementById("lapStopwatch");

    startBtn.addEventListener("click", () => {
      this.start();
    });

    pauseBtn.addEventListener("click", () => {
      this.pause();
    });

    resetBtn.addEventListener("click", () => {
      this.reset();
    });

    lapBtn.addEventListener("click", () => {
      this.addLap();
    });
  },

  start() {
    if (this.isRunning) return;

    this.isRunning = true;

    this.interval = setInterval(() => {
      this.time += 10;

      this.updateDisplay();
    }, 10);
  },

  pause() {
    clearInterval(this.interval);

    this.isRunning = false;
  },

  reset() {
    clearInterval(this.interval);

    this.time = 0;

    this.lapCount = 0;

    this.isRunning = false;

    this.updateDisplay();

    const lapsList = document.getElementById("lapsList");

    if (lapsList) {
      lapsList.innerHTML = "";
    }
  },

  addLap() {
    if (this.time <= 0) return;

    this.lapCount++;

    const lapsList = document.getElementById("lapsList");

    const li = document.createElement("li");

    li.innerHTML = `
      <span>
        Lap ${this.lapCount}
      </span>

      <span>
        ${this.getFormattedTime()}
      </span>
    `;

    lapsList.prepend(li);
  },

  getFormattedTime() {
    const minutes = Math.floor(this.time / 60000)
      .toString()
      .padStart(2, "0");

    const seconds = Math.floor((this.time % 60000) / 1000)
      .toString()
      .padStart(2, "0");

    const milliseconds = Math.floor((this.time % 1000) / 10)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  },

  updateDisplay() {
    const minutes = Math.floor(this.time / 60000)
      .toString()
      .padStart(2, "0");

    const seconds = Math.floor((this.time % 60000) / 1000)
      .toString()
      .padStart(2, "0");

    const milliseconds = Math.floor((this.time % 1000) / 10)
      .toString()
      .padStart(2, "0");

    const mainTime = document.querySelector(".main-time");

    const millisecondsText = document.querySelector(".milliseconds");

    if (mainTime) {
      mainTime.textContent = `${minutes}:${seconds}`;
    }

    if (millisecondsText) {
      millisecondsText.textContent = milliseconds;
    }
  },
};


