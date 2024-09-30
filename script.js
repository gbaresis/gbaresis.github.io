document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const eventId = document.getElementById('eventId').value;
    window.open('http://bo-tradertools.prd-novibet.systems/browser/event-history/' + eventId  + '/settlement', 'blank');
});

// Find the <h5> element with the text "Anytime Goalscorer 🚀"
const h5Element = Array.from(document.querySelectorAll('h5.title-caption')).find(h5 => 
    h5.textContent.includes('Anytime Goalscorer 🚀'));

// If the <h5> element is found, locate its parent and the corresponding edit button
if (h5Element) {
    // Find the nearest div with the class 'buttons' in the same section as the <h5>
    const editButton = h5Element.closest('.header').querySelector('.edit-btn');
    
    // If the button exists, click it
    if (editButton) {
        editButton.click();
        console.log("Clicked the Edit button associated with 'Anytime Goalscorer 🚀'");
    } else {
        console.log("Edit button not found near 'Anytime Goalscorer 🚀'");
    }
} else {
    console.log("'Anytime Goalscorer 🚀' element not found.");
}

