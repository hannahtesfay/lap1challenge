const luckyButton = document.getElementById('feelingLucky')
luckyButton.addEventListener('click', startFeelingLucky)

async function startFeelingLucky(event) {
    event.preventDefault();
    fetch('http://localhost:3000/lucky')
        .then(res => res.json())
        .then(openLuckyLink)
}

function openLuckyLink() {
    window.open(link, "_self")
};