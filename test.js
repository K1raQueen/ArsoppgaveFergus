// Set the timer for 60 seconds
var timer = 60;

// Get the countdown element from the HTML
var countdownElement = document.getElementById("countdown");

// Start the countdown
var countdownInterval = setInterval(function() {
    // Update the timer
    timer--;
    
    // Display the updated timer on the page
    countdownElement.innerHTML = "Time remaining: " + timer + " seconds";
    
    // If the timer reaches 0, stop the countdown
    if (timer <= 0) {
        clearInterval(countdownInterval);
        
        // Display a message when the timer runs out
        countdownElement.innerHTML = "Time's up!";
    }
}, 1000);
