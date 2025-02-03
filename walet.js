let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let celebrationSection = document.getElementById("celebration");
let noTexts = ["Napewno?", "SERIO?!!!!", "Pomyśl...", "hey buddy, what's up? wanna buy a hot dog? :3", "PLEASE PLEASE PLEASE ;-;", "bruh", "OK, koniec!"];
let noClickCount = 0;

noButton.addEventListener("click", function() {
    if (noClickCount < noTexts.length) {
        noButton.textContent = noTexts[noClickCount];
        noClickCount++;
    }

    // Zwiększanie rozmiaru przycisku "Yes"
    let currentWidth = yesButton.offsetWidth;
    let currentHeight = yesButton.offsetHeight;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    if (currentWidth < screenWidth || currentHeight < screenHeight) {
        yesButton.style.width = (currentWidth + 200) + "px";
        yesButton.style.height = (currentHeight + 150) + "px";
        yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 5) + "px";
    }

    // Zablokuj przycisk "No" po 7 kliknięciach
    if (noClickCount >= noTexts.length) {
        noButton.disabled = true; // Wyłącz przycisk "No"
        noButton.style.cursor = "not-allowed"; // Zmień kursor na "not-allowed"
    }
});

yesButton.addEventListener("click", function() {
    // Ukryj przycisk "Yes" i pokaż sekcję z GIF-em i napisem
    yesButton.classList.add("hidden");
    noButton.classList.add("hidden");
    document.querySelector("h1").classList.add("hidden");
    document.querySelector(".gif-container").classList.add("hidden");
    celebrationSection.classList.remove("hidden"); // Pokazanie sekcji celebracji
});
