// Cache DOM elements
const cards = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const box = document.querySelectorAll(".box");
const binary = document.querySelector(".binary");

// Function to update countdown
function updateCountdown(targetDate) {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  const seconds = Math.floor(timeDifference / 1000) % 60;
  const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const dayList = [
    Math.floor(days / 10),
    days % 10,
    Math.floor(hours / 10),
    hours % 10,
    Math.floor(minutes / 10),
    minutes % 10,
    Math.floor(seconds / 10),
    seconds % 10,
  ];

  for (let i = 0; i < 8; i++) {
    const value = cards[i].innerHTML;
    back[i].innerHTML = dayList[i];
    if (value !== back[i].innerHTML) {
      box[i].classList.add("active");
    } else {
      box[i].classList.remove("active");
    }
    setTimeout(() => {
      cards[i].innerHTML = dayList[i];
    }, 500);
  }

  binary.innerHTML = days.toString(2);
}

// Function to start countdown interval
function startCountdown() {
  const targetDate = new Date(2024, 4 - 1, 29, 18, 30, 0);
  const interval = setInterval(() => {
    updateCountdown(targetDate);
  }, 1010);
}

// Call startCountdown function
startCountdown();
