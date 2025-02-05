let yesButton = document.getElementById("yes");
        let noButton = document.getElementById("no");
        let celebrationSection = document.getElementById("celebration");
        let noTexts = ["Napewno?", "SERIO?!!!!", "Rysiu", "hey buddy, what's up? wanna buy a hot dog? :3", "14", "sansgranie", "pozdrawiam<3"];
        let noClickCount = 0;

        noButton.addEventListener("click", function() {
            if (noClickCount < noTexts.length) {
                noButton.textContent = noTexts[noClickCount];
                noClickCount++;
            }
            
            if (noClickCount >= noTexts.length) {
                noButton.remove();
            }

            let currentWidth = yesButton.offsetWidth;
            let currentHeight = yesButton.offsetHeight;
            let screenWidth = window.innerWidth;
            let screenHeight = window.innerHeight;

            if (currentWidth < screenWidth || currentHeight < screenHeight) {
                yesButton.style.width = (currentWidth + 220) + "px";
                yesButton.style.height = (currentHeight + 170) + "px";
                yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 5) + "px";
            }
        });

        yesButton.addEventListener("click", function() {
            yesButton.classList.add("hidden");
            noButton.classList.add("hidden");
            document.querySelector("h1").classList.add("hidden");
            document.querySelector(".gif-container").classList.add("hidden");
            celebrationSection.classList.remove("hidden");
        });
