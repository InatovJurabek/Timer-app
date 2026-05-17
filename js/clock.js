// clock.js
const monthNames = [
    "Yanuary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];           
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let isDateDisplayed = false; // Sanani faqat bir marta ko‘rsatish uchun flag
const dateDisplay = document.getElementById("dateDisplay");
const timeDisplay = document.getElementById("timeDisplay");

// Global rejim (clock, timer, stopwatch) – main.js o‘zgartiradi
window.currentMode = "clock";

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  return timeString;
}
function getCurrentDate() {
  const now = new Date();
  const day = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  const weekday = dayNames[now.getDay()];
  const dateString = `${day}-${month} ${year}, ${weekday}`;
  return dateString;
}


// Sana va vaqtni yangilovchi funksiya
function updateDateTime() {
  const now = new Date();

// 1) Sana matni: 15-may 2026, Juma
  const dateString = getCurrentDate();

  // 2) Vaqt matni (faqat "Clock" rejimida kerak)
  const timeString = getCurrentTime();

  // Vaqtni faqat clock rejimida yangilaymiz (timer/stopwatch o‘z vaqtini o‘zi ko‘rsatadi)
  if (timeDisplay && window.currentMode === "clock") {
    timeDisplay.textContent = timeString;
  }

  // Sanani doim yangilaymiz
  if (dateDisplay) {
    if (!isDateDisplayed) {
      dateDisplay.textContent = dateString;
      isDateDisplayed = true; // Sanani faqat bir marta ko‘rsatish uchun flagni o‘zgartiramiz
    }
  }
}

timeDisplay.textContent = getCurrentTime();
dateDisplay.textContent = getCurrentDate();

// Har soniyada ishlaydi
setInterval(updateDateTime, 0); // 0 ms, ya'ni imkon qadar tez yangilash

// Sahifa yuklanganda darhol ko‘rsatish
// updateDateTime();
