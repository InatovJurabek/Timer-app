window.timer = {
  timeLeft: 0,
  interval: null,
  isRunning: false,

  show(display) {
    display.innerHTML = `
            <div class="timer-wrapper">

                <div id="timerDisplay">
                    <span class="main-time">00:00</span>
                    <span class="seconds">00</span>
                </div>

                <div class="timer-controls">

                    <input 
                        type="number" 
                        id="hoursInput" 
                        placeholder="HH"
                        min="0"
                    >

                    <input 
                        type="number" 
                        id="minutesInput" 
                        placeholder="MM"
                        min="0"
                        max="59"
                    >

                    <input 
                        type="number" 
                        id="secondsInput" 
                        placeholder="SS"
                        min="0"
                        max="59"
                    >

                </div>

                <div class="timer-buttons">

                    <button id="startTimer">Start</button>
                    <button id="pauseTimer">Pause</button>
                    <button id="resetTimer">Reset</button>

                </div>

            </div>
        `;

    this.addEvents();
    this.updateDisplay();
  },

  addEvents() {
    const startBtn = document.getElementById("startTimer");
    const pauseBtn = document.getElementById("pauseTimer");
    const resetBtn = document.getElementById("resetTimer");

    startBtn.addEventListener("click", () => {
      this.start();
    });

    pauseBtn.addEventListener("click", () => {
      this.pause();
    });

    resetBtn.addEventListener("click", () => {
      this.reset();
    });
  },

  start() {
    if (this.isRunning) return;

    if (this.timeLeft <= 0) {
      const hours = Number(document.getElementById("hoursInput").value) || 0;

      const minutes =
        Number(document.getElementById("minutesInput").value) || 0;

      const seconds =
        Number(document.getElementById("secondsInput").value) || 0;

      this.timeLeft = hours * 3600 + minutes * 60 + seconds;
    }

    if (this.timeLeft <= 0) return;

    this.isRunning = true;

    this.interval = setInterval(() => {
      this.timeLeft--;

      this.updateDisplay();

      if (this.timeLeft <= 0) {
        clearInterval(this.interval);

        this.isRunning = false;

        this.timeLeft = 0;

        this.updateDisplay();

        alert("Timer Finished");
      }
    }, 1000);
  },

  pause() {
    clearInterval(this.interval);

    this.isRunning = false;
  },

  reset() {
    clearInterval(this.interval);

    this.timeLeft = 0;

    this.isRunning = false;

    this.updateDisplay();

    document.getElementById("hoursInput").value = "";
    document.getElementById("minutesInput").value = "";
    document.getElementById("secondsInput").value = "";
  },

  updateDisplay() {
    const hours = Math.floor(this.timeLeft / 3600)
      .toString()
      .padStart(2, "0");

    const minutes = Math.floor((this.timeLeft % 3600) / 60)
      .toString()
      .padStart(2, "0");

    const seconds = (this.timeLeft % 60).toString().padStart(2, "0");

    const mainTime = document.querySelector(".main-time");
    const secondsText = document.querySelector(".seconds");

    if (mainTime) {
      mainTime.textContent = `${hours}:${minutes}`;
    }

    if (secondsText) {
      secondsText.textContent = seconds;
    }
  },
};



