document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const eventId = document.getElementById('eventId').value;
    document.getElementById('output').textContent = `Event ID: ${eventId}`;
});

