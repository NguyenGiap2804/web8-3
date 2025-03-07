const messages = [
    "Chúc bé 8/3 thật vui vẻ nha!",
    "Bé là cô gái đáng yêu nhất luôn á!",
    "8/3 này, bé phải cười thật nhiều nha!"
];
let messageIndex = 0;
let noClickCount = 0;

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const nextBtn = document.getElementById('next-btn');
const messageElement = document.getElementById('message');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const pleadElement = document.getElementById('plead');
const music = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');

music.play();
musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = 'Tắt nhạc';
    } else {
        music.pause();
        musicToggle.textContent = 'Bật nhạc';
    }
});

nextBtn.addEventListener('click', () => {
    messageIndex++;
    if (messageIndex < messages.length) {
        messageElement.textContent = messages[messageIndex];
    } else {
        messageElement.textContent = "Ấn vào đây nha!";
        nextBtn.textContent = "Ấn vào đây";
        nextBtn.onclick = () => {
            page1.classList.remove('active');
            page2.classList.add('active');
        };
    }
});

yesBtn.addEventListener('click', () => {
    page2.classList.remove('active');
    page3.classList.add('active');
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    const pleadMessages = [
        "Thôi mà, nhấn 'Có' đi bé ơi!",
        "Bé ơi, anh buồn lắm đó, nhấn 'Có' nha!",
        "Đừng làm anh khóc mà, nhấn 'Có' đi!",
        "Bé không thương anh thật hả? Nhấn 'Có' đi!"
    ];

    pleadElement.textContent = pleadMessages[noClickCount - 1];
    pleadElement.classList.remove('hidden');
    setTimeout(() => pleadElement.classList.add('hidden'), 2000);

    noBtn.style.fontSize = `${18 - noClickCount * 4}px`;
    yesBtn.style.fontSize = `${18 + noClickCount * 4}px`;

    if (noClickCount >= 4) {
        noBtn.style.display = 'none';
    }
});