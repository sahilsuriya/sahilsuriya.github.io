document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill-fill");
    skills.forEach(skill => {
        skill.style.width = "0%";
    });

    function animateSkills() {
        skills.forEach(skill => {
            const width = skill.getAttribute("style").match(/\d+/)[0];
            skill.style.transition = "width 2s ease-in-out";
            skill.style.width = width + "%";
        });
    }

    setTimeout(animateSkills, 500);
});
