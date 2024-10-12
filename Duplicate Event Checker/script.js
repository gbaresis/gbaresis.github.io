document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;

    // Open the new tab and run the code after the page loads
    const newTab = window.open(url, '_blank');
    newTab.onload = function() {
        duplicateEvents();
    };
});

function duplicateEvents() {
    const competitors = [];
    const number0fEvents = document.querySelectorAll(".eventLiveMatches_competitorContainer").length / 2;

    setTimeout(() => {
    document.querySelector('.inPlayEvents_headerItemsCollapseIcon').click();
    document.querySelector('.inPlayEvents_headerItemsCollapseIcon').click();

    const competitors = [];
    for (let i = 0; i < 2 * number0fEvents; i++) {
        competitors.push(document.querySelectorAll(".eventLiveMatches_competitorContainer")[i].textContent);
    }

    const darr = [];
    const duplicates = [];
    for (var i = 0; i < competitors.length; i++) {
        const teams = competitors[i].toLowerCase().split(' vs ').sort().join(' vs '); // Sort to ignore order and case sensitivity
        if (darr.includes(teams) && !duplicates.includes(teams)) {
            duplicates.push(teams);
        } else {
            darr.push(teams);
        }
    }

    // Display the message below the button
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = `${number0fEvents} events found.<br>${duplicates.length} duplicate events in total.<br>${duplicates.join('<br>')}`;
}, 5000); // Delay execution by 2 seconds

}