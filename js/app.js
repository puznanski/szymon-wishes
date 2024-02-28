document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('heart-container');
    const numberOfHearts = 200; // Adjust based on how dense you want the animation
    const initPositions = [];

    for (let i = 0; i < numberOfHearts; i++) {
        initPositions.push({
            // For now, all hearts will start from the same position (center),
            // but you might add more properties like initialScale, speed, etc.
            x: 50 + (Math.random() - 0.5) * 100, // Percentage of the container width
            y: 50 + (Math.random() - 0.5) * 100, // Percentage of the container height
            initialScale: (Math.random() * 2) + 0.5 // Starting scale
        });
    }

    // Use the initialPositions array to set properties when creating hearts
    initPositions.forEach((pos, index) => {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️'; // Heart emoji
            // Example of using the initial position, though all the same for now
            heart.style.left = `${pos.x}%`;
            heart.style.top = `${pos.y}%`;
            heart.style.fontSize = `${pos.initialScale}rem`;
            container.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }, index * 50); // Adjust timing for effect
    });
});
