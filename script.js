const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
    message.textContent = "YAYYY 💕 I knew you would say yes 😭✨";
    noBtn.style.display = "none";
    createConfettiBurst();
});

function moveNoButton() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function createConfettiBurst() {
    const colors = ["#ff4d8d", "#ff85a2", "#ffd166", "#c77dff", "#7bdff2", "#b8f2e6"];

    for (let i = 0; i < 160; i++) {
        const confetti = document.createElement("span");
        confetti.className = "confetti";

        const size = Math.random() * 10 + 6;
        const left = Math.random() * window.innerWidth;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.4;
        const rotation = Math.random() * 720;
        const color = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = `${left}px`;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size * 1.4}px`;
        confetti.style.backgroundColor = color;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.transform = `rotate(${rotation}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}