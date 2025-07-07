// Set the new end date
const endDate = "1 January 2028 08:00:00 PM";

// Show it on the page
document.getElementById("end-date").innerText = endDate;

// Select all countdown input boxes
const inputs = document.querySelectorAll("input");

// Main countdown logic
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; // difference in seconds

    if (diff < 0) return; // stop if countdown is finished

    // Update values
    inputs[0].value = Math.floor(diff / (3600 * 24));  // Days
    inputs[1].value = Math.floor(diff / 3600) % 24;     // Hours
    inputs[2].value = Math.floor(diff / 60) % 60;       // Minutes
    inputs[3].value = Math.floor(diff) % 60;            // Seconds
}

// Initial call
clock();

// Run every second
setInterval(clock, 1000);
