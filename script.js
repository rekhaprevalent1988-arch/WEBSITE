/* =========================================================
   BDS CONVENT SCHOOL — NAVIGATION
   ========================================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const menu = document.getElementById("navMenu");
    const button = document.querySelector(".menu-btn");

    const isOpen = menu.classList.toggle("active");

    button.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

    button.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    button.textContent = isOpen ? "×" : "☰";
}


/* ================= CLOSE AFTER CLICK ================= */

document
    .querySelectorAll("#navMenu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const menu =
                    document.getElementById("navMenu");

                const button =
                    document.querySelector(".menu-btn");

                menu.classList.remove("active");

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

                button.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                button.textContent = "☰";

            }
        );

    });


/* ================= CLOSE ON OUTSIDE CLICK ================= */

document.addEventListener(
    "click",
    function (event) {

        const menu =
            document.getElementById("navMenu");

        const button =
            document.querySelector(".menu-btn");

        if (
            menu.classList.contains("active") &&
            !menu.contains(event.target) &&
            !button.contains(event.target)
        ) {

            menu.classList.remove("active");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

            button.textContent = "☰";
        }

    }
);
