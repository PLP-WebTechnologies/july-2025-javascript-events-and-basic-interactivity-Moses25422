// script.js

// Part 1: Event Handling Examples

// Click event
document.getElementById('clickBtn').addEventListener('click', function() {
    document.getElementById('clickOutput').textContent = 'Button was clicked!';
});

// Mouse events
const mouseArea = document.getElementById('mouseArea');
const mouseOutput = document.getElementById('mouseOutput');

mouseArea.addEventListener('mouseover', function() {
    mouseOutput.textContent = 'Mouse is over the area';
});

mouseArea.addEventListener('mouseout', function() {
    mouseOutput.textContent = 'Mouse left the area';
});

mouseArea.addEventListener('dblclick', function() {
    mouseOutput.textContent = 'Area was double-clicked!';
});

// Keyboard events
const keyboardInput = document.getElementById('keyboardInput');
const keyboardOutput = document.getElementById('keyboardOutput');

keyboardInput.addEventListener('keyup', function(event) {
    keyboardOutput.textContent = `Last key pressed: ${event.key}`;
});

// Part 2: Interactive Elements

// Counter game
let count = 0;
const counterValue = document.getElementById('counterValue');

document.getElementById('incrementBtn').addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    count--;
    counterValue.textContent = count;
});

document.getElementById('resetCounterBtn').addEventListener('click', function() {
    count = 0;
    counterValue.textContent = count;
});

// FAQ section
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isVisible = answer.classList.contains('show');
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(function(ans) {
            ans.classList.remove('show');
        });
        
        // Update expand/collapse icons
        document.querySelectorAll('.faq-question span').forEach(function(span) {
            span.textContent = '+';
        });
        
        // If answer wasn't visible, show it
        if (!isVisible) {
            answer.classList.add('show');
            this.querySelector('span').textContent = '-';
        }
    });
});

// Tabbed interface
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and panes
        tabButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        
        document.querySelectorAll('.tab-pane').forEach(function(pane) {
            pane.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Dark/light mode toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});

// Part 3: Form Validation
const form = document.getElementById('validationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    // Name validation
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    
    if (nameInput.value.trim().length < 2) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // Password validation
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }
    
    // Message validation
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    
    if (messageInput.value.trim().length < 10) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('formSuccess').style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(function() {
            form.reset();
            document.getElementById('formSuccess').style.display = 'none';
        }, 3000);
    }
});

// Real-time validation for better UX
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        // Hide error message when user starts typing
        const errorId = this.id + 'Error';
        document.getElementById(errorId).style.display = 'none';
    });
});