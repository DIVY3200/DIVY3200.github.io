// Typewriter Effect
const texts = [
    "FULL STACK DEVELOPER",
    "SOFTWARE ENGINEER",
    "AIML ENTHUSIAST"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (!textElements) return;  // Prevent errors if element is missing

    if (charIndex < texts[textIndex].length) {
        textElements.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (!textElements) return;

    if (textElements.textContent.length > 0) {
        textElements.textContent = textElements.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.addEventListener("load", typeWriter);

// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// Scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                document
                    .querySelector(`header nav a[href*="${id}"]`)
                    ?.classList.add("active");
            });

            // Active section animation
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    });

    // Sticky header
    document.querySelector("header").classList.toggle("sticky", top > 100);

    // Remove navbar toggle on link click
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");

    // Footer animation on scroll
    let footer = document.querySelector("footer");
    if (footer) {
        footer.classList.toggle(
            "show-animate",
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
        );
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let interactiveElements = document.querySelectorAll("button, a");

    interactiveElements.forEach(element => {
        element.addEventListener("click", function () {
            setTimeout(() => {
                element.blur();
            }, 100);
        });
    });
});

// Read More / Read Less Toggle
function myFunc() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (!dots || !moreText || !btnText) return; // Prevent errors if elements are missing

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}
