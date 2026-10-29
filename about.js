
document.addEventListener("DOMContentLoaded", function () {
    // Automatically update footer year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Close mobile navbar after clicking a navigation link
    const navbarMenu = document.getElementById("navbarMenu");
    const navLinks = document.querySelectorAll("#navbarMenu .nav-link");

    if (navbarMenu && typeof bootstrap !== "undefined") {
        const navbarCollapse = bootstrap.Collapse.getOrCreateInstance(
            navbarMenu,
            { toggle: false }
        );

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (navbarMenu.classList.contains("show")) {
                    navbarCollapse.hide();
                }
            });
        });

        // Close mobile navbar when Escape is pressed
        document.addEventListener("keydown", function (event) {
            if (
                event.key === "Escape" &&
                navbarMenu.classList.contains("show")
            ) {
                navbarCollapse.hide();
            }
        });
    }

    // Add security attributes to external links opening in new tabs
    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        const relValues = new Set(
            (link.getAttribute("rel") || "")
                .split(/\s+/)
                .filter(Boolean)
        );

        relValues.add("noopener");
        relValues.add("noreferrer");

        link.setAttribute("rel", Array.from(relValues).join(" "));
    });
});




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
