
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



