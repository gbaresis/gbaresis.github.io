// Set expiration date
const expirationDate = new Date('2024-12-31T00:00:00');

if (new Date() > expirationDate) {
    alert("The tool has expired. Please contact the administrator.");
} else {
    // Function to create buttons
    function createButtons() {
        if (!document.getElementById('traderToolsButton') && 
            (window.location.pathname.includes('/stoixima-live/') || window.location.pathname.includes('/live-betting/'))) {
            
            const traderToolsButton = document.createElement("button");
            traderToolsButton.id = "traderToolsButton";
            traderToolsButton.innerHTML = "Trader Tools";
            traderToolsButton.className = "custom-button trader-tools-button"; // Add class for CSS styling

            const miniViewButton = document.createElement("button");
            miniViewButton.id = "miniViewButton";
            miniViewButton.innerHTML = "MiniView";
            miniViewButton.className = "custom-button mini-view-button"; // Add class for CSS styling

            const targetDiv = document.querySelector(".eventScoreboard_caption");
            if (targetDiv && targetDiv.parentNode) {
                targetDiv.parentNode.insertBefore(traderToolsButton, targetDiv.nextSibling);
                targetDiv.parentNode.insertBefore(miniViewButton, traderToolsButton.nextSibling);
            }

            // Retrieve the event ID once
            const pathname = window.location.pathname;
            const eventId = pathname.slice(-8);

            // Declare MiniView URLs in an object
            const urlMiniViews = {
                Soccer: 'http://bo-livetools2.prd-novibet.systems/live/soccer_match/' + eventId,
                Basketball: 'http://bo-livetools2.prd-novibet.systems/live/basketball_match/' + eventId,
                Tennis: 'http://bo-livetools2.prd-novibet.systems/live/tennis_match/' + eventId,
                Badminton: 'http://bo-livetools2.prd-novibet.systems/live/badminton_match/' + eventId
                // Add more sports here as needed
            };

            // Event listener for Trader Tools button
            traderToolsButton.onclick = function () {
                const urlTraderTools = 'http://bo-tradertools.prd-novibet.systems/browser/event-history/' + eventId;
                window.open(urlTraderTools, '_blank');
            };

            // Event listener for MiniView button
            miniViewButton.onclick = function () {
                const eventType = determineEventType(); // Determine event type
                const urlMiniView = urlMiniViews[eventType]; // Get the URL based on event type

                if (urlMiniView) {
                    window.open(urlMiniView, '_blank', 'width=500,height=620,left=200,top=100');
                } else {
                    alert("Event type not supported.");
                }
            };
        }
    }

    // Function to determine the event type based on keywords
    function determineEventType() {
        // Get all text content from the body
        const pageText = document.body.textContent;

        // Define keyword filters as arrays
        const keywordFilters = {
            Soccer: ["Goals"],
            Basketball: ["Quarter Markets"],
            Tennis: ["Set Markets", "Games Markets"], // Check for both or either
            Badminton: ["Set Markets"] // Only check for Badminton after Tennis
        };

        // Check for event types based on keywords
        let eventType = 'Unknown'; // Default fallback

        // Check for Tennis first
        const hasSetMarkets = keywordFilters.Tennis[0] && pageText.includes(keywordFilters.Tennis[0]);
        const hasGamesMarkets = keywordFilters.Tennis[1] && pageText.includes(keywordFilters.Tennis[1]);

        if (hasSetMarkets && hasGamesMarkets) {
            eventType = 'Tennis'; // Recognize Tennis if both keywords are present
        } else if (hasGamesMarkets) {
            eventType = 'Tennis'; // Recognize Tennis if only Games Markets is present
        } else if (hasSetMarkets) {
            eventType = 'Badminton'; // Recognize Badminton only if Set Markets is present and Games Markets is absent
        } else if (keywordFilters.Soccer.some(keyword => pageText.includes(keyword))) {
            eventType = 'Soccer';
        } else if (keywordFilters.Basketball.some(keyword => pageText.includes(keyword))) {
            eventType = 'Basketball';
        }

        return eventType; // Return the determined event type
    }

    // Prevent back navigation
    function preventBackNavigation() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        });
    }

    // MutationObserver to watch for DOM changes
    const observer = new MutationObserver(function () {
        if (window.location.pathname.includes('/stoixima-live/') || window.location.pathname.includes('/live-betting/')) {
            createButtons();
            preventBackNavigation();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial button creation
    if (window.location.pathname.includes('/stoixima-live/') || window.location.pathname.includes('/live-betting/')) {
        createButtons();
        preventBackNavigation();
    }
}











