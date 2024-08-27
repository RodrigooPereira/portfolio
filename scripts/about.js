const about = document.getElementById("about-box");
const skills = document.getElementById("skills-box");
const experience = document.getElementById("experience-box");
const education = document.getElementById("education-box");

const buttonToDeactivate = document.getElementById("btn-about");


function showAbout() {
    about.style.display = 'block';
    skills.style.display = 'none';
    experience.style.display = 'none';
    education.style.display = 'none';
}

function showSkills() {
    about.style.display = 'none';
    skills.style.display = 'block'; 
    experience.style.display = 'none';
    education.style.display = 'none'; 

    if (buttonToDeactivate) {
        buttonToDeactivate.classList.remove('active');
    }
}

function showExperience() {
    about.style.display = 'none';
    skills.style.display = 'none'; 
    experience.style.display = 'block';
    education.style.display = 'none'; 

    if (buttonToDeactivate) {
        buttonToDeactivate.classList.remove('active');
    }
}

function showEducation() {
    about.style.display = 'none';
    skills.style.display = 'none'; 
    experience.style.display = 'none';
    education.style.display = 'block'; 

    if (buttonToDeactivate) {
        buttonToDeactivate.classList.remove('active');
    }
}

