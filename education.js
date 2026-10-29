
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

