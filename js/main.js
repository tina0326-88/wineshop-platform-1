// Countdown Timer
let h = 48;
let m = 23;
let s = 15;

setInterval(() => {
  s--;

  if (s < 0) {
    s = 59;
    m--;
    if (m < 0) {
      m = 59;
      h--;
    }
  }

  document.querySelectorAll(".countdown .num").forEach((el, i) => {
    if (i === 0) el.textContent = String(h).padStart(2, "0");
    if (i === 1) el.textContent = String(m).padStart(2, "0");
    if (i === 2) el.textContent = String(s).padStart(2, "0");
  });
}, 1000);

// Wishlist interaction
document.querySelectorAll(".wishlist").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = btn.textContent === "♡" ? "❤️" : "♡";
  });
});