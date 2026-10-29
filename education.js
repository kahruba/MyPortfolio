
// ================================
// Footer Current Year
// ================================
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ================================
// Mobile Navbar Close on Link Click
// ================================
const navbarCollapse = document.getElementById("navbarNav");

const navbarLinks = document.querySelectorAll(
    "#navbarNav .nav-link"
);

if (navbarCollapse && typeof bootstrap !== "undefined") {
    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (
                navbarCollapse.classList.contains("show")
            ) {
                const bsCollapse =
                    bootstrap.Collapse.getOrCreateInstance(
                        navbarCollapse
                    );

                bsCollapse.hide();
            }
        });
    });
}




document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (!themeToggle || !themeIcon) {
        console.error("Theme toggle button or icon not found.");
        return;
    }

    // Load previously saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    updateThemeButton();

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const currentTheme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";

        localStorage.setItem("theme", currentTheme);
        updateThemeButton();
    });

    function updateThemeButton() {
        const isLight = document.body.classList.contains("light-theme");

        themeIcon.className = isLight
            ? "bi bi-moon-fill"
            : "bi bi-sun-fill";

        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    }
});
