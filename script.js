const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const surprise = document.getElementById("surprise");

let noMoves = 0;
let answeredYes = false;

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", celebrateYes);

function celebrateYes() {
    if (answeredYes) return;
    answeredYes = true;

    noBtn.style.display = "none";
    yesBtn.disabled = true;
    yesBtn.textContent = "You said yes 💖";

    createConfettiBurst();

    message.textContent = "Wait... one more thing 💖";

    setTimeout(() => {
        message.textContent = "You're all I hope for, work for, and fight for.";
    }, 1400);

    setTimeout(() => {
        message.textContent = "I want to spend the rest of my life with you.";
    }, 3000);

    setTimeout(() => {
        message.textContent = "Forever starts with you! ✨";
        surprise.hidden = false;
        createFloatingHearts();
    }, 4600);
}

function moveNoButton() {
    noMoves++;

    if (noMoves >= 7) {
        noBtn.textContent = "Okay fine... Yes 💕";
        noBtn.classList.remove("no-btn");
        noBtn.classList.add("yes-btn");
        noBtn.removeEventListener("mouseenter", moveNoButton);
        noBtn.removeEventListener("click", moveNoButton);
        noBtn.addEventListener("click", celebrateYes);

        noBtn.style.position = "relative";
        noBtn.style.left = "0";
        noBtn.style.top = "0";
        noBtn.style.transform = "none";
        return;
    }

    const card = document.querySelector(".card");
    const cardRect = card.getBoundingClientRect();

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const padding = 20;

    const minX = cardRect.left + padding;
    const maxX = cardRect.right - buttonWidth - padding;

    const minY = cardRect.top + padding;
    const maxY = cardRect.bottom - buttonHeight - padding;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    const playfulTexts = [
        "Are you sure? 😭",
        "Try again 😌",
        "Nope 💕",
        "I object 🙈",
        "Still no? 😅",
        "You sure sure? 🥺"
    ];

    noBtn.textContent = playfulTexts[Math.min(noMoves - 1, playfulTexts.length - 1)];
}

function createConfettiBurst() {
    const colors = ["#ff4d8d", "#ff85a2", "#ffd166", "#c77dff", "#7bdff2", "#b8f2e6"];

    for (let i = 0; i < 180; i++) {
        const confetti = document.createElement("span");
        confetti.className = "confetti";

        const size = Math.random() * 10 + 6;
        const left = Math.random() * window.innerWidth;
        const duration = Math.random() * 2 + 2.2;
        const delay = Math.random() * 0.45;
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
        }, 5500);
    }
}

function createFloatingHearts() {
    for (let i = 0; i < 24; i++) {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.textContent = "💖";

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 4}s`;
        heart.style.animationDelay = `${Math.random() * 1.5}s`;
        heart.style.fontSize = `${Math.random() * 18 + 18}px`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7500);
    }
}