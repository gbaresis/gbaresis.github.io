document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const eventId = document.getElementById('eventId').value;
    window.open('http://bo-tradertools.prd-novibet.systems/browser/event-history/' + eventId  + 'settlement', 'blank');
});

