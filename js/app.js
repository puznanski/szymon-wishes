document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('heart-container');
    const numberOfHearts = 200;
    const initPositions = [];

    for (let i = 0; i < numberOfHearts; i++) {
        initPositions.push({
            initialScale: 10 * ((Math.random() * 2) + 0.5),
            x: 50 + (Math.random() - 0.5) * 100,
            y: 50 + (Math.random() - 0.5) * 100
        });
    }

    initPositions.forEach((pos, index) => {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = `${pos.x}%`;
            heart.style.top = `${pos.y}%`;
            heart.style.fontSize = `${pos.initialScale}rem`;
            container.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }, index * 50);
    });
});
