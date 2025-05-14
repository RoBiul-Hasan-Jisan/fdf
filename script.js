

function markAsDone(button) {
    const link = button.previousElementSibling; // Get the link before the button
    link.classList.toggle('completed'); // Toggle the completed class
    button.disabled = true; // Disable the button after clicking
    button.innerText = 'Completed'; // Change button text
}

