// Disable Right-Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable Text Selection and Copying
document.addEventListener("copy", (event) => event.preventDefault());

// Prevent Screenshot (Only Works in Some Mobile Browsers)
document.addEventListener("keydown", function (event) {
    if (event.key === "PrintScreen") {
        alert("Screenshots are disabled!");
        event.preventDefault();
    }
});

// Timer for Expiring Link
let timer = 60;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
    timer--;
    timerElement.textContent = timer;

    if (timer === 0) {
        clearInterval(countdown);
        document.body.innerHTML = "<h2>Profile Expired!</h2>";
    }
}, 1000);
