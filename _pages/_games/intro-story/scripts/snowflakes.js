window.onload = function () {
    const canvas = document.getElementById('snowflakes-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas to full screen
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();

    // Adjust canvas size when window is resized or zoomed
    window.addEventListener('resize', setCanvasSize);

    // Snowflake object
    function Snowflake(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    // Create initial snowflakes
    let snowflakes = [];
    function createSnowflakes() {
        snowflakes = [];
        for (let i = 0; i < 100; i++) {
            const radius = Math.random() * 5 + 2; // Random size
            const x = Math.random() * canvas.width; // Random x position
            const y = Math.random() * canvas.height; // Random y position
            const speedX = Math.random() * 2 + 0.5; // Positive x speed to move right
            const speedY = Math.random() * 2 + 0.5; // Positive y speed to move down
            snowflakes.push(new Snowflake(x, y, radius, speedX, speedY));
        }
    }
    createSnowflakes();

    // Draw snowflakes
    function drawSnowflake(snowflake) {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    // Update snowflake positions
    function updateSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

        for (let i = 0; i < snowflakes.length; i++) {
            const snowflake = snowflakes[i];

            // Update position to move from top-left to bottom-right
            snowflake.x += snowflake.speedX;
            snowflake.y += snowflake.speedY;

            // Wrap around if snowflake goes out of bounds
            if (snowflake.x > canvas.width) {
                snowflake.x = 0;
            }

            if (snowflake.y > canvas.height) {
                snowflake.y = 0;
            }

            drawSnowflake(snowflake);
        }

        requestAnimationFrame(updateSnowflakes); // Loop the animation
    }

    // Handle resizing and zooming
    window.addEventListener('resize', () => {
        setCanvasSize();
        createSnowflakes(); // Recreate snowflakes based on the new canvas size
    });

    updateSnowflakes(); // Start the animation
};
