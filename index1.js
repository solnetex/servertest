const circle = document.getElementById('circle');

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let velocityX = 0;
let velocityY = 0;

// Adjusted values for less bounce and smoother stop
let friction = 0.8; // More friction = smoother stop
let bounce = 0.03;   // Less bounce

function updatePosition() {
    let dx = mouseX - circleX;
    let dy = mouseY - circleY;

    velocityX += dx * 0.05;
    velocityY += dy * 0.05;

    velocityX *= friction;
    velocityY *= friction;

    if (Math.abs(velocityX) < 0.01 && Math.abs(velocityY) < 0.01) {
        velocityX *= (1 - bounce);
        velocityY *= (1 - bounce);
    }

    circleX += velocityX;
    circleY += velocityY;

    circle.style.left = `${circleX - circle.offsetWidth / 2}px`;
    circle.style.top = `${circleY - circle.offsetHeight / 2}px`;

    requestAnimationFrame(updatePosition);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

updatePosition();
