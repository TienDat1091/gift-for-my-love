    // Set the start date: June 15, 2025
        const startDate = new Date('2025-06-15T00:00:00');

        function updateCountdown() {
            const now = new Date();
            const timeDiff = now - startDate;

            // Calculate days, hours, minutes, seconds
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            // Update the DOM
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }

        // Update every second
        setInterval(updateCountdown, 1000);

        // Initial call to avoid delay
        updateCountdown();