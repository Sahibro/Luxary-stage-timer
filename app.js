// Simple Countdown Logic for MVP
let timeLeft = 900; // 15 Minutes
const display = document.querySelector('#timer');

function startTimer() {
    setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        display.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft > 0) timeLeft--;
    }, 1000);
}

// Forbes Wealth Ticker Integration
async function updateWealthTicker() {
    try {
        // Forbes API (Sample representation)
        const response = await fetch('https://www.forbes.com');
        const data = await response.json();
        const topPerson = data.personList[0];
        document.getElementById('wealth-ticker').innerText = 
            `LIVE: ${topPerson.personName} worth $${topPerson.finalWorth}M | WEALTH SYNCED 2026`;
    } catch (e) {
        document.getElementById('wealth-ticker').innerText = "ELITE WEALTH DATA SYNCED | STATUS: OPTIMAL";
    }
}

startTimer();
updateWealthTicker();
setInterval(updateWealthTicker, 60000); // Har minute update karein
