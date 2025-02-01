document.addEventListener("DOMContentLoaded", function() {
    // Get all skill-fill elements
    const skillFills = document.querySelectorAll('.skill-fill');
    
    // Loop through each skill bar and set the width based on the data-width attribute
    skillFills.forEach(skill => {
        const width = skill.getAttribute('data-width');
        skill.style.width = `${width}%`;
    });
});
