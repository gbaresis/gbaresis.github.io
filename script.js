document.getElementById("lineupForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the input fields
    const optaLink = document.getElementById("input1").value;
    const noviLink = document.getElementById("input2").value;

    // Alert to confirm submission
    alert("Ok! Navigating to the Opta link...");

    // Open the Opta link in a new tab
    window.open(optaLink, "_blank");

    
    
    const playerElements = document.querySelectorAll('.player-cell_playerName__auB9H');
const players = Array.from(playerElements).map(player => player.textContent.trim());

// Remove the 1st (index 0) and 12th (index 11) elements and remove "(C)" from names
const updatedPlayers = players
    .filter((_, index) => index !== 0 && index !== 11)  // Exclude the 1st and 12th players
    .map(player => player.replace(/\s*\(C\)\s*/g, '')) // Remove "(C)" from names
    .slice(0, 20); // Limit the list to the first 20 elements

// Print the updated players list
console.log(updatedPlayers);
});

// If you want to run the player extraction code after visiting the page,
// it generally requires running a script directly on the new page.
