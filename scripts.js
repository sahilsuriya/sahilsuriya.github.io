// script.js
document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill-fill");

    skills.forEach(skill => {
        skill.style.width = "0%"; // Initialize to 0 width

        // Get the data-width attribute value (e.g., 90, 75, etc.)
        const width = skill.dataset.width;

        // Apply transition and set the width with a slight delay for the animation
        setTimeout(() => {
            skill.style.transition = "width 1s ease-in-out"; // Adjust duration as needed
            skill.style.width = width + "%";
        }, 100); // Small delay before animation starts
    });
});
