// Thêm đoạn code sau vào đầu file script.js
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
    const navbar = document.querySelector(".dropdown")
    navbar.style.display = "block";
    navbar.style.transform = "translateY(0px)"
}

function cancel() {
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
    setTimeout(() => {
        navbar.style.display = "none";
    }, 300);
}

// Typewriter Effect
const texts = [
    "NHÓM SÁNG TẠO",
    "ĐỘI NGŨ CHUYÊN NGHIỆP",
    "ĐỒNG ĐỘI TIN CẬY"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

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

// Navbar hide on scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("contact-form");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Kiểm tra CAPTCHA (cần xử lý phía server)
        const captcha = form.querySelector('input[name="captcha"]').value;
        
        // Gửi dữ liệu form đến server (sử dụng Fetch API)
        fetch('submit-form.php', {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Tin nhắn đã được gửi thành công!");
                form.reset();
            } else {
                alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        });
    });
});

// Refresh CAPTCHA
document.querySelector('.captcha img').addEventListener('click', function() {
    this.src = 'captcha.php?' + new Date().getTime();
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

// Thêm đoạn code sau vào cuối file script.js
let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;
let resizeTimer;

function handleResize() {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const memberCards = document.querySelectorAll('.member-card');
    const memberGrid = document.querySelector('.member-grid');
    
    // Kiểm tra xem có sự thay đổi đáng kể về kích thước hoặc orientation không
    if (
        Math.abs(currentWidth - lastWidth) > 50 ||
        Math.abs(currentHeight - lastHeight) > 50 ||
        (lastWidth < 768 && currentWidth >= 768) ||
        (lastWidth >= 768 && currentWidth < 768) ||
        (lastWidth < 1024 && currentWidth >= 1024) ||
        (lastWidth >= 1024 && currentWidth < 1024)
    ) {
        // Tạm thời ẩn grid để tránh hiệu ứng nhấp nháy
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

// Khởi tạo ban đầu
handleResize();

// Thêm đoạn code sau vào file script.js
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heroHeight = document.querySelector('.hero').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight - 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Thêm đoạn code sau vào cuối file script.js
let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
        // Cuộn xuống
        header.classList.add('hidden');
    } else {
        // Cuộn lên
        header.classList.remove('hidden');
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}, false);

// Giữ nguyên các đoạn mã JavaScript khác

// Thêm đoạn code sau vào cuối file script.js
function handleProjectResize() {
    const projectGrid = document.querySelector('.project-grid');
    const projects = document.querySelectorAll('.project');
    
    // Tạm thời ẩn grid để tránh hiệu ứng nhấp nháy
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

// Khởi tạo ban đầu
handleProjectResize();

// Smooth hover effect for project cards
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    project.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Thêm đoạn code sau vào cuối file script.js

// Đảm bảo rằng các section có chiều cao tối thiểu bằng chiều cao của viewport
function adjustSectionHeight() {
    const sections = document.querySelectorAll('section');
    const viewportHeight = window.innerHeight;
    
    sections.forEach(section => {
        section.style.minHeight = `${viewportHeight}px`;
    });
}

// Gọi hàm khi trang được tải và khi cửa sổ thay đổi kích thước
window.addEventListener('load', adjustSectionHeight);
window.addEventListener('resize', adjustSectionHeight);
