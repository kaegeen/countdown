// countdown.js
const seconds = parseInt(process.argv[2], 10);

if (isNaN(seconds) || seconds <= 0) {
  console.log("Usage: node countdown.js <seconds>");
  process.exit(1);
}

let remaining = seconds;

console.log(`⏳ Countdown started: ${seconds} seconds`);
const interval = setInterval(() => {
  if (remaining > 0) {
    console.log(`${remaining}...`);
    remaining--;
  } else {
    console.log("🎉 Time's up!");
    clearInterval(interval);
  }
}, 1000);
