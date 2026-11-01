// 1. Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});


// 2. Project Search
const searchInput = document.getElementById("project-search");
const categoryFilter = document.getElementById("category-filter");
const projectCards = document.querySelectorAll(".project-card");
const noResults = document.getElementById("no-results");

function filterProjects() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleProjects = 0;

    projectCards.forEach(function (card) {
        const projectText = card.textContent.toLowerCase();
        const projectCategory = card.dataset.category;

        const matchesSearch = projectText.includes(searchText);
        const matchesCategory =
            selectedCategory === "all" ||
            projectCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
            visibleProjects++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.hidden = visibleProjects !== 0;
}

searchInput.addEventListener("input", filterProjects);


// 3. Project Category Filter
categoryFilter.addEventListener("change", filterProjects);


// 4. Reading Progress Bar
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    progressBar.style.width = progress + "%";
});


// 5. Back to Top Button
const backToTop = document.getElementById("back-to-top");

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


// 6. Project Details Popup
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modalTitle.textContent = button.dataset.title;
        modalDescription.textContent = button.dataset.description;

        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
        modalClose.focus();
    });
});

function closeModal() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});


// Close popup using Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});


// 7. Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// 8. Automatic Copyright Year
document.getElementById("year").textContent =
    new Date().getFullYear();
