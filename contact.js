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
