# AI Usage Report - Portfolio Assignment 2

## Project Overview

This assignment built upon the Assignment 1 portfolio by adding interactive features, API integration, animations, and improved user feedback. The following AI tools were used throughout development.

---

## Tools Used & Use Cases

### Claude AI (Anthropic)
**Use Case:** Mentorship, Guided Learning, Code Review, Debugging

Claude AI was the primary tool used throughout Assignment 2. It was used in a mentorship style — explaining concepts first, then guiding implementation rather than generating complete solutions. Key areas where Claude assisted:

- **Tab Switching Feature:** Explained the concept of using `data-category` attributes and `querySelectorAll` to filter DOM elements dynamically. Claude explained the logic before I wrote the code myself.
- **API Integration:** Guided the integration of the Advice Slip API, explaining the `fetch()` chain, how to handle JSON responses, and how to handle errors with `.catch()`.
- **Error Handling:** Explained why empty `.catch()` blocks are a problem and guided me to add user-friendly error messages.
- **CSS Animations:** Explained `@keyframes`, `transition`, and `transform` properties and their role in improving UX.
- **Debugging:** Helped identify bugs such as typos in element IDs and a `form` vs `from` typo in a keyframe definition.

### AWS CodeWhisperer
**Use Case:** Initial Code Generation (Assignment 1 base)

AWS CodeWhisperer was used in Assignment 1 to generate the initial HTML, CSS, and JavaScript structure. This boilerplate carried forward into Assignment 2 as the starting point, with all new features written manually on top of it.

### GitHub Copilot
**Use Case:** CSS Styling Generation

GitHub Copilot was used to generate CSS styling code to shorten development time, particularly for layout and visual design. All generated CSS was reviewed and understood before being included in the project.

---

## What I Wrote vs What AI Generated

| Feature | Written By |
|--------|-----------|
| Initial HTML/CSS structure | AWS CodeWhisperer (Assignment 1) |
| CSS styling | GitHub Copilot (reviewed and modified) |
| Tab switching JS logic | Me (with conceptual guidance from Claude) |
| Advice API fetch function | Me (with structural guidance from Claude) |
| Form validation logic | Me |
| Active tab highlight logic | Me |
| HTML structure updates | Me |

---

## Benefits

1. **Concept-first learning:** Claude always explained the *why* before the *how*, which helped me understand rather than just copy.
2. **Debugging support:** Having an AI explain error messages saved significant time.
3. **API discovery:** Claude helped identify a working free API when the original Quotable API had an expired certificate.
4. **Time efficiency:** AI-generated CSS and boilerplate allowed focus on learning JavaScript interactivity rather than spending time on styling details.

## Challenges

1. **Avoiding over-reliance:** Required conscious effort to attempt code before asking for help.
2. **Dead APIs:** The first suggested API (Quotable) had an expired SSL certificate, requiring a switch mid-development.
3. **Understanding async fetch:** The `.then()` chain took time to fully understand.

---

## Learning Outcomes

- **DOM Traversal:** Selecting multiple elements with `querySelectorAll` and looping with `forEach`
- **Data Attributes:** Using `data-category` to tag and filter HTML elements
- **Fetch API:** Making real HTTP requests, parsing JSON, and handling errors
- **CSS Animations:** Writing `@keyframes` and applying `transition` for smooth UI effects
- **Debugging:** Using the browser console (`F12`) to identify and fix runtime errors
- **Async JS:** Understanding why `fetch` values must be used inside `.then()` callbacks

---

## Responsible Use Statement

All AI assistance was used to support learning, not replace it. AI-generated code was reviewed, tested, and understood before being included. Claude was used as a tutor, AWS CodeWhisperer provided initial scaffolding, and Copilot assisted with styling — all with full understanding of the output.
