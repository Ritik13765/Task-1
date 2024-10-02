// JavaScript for form validation
document.getElementById('waiting-list-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let name = document.getElementById('name').value;
    let college = document.getElementById('college').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;

    if (name && college && email && contact) {
        alert(`Thank you, ${name}! You have successfully joined the waiting list.`);
        // Reset form after successful submission
        document.getElementById('waiting-list-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
