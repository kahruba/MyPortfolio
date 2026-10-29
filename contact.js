document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile navbar menu
  const navbarMenu = document.getElementById("navbarMenu");

  if (navbarMenu && window.bootstrap) {
    const closeMobileMenu = () => {
      if (window.innerWidth < 992 && navbarMenu.classList.contains("show")) {
        bootstrap.Collapse
          .getOrCreateInstance(navbarMenu)
          .hide();
      }
    };

    // Close the menu after clicking a navigation link
    navbarMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close the menu when pressing Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && window.innerWidth < 992) {
        closeMobileMenu();
      }
    });
  }

  // Improve security for links opening in a new tab
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const relValues = new Set(
      (link.getAttribute("rel") || "")
        .split(/\s+/)
        .filter(Boolean)
    );

    relValues.add("noopener");
    relValues.add("noreferrer");

    link.setAttribute("rel", [...relValues].join(" "));
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
