# Personal Portfolio Website

A responsive personal portfolio website showcasing my projects and skills as a Computer Science student at KFUPM.

## Project Description

This portfolio website is a modern, single-page application designed to highlight my work, introduce myself, and provide a contact method. The site features:

- **About Me Section:** A brief introduction about my background, interests, and career aspirations in web development
- **Projects Section:** A showcase of 2+ projects with titles, descriptions, and visual representations
- **Contact Form:** A functional contact form for visitors to reach out directly
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices using CSS Flexbox and Grid layouts
- **Dark/Light Theme Toggle:** User-friendly theme switching with persistent storage
- **Time-Based Greeting:** Dynamic greeting message that changes based on the time of day
- **Form Validation:** HTML5 validation and user feedback for form submissions

## Technologies Used

- **HTML5:** Semantic markup structure
- **CSS3:** Responsive design with Flexbox/Grid, CSS variables for theming, and smooth transitions
- **JavaScript (ES6+):** Interactive features including theme toggle, dynamic greetings, and form handling
- **LocalStorage API:** For persisting user theme preferences

## Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (optional, for local development)

### Running Locally

1. **Clone or Download the Repository**
   ```bash
   git clone <repository-url>
   cd s202333090-hawraalmajed-assignment1
   ```

2. **Navigate to the Project Directory**
   - Open the project folder in your file explorer or terminal

3. **Run the Website**
   - **Option A:** Open `index.html` directly in your web browser
   - **Option B:** Use a local server (recommended for development)
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000` in your browser

4. **Explore the Features**
   - Toggle between dark and light themes using the button in the navigation
   - Submit the contact form and receive feedback
   - The greeting message will update based on the current time of day

## AI Tool Usage

This project was developed with assistance from AI tools including AWS CodeWhisperer, GitHub Copilot, and Claude AI. These tools were used to:

- Generate initial code structure and boilerplate
- Explain code concepts and JavaScript features
- Provide guidance on CSS best practices for responsive design and theming
- Assist with documentation writing

For a detailed breakdown of how each AI tool was used, what was learned, and how the code was reviewed and modified, please refer to [docs/ai-usage-report.md](docs/ai-usage-report.md).

## Project Structure

```
s202333090-hawraalmajed-assignment1/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # Styling and responsive design
├── js/
│   └── script.js             # Interactive features
├── assets/
│   └── images/               # Project showcase images
├── docs/
│   ├── ai-usage-report.md   # Detailed AI tool usage documentation
│   └── technical-documentation.md
├── README.md                 # This file
└── LICENSE (optional)
```

## Features in Detail

### Dark/Light Theme Toggle
Click the moon/sun icon in the navigation to switch between themes. Your preference is saved locally.

### Dynamic Greeting
The website displays a personalized greeting that changes based on the time of day:
- Morning (6 AM - 11:59 AM): "Good Morning!"
- Afternoon (12 PM - 5:59 PM): "Good Afternoon!"
- Evening (6 PM - 5:59 AM): "Good Evening!"

### Contact Form
The contact form includes:
- Name field (required)
- Email field (required, with HTML5 email validation)
- Message textarea (required)
- Responsive success message upon submission


## Learning Outcomes

This project was a valuable learning experience in:
- Responsive web design principles
- JavaScript event handling and DOM manipulation
- CSS variables and theming techniques
- Working effectively with AI development tools
- Code review and understanding AI-generated code

## Future Enhancements

Potential improvements for future versions:
- Backend integration for email notifications
- Additional project case studies
- Blog section
- Skills/testimonials section

## Author

Hawra Almajed (s202333090)  
Computer Science Student at KFUPM

---

For more details on the technical implementation, see [docs/technical-documentation.md](docs/technical-documentation.md).
