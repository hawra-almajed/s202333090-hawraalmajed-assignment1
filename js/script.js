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
