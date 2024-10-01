// Get modal element
var modal = document.getElementById('modal');

// Get open modal button
var openModalBtn = document.getElementById('openModalBtn');

// Get close button
var closeBtn = document.getElementsByClassName('close')[0];

// Listen for open click
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Listen for close click
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Listen for outside click
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Form submission handler
var form = document.getElementById('internshipForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Form submitted successfully!');
    modal.style.display = 'none'; // Close the modal
});
