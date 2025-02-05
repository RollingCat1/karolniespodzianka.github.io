let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let celebrationSection = document.getElementById("celebration");
let noTexts = ["Napewno?", "SERIO?!!!!", "Rysiu", "hey buddy, what's up? wanna buy a hot dog? :3", "14", "sansgranie", "OK, koniec!" "pa", "Co nosi giermek rycerza informatyka?", "Kopie zapasową"];
let noClickCount = 0;

noButton.addEventListener("click", function() {
    if (noClickCount < noTexts.length) {
        noButton.textContent = noTexts[noClickCount];
        noClickCount++;
    }

    // "Yes"
    let currentWidth = yesButton.offsetWidth;
    let currentHeight = yesButton.offsetHeight;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    if (currentWidth < screenWidth || currentHeight < screenHeight) {
        yesButton.style.width = (currentWidth + 220) + "px";
        yesButton.style.height = (currentHeight + 170) + "px";
        yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 5) + "px";
    }

  if (noClickCount >= noTexts.length) {
                noButton.remove();
            }
});

yesButton.addEventListener("click", function() {
 
    yesButton.classList.add("hidden");
    noButton.classList.add("hidden");
    document.querySelector("h1").classList.add("hidden");
    document.querySelector(".gif-container").classList.add("hidden");
    celebrationSection.classList.remove("hidden"); 
});
