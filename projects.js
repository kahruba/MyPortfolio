
/* =====================================================
   PROJECTS PAGE FUNCTIONALITY
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* 1. Automatic Footer Year */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* 2. Mobile Navbar Functionality */

    const navbarMenu = document.getElementById("navbarMenu");

    const navbarLinks = document.querySelectorAll(
        "#navbarMenu .nav-link"
    );

    if (navbarMenu && typeof bootstrap !== "undefined") {

        const bsNavbar = bootstrap.Collapse.getOrCreateInstance(
            navbarMenu,
            { toggle: false }
        );

        /* Close navbar after clicking a navigation link */

        navbarLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (
                    window.innerWidth < 992 &&
                    navbarMenu.classList.contains("show")
                ) {
                    bsNavbar.hide();
                }

            });

        });


        /* Close navbar when Escape key is pressed */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                window.innerWidth < 992 &&
                navbarMenu.classList.contains("show")
            ) {
                bsNavbar.hide();
            }

        });

    }


    /* 3. Secure External Links */

    document.querySelectorAll('a[target="_blank"]').forEach(
        function (link) {

            link.setAttribute("rel", "noopener noreferrer");

        }
    );


    /* 4. Image Fallback */

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

        /* Handle images that failed before the listener was added */

        if (img.complete && img.naturalWidth === 0) {
            handleImageError();
        }

    });

});
