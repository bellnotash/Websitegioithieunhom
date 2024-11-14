document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.transparent-header');
    const heroHeight = document.querySelector('.hero').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight - 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Hamburger menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.display = "block";
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
    setTimeout(() => {
        navbar.style.display = "none";
    }, 300);
}

// Typewriter Effect
const texts = [
    "NHÓM SÁNG TẠO",
    "ĐỘI NGŨ CHUYÊN NGHIỆP",
    "ĐỒNG ĐỘI TIN CẬY"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// Navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth hover effect for member cards
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Resize handling
let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;
let resizeTimer;

function handleResize() {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const memberCards = document.querySelectorAll('.member-card');
    const memberGrid = document.querySelector('.member-grid');
    
    if (
        Math.abs(currentWidth - lastWidth) > 50 ||
        Math.abs(currentHeight - lastHeight) > 50 ||
        (lastWidth < 768 && currentWidth >= 768) ||
        (lastWidth >= 768 && currentWidth < 768) ||
        (lastWidth < 1024 && currentWidth >= 1024) ||
        (lastWidth >= 1024 && currentWidth < 1024)
    ) {
        memberGrid.style.opacity = '0';
        memberGrid.style.transition = 'none';

        memberCards.forEach(card => {
            card.style.transition = 'none';
        });

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            memberGrid.style.opacity = '1';
            memberGrid.style.transition = 'opacity 0.3s ease';

            memberCards.forEach(card => {
                card.style.transition = '';
            });
        }, 50);
    }

    lastWidth = currentWidth;
    lastHeight = currentHeight;
}

window.addEventListener('resize', handleResize);
window.addEventListener('orientationchange', () => {
    setTimeout(handleResize, 100);
});

handleResize();

function handleProjectResize() {
    const projectGrid = document.querySelector('.project-grid');
    const projects = document.querySelectorAll('.project');
    
    projectGrid.style.opacity = '0';
    projectGrid.style.transition = 'none';

    projects.forEach(project => {
        project.style.transition = 'none';
    });

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        projectGrid.style.opacity = '1';
        projectGrid.style.transition = 'opacity 0.3s ease';

        projects.forEach(project => {
            project.style.transition = '';
        });
    }, 50);
}

window.addEventListener('resize', handleProjectResize);
window.addEventListener('orientationchange', () => {
    setTimeout(handleProjectResize, 100);
});

handleProjectResize();

// Ensure sections have a minimum height equal to the viewport height
function adjustSectionHeight() {
    const sections = document.querySelectorAll('section');
    const viewportHeight = window.innerHeight;
    
    sections.forEach(section => {
        section.style.minHeight = `${viewportHeight}px`;
    });
}

window.addEventListener('load', adjustSectionHeight);
window.addEventListener('resize', adjustSectionHeight);

