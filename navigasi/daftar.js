// Target date (1 November 2024)
const targetDate = new Date('2024-11-01T00:00:00');

function countdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById('timer').innerHTML = `
        <span>${days}</span>d
        <span>${hours}</span>h
        <span>${minutes}</span>m
        <span>${seconds}</span>s
    `;

    // Update the countdown every second
    setTimeout(countdown, 1000);
}

// Start the countdown
countdown();
