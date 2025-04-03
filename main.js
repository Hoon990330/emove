document.addEventListener("DOMContentLoaded", function () {
    const clearButtons = document.querySelectorAll(".clear-btn");
    const emotionInput = document.querySelector(".emotion-input");
    const movementInput = document.querySelector(".movement-input");
    const motionImage = document.getElementById("motion-image");

    const emotionList = document.querySelector(".emotion-list");
    const emotionItems = document.querySelectorAll(".emotion-list p");
    const movementList = document.querySelector(".movement-list");
    const movementItems = document.querySelectorAll(".movement-list p");

    const defaultImage = "assets/Basic_posture.png";

    const emotionBackgrounds = {
        happy:    { bg: "#fff9c4", label: "#fff9c4", highlight: "#d36b00" },
        angry:    { bg: "#a94442", label: "#a94442", highlight: "#ff4c4c" },
        sleepy:   { bg: "#d0e0f0", label: "#d0e0f0", highlight: "#4a90e2" },
        excited:  { bg: "#ffe0e6", label: "#ffe0e6", highlight: "#d52d7e" },
        relaxed:  { bg: "#e0f2f1", label: "#e0f2f1", highlight: "#3ca59d" }
    };

    const emotionImages = {
        "h": "assets/h.png",
        "ha": "assets/ha.png",
        "hap": "assets/hap.png",
        "happ": "assets/happ.png",
        "happy": "assets/happy.png",
        "a": "assets/a.png",
        "an": "assets/an.png",
        "ang": "assets/ang.png",
        "angr": "assets/angr.png",
        "angry": "assets/angry.png",
        "s": "assets/s.png",
        "sl": "assets/sl.png",
        "sle": "assets/sle.png",
        "slee": "assets/slee.png",
        "sleep": "assets/sleep.png",
        "sleepy": "assets/sleepy.png",
        "e": "assets/e.png",
        "ex": "assets/ex.png",
        "exc": "assets/exc.png",
        "exci": "assets/exci.png",
        "excit": "assets/excit.png",
        "excite": "assets/excite.png",
        "excited": "assets/excited.png",
        "r": "assets/r.png",
        "re": "assets/re.png",
        "rel": "assets/rel.png",
        "rela": "assets/rela.png",
        "relax": "assets/relax.png",
        "relaxe": "assets/relaxe.png",
        "relaxed": "assets/relaxed.png"
    };

    const happyMovementImages = {
        "a": "movement/Happy.a.png",
        "at": "movement/Happy.at.png",
        "ate": "movement/Happy.ate.png",
        "atep": "movement/Happy.atep.png",
        "atepi": "movement/Happy.atepi.png",
        "atepiz": "movement/Happy.atepiz.png",
        "atepizz": "movement/Happy.atepizz.png",
        "atepizza": "movement/Happy.atepizza.png",
        "d": "movement/Happy.d.png",
        "da": "movement/Happy.da.png",
        "dan": "movement/Happy.dan.png",
        "danc": "movement/Happy.danc.png",
        "dance": "movement/Happy.dance.png",
        "danced": "movement/Happy.danced.png"
    };

    const angryMovementImages = {
        "a": "movement/Angry.a.png",
        "at": "movement/Angry.at.png",
        "ate": "movement/Angry.ate.png",
        "atep": "movement/Angry.atep.png",
        "atepi": "movement/Angry.atepi.png",
        "atepiz": "movement/Angry.atepiz.png",
        "atepizz": "movement/Angry.atepizz.png",
        "atepizza": "movement/Angry.atepizza.png",
        "d": "movement/Angry.d.png",
        "da": "movement/Angry.da.png",
        "dan": "movement/Angry.dan.png",
        "danc": "movement/Angry.danc.png",
        "dance": "movement/Angry.dance.png",
        "danced": "movement/Angry.danced.png"
    };

    const sleepyMovementImages = {
        "a": "movement/Sleepy.a.png",
        "at": "movement/Sleepy.at.png",
        "ate": "movement/Sleepy.ate.png",
        "atep": "movement/Sleepy.atep.png",
        "atepi": "movement/Sleepy.atepi.png",
        "atepiz": "movement/Sleepy.atepiz.png",
        "atepizz": "movement/Sleepy.atepizz.png",
        "atepizza": "movement/Sleepy.atepizza.png",
        "d": "movement/Sleepy.d.png",
        "da": "movement/Sleepy.da.png",
        "dan": "movement/Sleepy.dan.png",
        "danc": "movement/Sleepy.danc.png",
        "dance": "movement/Sleepy.dance.png",
        "danced": "movement/Sleepy.danced.png"
    };

    const excitedMovementImages = {
        "a": "movement/Excited.a.png",
        "at": "movement/Excited.at.png",
        "ate": "movement/Excited.ate.png",
        "atep": "movement/Excited.atep.png",
        "atepi": "movement/Excited.atepi.png",
        "atepiz": "movement/Excited.atepiz.png",
        "atepizz": "movement/Excited.atepizz.png",
        "atepizza": "movement/Excited.atepizza.png",
        "d": "movement/Excited.d.png",
        "da": "movement/Excited.da.png",
        "dan": "movement/Excited.dan.png",
        "danc": "movement/Excited.danc.png",
        "dance": "movement/Excited.dance.png",
        "danced": "movement/Excited.danced.png"
    };

    const relaxedMovementImages = {
        "a": "movement/Relaxed.a.png",
        "at": "movement/Relaxed.at.png",
        "ate": "movement/Relaxed.ate.png",
        "atep": "movement/Relaxed.atep.png",
        "atepi": "movement/Relaxed.atepi.png",
        "atepiz": "movement/Relaxed.atepiz.png",
        "atepizz": "movement/Relaxed.atepizz.png",
        "atepizza": "movement/Relaxed.atepizza.png",
        "d": "movement/Relaxed.d.png",
        "da": "movement/Relaxed.da.png",
        "dan": "movement/Relaxed.dan.png",
        "danc": "movement/Relaxed.danc.png",
        "dance": "movement/Relaxed.dance.png",
        "danced": "movement/Relaxed.danced.png"
    };

    const movementMap = {
        happy: happyMovementImages,
        angry: angryMovementImages,
        sleepy: sleepyMovementImages,
        excited: excitedMovementImages,
        relaxed: relaxedMovementImages
    };

    clearButtons.forEach(button => {
        button.addEventListener("click", function () {
            const inputBox = this.previousElementSibling;
            if (inputBox) {
                inputBox.value = "";
                motionImage.src = defaultImage;
                document.body.style.setProperty("--bg-color", "#e1e1e1");
                document.body.style.setProperty("--label-bg", "#e1e1e1");
                document.body.style.setProperty("--highlight-color", "rgb(208, 45, 45)");
            }
        });
    });

    const inputs = [
        { input: emotionInput, list: emotionList, items: emotionItems },
        { input: movementInput, list: movementList, items: movementItems }
    ];

    inputs.forEach(({ input, list, items }) => {
        input.addEventListener("focus", function () {
            list.classList.add("show");
            items.forEach((item, index) => {
                setTimeout(() => item.classList.add("show"), index * 100);
            });
        });

        document.addEventListener("click", function (event) {
            if (!input.contains(event.target) && !list.contains(event.target)) {
                list.classList.remove("show");
                items.forEach(item => item.classList.remove("show"));
            }
        });

        items.forEach(item => {
            item.addEventListener("click", function () {
                input.value = item.textContent;
                list.classList.remove("show");
                items.forEach(item => item.classList.remove("show"));
                updateImage();
            });
        });

        input.addEventListener("input", function () {
            const inputValue = input.value.toLowerCase().replace(/\s/g, "");
            items.forEach(item => {
                const word = item.textContent.toLowerCase().replace(/\s/g, "");
                if (inputValue && word.startsWith(inputValue)) {
                    let highlighted = '';
                    let cleanIndex = 0;
                    for (let i = 0; i < item.textContent.length; i++) {
                        const char = item.textContent[i];
                        if (char === ' ') {
                            highlighted += char;
                        } else {
                            if (cleanIndex < inputValue.length) {
                                highlighted += `<span class="highlight">${char}</span>`;
                            } else {
                                highlighted += char;
                            }
                            cleanIndex++;
                        }
                    }
                    item.innerHTML = highlighted;
                } else {
                    item.innerHTML = item.textContent;
                }
            });
            updateImage();
        });
    });

    function updateImage() {
        const emotionValue = emotionInput.value.toLowerCase().trim();
        const movementValue = movementInput.value.toLowerCase().replace(/\s/g, "");

        if (movementMap[emotionValue] && movementMap[emotionValue][movementValue]) {
            motionImage.src = movementMap[emotionValue][movementValue];
        } else if (emotionImages[emotionValue]) {
            motionImage.src = emotionImages[emotionValue];
        } else {
            motionImage.src = defaultImage;
        }

        if (emotionBackgrounds[emotionValue]) {
            const { bg, label, highlight } = emotionBackgrounds[emotionValue];
            document.body.style.setProperty("--bg-color", bg);
            document.body.style.setProperty("--label-bg", label);
            document.body.style.setProperty("--highlight-color", highlight);
        } else {
            document.body.style.setProperty("--bg-color", "#e1e1e1");
            document.body.style.setProperty("--label-bg", "#e1e1e1");
            document.body.style.setProperty("--highlight-color", "rgb(208, 45, 45)");
        }
    }
});