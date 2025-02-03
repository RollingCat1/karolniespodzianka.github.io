<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Walewtynki</title>
    <style>
        body {
            text-align: center;
            background-color: #F195BC;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100vh; 
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            position: relative;
        }
        h1 {
            color: #D72638;
        }
        .btn {
            font-size: 20px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin: 10px;
            transition: 0.2s ease;
        }
        .yes-btn {
            background-color: green;
            color: white;
            font-size: 20px;
            z-index: 10;
        }
        .no-btn {
            background-color: red;
            color: white;
        }
        .gif-container img {
            width: 200px;
            height: auto;
            margin-top: 20px;
        }
        .hidden {
            display: none;
        }
        .celebration {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); 
            z-index: 20;
            text-align: center;
        }
        .celebration h2 {
            color: #D72638;
            font-size: 40px;
        }
        .celebration img {
            width: 300px;
            height: auto;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Will you be my Valentine?</h1>
        <button class="btn yes-btn" id="yes">Yes</button>
        <button class="btn no-btn" id="no">No</button>
        <div class="gif-container">
            <img src="https://media1.tenor.com/m/Nwv6_vFl79oAAAAC/dog-meme.gif" alt="Cute GIF">
        </div>
    </div>
<div class="celebration hidden" id="celebration">
        <h2>LOVEEEE YOUUUUU DZULIAA 💖</h2>
        <img src="https://media.tenor.com/jmAAqbCkAsQAAAAi/yippee-tbh-creature.gif" alt="Celebration GIF">
    </div>
  
<script>
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

       
            let currentWidth = yesButton.offsetWidth;
            let currentHeight = yesButton.offsetHeight;
            let screenWidth = window.innerWidth;
            let screenHeight = window.innerHeight;

            if (currentWidth < screenWidth || currentHeight < screenHeight) {
                yesButton.style.width = (currentWidth + 250) + "px";
                yesButton.style.height = (currentHeight + 200) + "px";
                yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 5) + "px";
            }

      
            if (noClickCount >= noTexts.length) {
                noButton.disabled = true; 
                noButton.style.cursor = "not-allowed"; 
            }
        });

        yesButton.addEventListener("click", function() {
         
            yesButton.classList.add("hidden");
            noButton.classList.add("hidden");
            document.querySelector("h1").classList.add("hidden");
            document.querySelector(".gif-container").classList.add("hidden");
            celebrationSection.classList.remove("hidden"); 
        });
    </script>
</body>
</html>
