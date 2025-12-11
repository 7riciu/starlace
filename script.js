function Found() {
    window.alert("Found the star!")
}

function randomPosition() {
    const stars = document.querySelectorAll(".star");

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    stars.forEach(star => {
        const starWidth = star.offsetWidth;
        const starHeight = star.offsetHeight;

        const maxHorizontal = screenWidth - starWidth;
        const maxVertical = screenHeight - starHeight;

        const randomHorizontal = Math.floor(Math.random() * maxHorizontal);
        const randomVertical = Math.floor(Math.random() * maxVertical);

        star.style.position = "absolute";
        star.style.left = randomHorizontal + "px";
        star.style.top = randomVertical + "px";
        });
}

window.onload = randomPosition;

let counter = 0;

function star_count_two() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 4) {
                window.location.href = "level_two_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_three() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 7) {
                window.location.href = "level_three_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_four() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 10) {
                window.location.href = "level_four_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_five() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 5) {
                window.location.href = "level_five_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_six() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 10) {
                window.location.href = "level_six_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_seven() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 7) {
                window.location.href = "level_seven_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_eight() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 6) {
                window.location.href = "level_eight_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_nine() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 10) {
                window.location.href = "level_nine_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_ten() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 8) {
                window.location.href = "level_ten_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_eleven() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 9) {
                window.location.href = "level_eleven_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_twelve() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 10) {
                window.location.href = "level_twelve_end.html";
                counter = 0;
            }
        });
    });
}

function star_count_thirteen() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            counter++;
            console.log(counter)
            if (counter === 17) {
                window.location.href = "win.html";
                counter = 0;
            }
        });
    });
}