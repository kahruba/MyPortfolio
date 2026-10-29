
/* =====================================================
   ACHIEVEMENTS PAGE JAVASCRIPT
   No animations
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* 1. Automatic Footer Year */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* 2. Mobile Navbar */

    const navbarMenu = document.getElementById("navbarMenu");

    if (
        navbarMenu &&
        typeof bootstrap !== "undefined"
    ) {
        const navbarCollapse =
            bootstrap.Collapse.getOrCreateInstance(
                navbarMenu,
                { toggle: false }
            );

        const navbarLinks =
            navbarMenu.querySelectorAll(".nav-link");

        navbarLinks.forEach(function (link) {
            link.addEventListener("click", function () {

                if (
                    window.innerWidth < 992 &&
                    navbarMenu.classList.contains("show")
                ) {
                    navbarCollapse.hide();
                }

            });
        });

        /* Close navbar with Escape key */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                window.innerWidth < 992 &&
                navbarMenu.classList.contains("show")
            ) {
                navbarCollapse.hide();
            }

        });
    }


    /* 3. External Link Security */

    document
        .querySelectorAll('a[target="_blank"]')
        .forEach(function (link) {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        });


    /* 4. Image Error Handling */

    document.querySelectorAll("img").forEach(function (img) {

        function handleImageError() {

            if (img.dataset.fallbackApplied === "true") {
                return;
            }

            img.dataset.fallbackApplied = "true";

            img.style.backgroundColor = "#171725";
            img.style.border = "1px dashed #a855f7";
            img.style.objectFit = "contain";

            img.alt = img.alt || "Image unavailable";
        }

        img.addEventListener("error", handleImageError);

        /* Handle an image that failed to load earlier */

        if (img.complete && img.naturalWidth === 0) {
            handleImageError();
        }

    });

});
