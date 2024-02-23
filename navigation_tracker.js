let navigationPath = []; // Array to store the navigation steps

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') { // Focus on link clicks
        let step = {
            url: event.target.href,
            type: 'link' // Identify as a link click
        };
        navigationPath.push(step);
    } 
    // ... You can add more logic to track form submissions or other important actions
});

// Placeholder function (You'll need a way to call this from Python)
function getNavigationPath() {
    let ws = new WebSocket("ws://localhost:8000");
    ws.onopen = function() {
        console.log("WebSocket connected. Sending navigation path...");  
        ws.send(JSON.stringify(navigationPath)); // Send as JSON
        ws.close(); // Close connection after sending
    };
}