
const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent =
        "Hello! Thank you for visiting my portfolio!";
});
