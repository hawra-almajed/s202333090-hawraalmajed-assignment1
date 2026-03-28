// Time-based greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) greeting.textContent = 'Good Morning!';
else if (hour < 18) greeting.textContent = 'Good Afternoon!';
else greeting.textContent = 'Good Evening!';

// Dark/Light theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Form interaction
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = 'Message sent successfully!';
    form.reset();
});

// Tab Switching (Projects)
const allBtn = document.getElementById("allBtn");
const webBtn = document.getElementById("webBtn");
const researchBtn = document.getElementById("researchBtn");
const projects = document.querySelectorAll(".project-card");

allBtn.classList.remove("active");
webBtn.classList.remove("active");
researchBtn.classList.remove("active");

allBtn.addEventListener("click", () => {
    researchBtn.classList.remove("active");
    webBtn.classList.remove("active");
    allBtn.classList.add("active");

    projects.forEach(project => {
        project.style.display = "block";
    });
});

webBtn.addEventListener("click", () => {
    researchBtn.classList.remove("active");
    allBtn.classList.remove("active");
    webBtn.classList.add("active");
    
    projects.forEach(project => {
        if (project.getAttribute("data-category") === "web")
            project.style.display = "block";
        else project.style.display = "none";
    });
});

researchBtn.addEventListener("click", () => {
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    researchBtn.classList.add("active");
    projects.forEach(project => {
        if (project.getAttribute("data-category") === "research")
            project.style.display = "block";
        else project.style.display = "none";
    });
});

// Quote API
const contentEl = document.getElementById("content");
const adviceBtn = document.getElementById("adviceBtn");

function fetchAdvice() {
    contentEl.textContent = "Loading..."
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        contentEl.textContent = data.slip.advice;
    })
    .catch(error => {
        contentEl.textContent = "Failed to load advice. Please try again.";
    });
}

fetchAdvice(); // 1st call

adviceBtn.addEventListener("click", () => {
    fetchAdvice();
})

// Form Validation
// const contactForm = document.getElementById("contactForm");
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const nameInput = contactForm.elements["name"].value;
//     const emailInput = contactForm.elements["name"].value;
//     const passwordInput = contactForm.elements["name"].value;

//     if (!emailRegex.test(emailInput))
//         formMessage.textContent = "Please enter a valid email address.";
//     else formMessage.textContent = "Your message has been sent successfully."
// })