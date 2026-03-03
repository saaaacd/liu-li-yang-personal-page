document.addEventListener('DOMContentLoaded', () => {
    const timeValueElement = document.getElementById('current-time');
    const timeDateElement = document.getElementById('current-date');

    function updateTime() {
        const now = new Date();

        // Format time
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // '0' should be '12'

        // Pad single digits
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        timeValueElement.textContent = timeString;

        // Format date dynamically
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString(undefined, options);
        timeDateElement.textContent = dateString;
    }

    // Initialize the clock immediately
    updateTime();

    // Update the clock every second
    setInterval(updateTime, 1000);

    // Subtle Parallax Effect on Mouse Move
    document.addEventListener('mousemove', (e) => {
        // Calculate offset based on center position
        const xOffset = (window.innerWidth / 2 - e.pageX) / 40;
        const yOffset = (window.innerHeight / 2 - e.pageY) / 40;

        // Target elements
        const content = document.querySelector('.hero-content');
        const backgroundBlob = document.querySelector('.gradient-blob');

        if (content) {
            content.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        }

        if (backgroundBlob) {
            // Apply slight opposite movement for background blob
            backgroundBlob.style.transform = `translate(calc(-50% + ${-xOffset * 1.5}px), calc(-50% + ${-yOffset * 1.5}px))`;
        }
    });
});
