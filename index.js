
/* =====================================================
   PROFESSIONAL PORTFOLIO INTERACTIONS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* 1. Automatic footer year */
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* 2. Mobile navbar */
    const navbarMenu = document.getElementById("navbarMenu");

    const navbarLinks = document.querySelectorAll(
        "#navbarMenu .nav-link"
    );

    if (navbarMenu && typeof bootstrap !== "undefined") {

        const bsNavbar = bootstrap.Collapse.getOrCreateInstance(
            navbarMenu,
            { toggle: false }
        );

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

    /* 3. Secure external links */
    document.querySelectorAll('a[target="_blank"]').forEach(
        function (link) {
            link.setAttribute("rel", "noopener noreferrer");
        }
    );

    /* 4. Image fallback */
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

        // Handle images that failed before this listener was added
        if (img.complete && img.naturalWidth === 0) {
            handleImageError();
        }
    });

    /* 5. Scroll reveal animations */
    const revealElements = document.querySelectorAll(
        [
            "main > section:not(.hero-section) .section-heading",
            "main > section:not(.hero-section) .info-card",
            "main > section:not(.hero-section) .project-card",
            ".business-section .row > div",
            ".footer-content"
        ].join(", ")
    );

    if (!revealElements.length) {
        return;
    }

    /*
       Add reveal classes only when the animation system
       can run. Without IntersectionObserver, show content
       normally instead of leaving it hidden.
    */
    if (!("IntersectionObserver" in window)) {
        return;
    }

    document.body.classList.add("js-enabled");

    /* 6. Stagger sibling cards */
    const rows = new Map();

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        const row = element.closest(".row");

        if (row) {
            if (!rows.has(row)) {
                rows.set(row, []);
            }

            rows.get(row).push(element);
        }
    });

    rows.forEach(function (elements) {
        elements.forEach(function (element, index) {
            element.style.setProperty(
                "--reveal-delay",
                Math.min(index * 120, 360) + "ms"
            );
        });
    });

    /* 7. Animate when elements enter the viewport */
    const observer = new IntersectionObserver(
        function (entries, currentObserver) {

            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

});





/* =========================================
   7. EDUCATION ONWARDS SCROLL REVEAL
========================================= */

if ("IntersectionObserver" in window) {

    document.body.classList.add("js-enabled");

    const animatedElements = document.querySelectorAll(
        [
            ".education-section .section-heading",
            ".education-section .info-card",

            ".projects-section .section-heading",
            ".projects-section .project-card",

            ".research-section .section-heading",
            ".research-section .info-card",

            ".achievements-section .section-heading",
            ".achievements-section .info-card",

            ".business-section .section-heading",
            ".business-section .row > div"
        ].join(", ")
    );

    const rows = new Map();

    animatedElements.forEach(function (element) {

        element.classList.add("reveal");

        const row = element.closest(".row");

        if (row) {
            if (!rows.has(row)) {
                rows.set(row, []);
            }

            rows.get(row).push(element);
        }
    });

    /* Stagger animation */
    rows.forEach(function (elements) {

        elements.forEach(function (element, index) {

            element.style.setProperty(
                "--reveal-delay",
                Math.min(index * 120, 360) + "ms"
            );

        });

    });

    /* Scroll reveal observer */
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    animatedElements.forEach(function (element) {
        revealObserver.observe(element);
    });

}



