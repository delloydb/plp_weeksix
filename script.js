// Form Validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Reset errors
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
    formSuccess.style.display = 'none';

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        formSuccess.style.display = 'block';
    }
});

// Modal Toggle
const toggleModalButton = document.getElementById('toggleModalButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');

toggleModalButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});
