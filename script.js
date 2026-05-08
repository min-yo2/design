document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.reaction-button--like');

    likeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const isActive = button.classList.toggle('is-active');
            const countElement = button.querySelector('.reaction-button__count');
            let count = parseInt(countElement.textContent);

            if (isActive) {
                countElement.textContent = count + 1;
                triggerFloatingHearts(button);
            } else {
                countElement.textContent = count - 1;
            }
        });
    });

    function triggerFloatingHearts(parent) {
        // Create container if it doesn't exist
        let container = parent.querySelector('.floating-hearts');
        if (!container) {
            container = document.createElement('div');
            container.className = 'floating-hearts';
            parent.appendChild(container);
        }

        const heartSVG = `
            <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        `;

        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = heartSVG;
            
            const x = (Math.random() - 0.5) * 50; // -25px to 25px
            heart.style.setProperty('--x', `${x}px`);
            heart.style.animationDelay = `${Math.random() * 0.2}s`;
            
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 1000);
        }
    }
});
