
// 1. Welcome Message
const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent =
        "Hello! Thank you for visiting my portfolio. Have a great day!";
});


// 2. Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
});


// 3. Project Search
const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const noProjects = document.getElementById("noProjects");

projectSearch.addEventListener("input", function () {
    const searchText = projectSearch.value.toLowerCase();
    let visibleProjects = 0;

    projectCards.forEach(function (card) {
        const projectText = card.textContent.toLowerCase();

        if (projectText.includes(searchText)) {
            card.style.display = "block";
            visibleProjects++;
        } else {
            card.style.display = "none";
        }
    });

    noProjects.hidden = visibleProjects !== 0;
});


// 4. Live Digital Clock
const liveClock = document.getElementById("liveClock");

function updateClock() {
    const now = new Date();

    liveClock.textContent = "Current time: " +
        now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);


// 5. Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 6. Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


// 7. Automatic Copyright Year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
