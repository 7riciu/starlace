document.addEventListener("DOMContentLoaded", () => {
    if (document.body.id === "level_two") {
        star_count_two();
    }
    if (document.body.id === "level_three") {
        star_count_three();
    }
    if (document.body.id === "level_four") {
        star_count_four();
    }
    if (document.body.id === "level_five") {
        star_count_five();
    }
    if (document.body.id === "level_six") {
        star_count_six();
    }
    if (document.body.id === "level_seven") {
        star_count_seven();
    }
    if (document.body.id === "level_eight") {
        star_count_eight();
    }
    if (document.body.id === "level_nine") {
        star_count_nine();
    }
    if (document.body.id === "level_ten") {
        star_count_ten();
    }
    if (document.body.id === "level_eleven") {
        star_count_eleven();
    }
    if (document.body.id === "level_twelve") {
        star_count_twelve();
    }
    if (document.body.id === "level_thirteen") {
        star_count_thirteen();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        const x = star.dataset.x;
        const y = star.dataset.y;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
    });
});

function change_image(img) {
    img.src = "background.png"
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

let counter = 0;

function star_count_two() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
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
            change_image(star);
            counter++;
            console.log(counter)
            if (counter === 17) {
                window.location.href = "win.html";
                counter = 0;
            }
        });
    });
}