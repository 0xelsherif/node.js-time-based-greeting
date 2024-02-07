// Import the moment library
const moment = require('moment');

// Function to generate the greeting based on the time of day
function generateGreeting() {
    // Get the current hour using moment.js
    const hour = moment().hour();

    // Define the greeting messages based on the time of day
    let greeting = '';
    if (hour >= 0 && hour < 12) {
        greeting = 'Good morning!';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    return greeting;
}

// Display the greeting message
console.log(generateGreeting());