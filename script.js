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

    // You can also use fetch or navigate to the link if needed
    // However, note that cross-origin issues may arise if you try to fetch data from another domain.
    
    // Here you would need to execute your code on the newly opened page,
    // which usually requires browser extensions or user scripts for cross-domain interactions.
    // For the purpose of demonstration, we are just opening the URL.
});

// If you want to run the player extraction code after visiting the page,
// it generally requires running a script directly on the new page.
