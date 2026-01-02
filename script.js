const messages = [
    "seriusan ncii?",
    "yakin nih??",
    "yang bener budee ncii?",
    "nciii please...",
    "coba pikirkan!",
    "kalo ngga, i will be really sad...",
    "aku sedih sihh...",
    "kaka bakal sedih sedih banget ngett...",
    "ok fine, aku bakal berhenti tanya...",
    "cumaa bercandaa bilang YESS dong ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}