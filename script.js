let counter = 0;

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("two_comp") === null) {
        localStorage.setItem("two_comp", "false");
    };
    if (localStorage.getItem("three_comp") === null) {
        localStorage.setItem("three_comp", "false");
    };
    if (localStorage.getItem("four_comp") === null) {
        localStorage.setItem("four_comp", "false");
    };
    if (localStorage.getItem("five_comp") === null) {
        localStorage.setItem("five_comp", "false");
    };
    if (localStorage.getItem("six_comp") === null) {
        localStorage.setItem("six_comp", "false");
    };
    if (localStorage.getItem("seven_comp") === null) {
        localStorage.setItem("seven_comp", "false");
    };
    if (localStorage.getItem("eight_comp") === null) {
        localStorage.setItem("eight_comp", "false");
    };
    if (localStorage.getItem("nine_comp") === null) {
        localStorage.setItem("nine_comp", "false");
    };
    if (localStorage.getItem("ten_comp") === null) {
        localStorage.setItem("ten_comp", "false");
    };
    if (localStorage.getItem("eleven_comp") === null) {
        localStorage.setItem("eleven_comp", "false");
    };
    if (localStorage.getItem("twelve_comp") === null) {
        localStorage.setItem("twelve_comp", "false");
    };
    if (localStorage.getItem("thirteen_comp") === null) {
        localStorage.setItem("thirteen_comp", "false");
    };

    let two_comp = localStorage.getItem("two_comp") === "true";
    let three_comp = localStorage.getItem("three_comp") === "true";
    let four_comp = localStorage.getItem("four_comp") === "true";
    let five_comp = localStorage.getItem("five_comp") === "true";
    let six_comp = localStorage.getItem("six_comp") === "true";
    let seven_comp = localStorage.getItem("seven_comp") === "true";
    let eight_comp = localStorage.getItem("eight_comp") === "true";
    let nine_comp = localStorage.getItem("nine_comp") === "true";
    let ten_comp = localStorage.getItem("ten_comp") === "true";
    let eleven_comp = localStorage.getItem("eleven_comp") === "true";
    let twelve_comp = localStorage.getItem("twelve_comp") === "true";
    let thirteen_comp = localStorage.getItem("thirteen_comp") === "true";

    let level_two = document.getElementById("level_two");
    let level_three = document.getElementById("level_three");
    let level_four = document.getElementById("level_four");
    let level_five = document.getElementById("level_five");
    let level_six = document.getElementById("level_six");
    let level_seven = document.getElementById("level_seven");
    let level_eight = document.getElementById("level_eight");
    let level_nine = document.getElementById("level_nine");
    let level_ten = document.getElementById("level_ten");
    let level_eleven = document.getElementById("level_eleven");
    let level_twelve = document.getElementById("level_twelve");
    let level_thirteen = document.getElementById("level_thirteen");

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

    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        const x = star.dataset.x;
        const y = star.dataset.y;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
    });

    level_three.addEventListener("click", (level) => {
        if (!two_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_four.addEventListener("click", (level) => {
        if (!three_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_five.addEventListener("click", (level) => {
        if (!four_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_six.addEventListener("click", (level) => {
        if (!five_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_seven.addEventListener("click", (level) => {
        if (!six_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_eight.addEventListener("click", (level) => {
        if (!seven_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_nine.addEventListener("click", (level) => {
        if (!eight_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_ten.addEventListener("click", (level) => {
        if (!nine_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_eleven.addEventListener("click", (level) => {
        if (!ten_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_twelve.addEventListener("click", (level) => {
        if (!eleven_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });

    level_thirteen.addEventListener("click", (level) => {
        if (!twelve_comp) {
            level.preventDefault();
            alert("Level locked!");
        }
    });
});

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

function star_count_two() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 13) {
                window.location.href = "level_two_end.html";
                localStorage.setItem("two_comp", "true");
                counter = 0;
            }
        });
    });
};

function star_count_three() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 13) {
                window.location.href = "level_three_end.html";
                localStorage.setItem("three_comp", "true");
                counter = 0;
            }
        });
    });
};

function star_count_four() {
    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.dataset.clicked === "true") return;
            star.dataset.clicked = "true";
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 16) {
                window.location.href = "level_four_end.html";
                localStorage.setItem("four_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 11) {
                window.location.href = "level_five_end.html";
                localStorage.setItem("five_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 14) {
                window.location.href = "level_six_end.html";
                localStorage.setItem("six_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 15) {
                window.location.href = "level_seven_end.html";
                localStorage.setItem("seven_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 6) {
                window.location.href = "level_eight_end.html";
                localStorage.setItem("eight_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 9) {
                window.location.href = "level_nine_end.html";
                localStorage.setItem("nine_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 13) {
                window.location.href = "level_ten_end.html";
                localStorage.setItem("ten_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 8) {
                window.location.href = "level_eleven_end.html";
                localStorage.setItem("eleven_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 16) {
                window.location.href = "level_twelve_end.html";
                localStorage.setItem("twelve_comp", "true");
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
            star.classList.toggle("active");
            counter++;
            console.log(counter)
            if (counter === 23) {
                window.location.href = "level_thirteen_end.html";
                localStorage.setItem("thirteen_comp", "true");
                counter = 0;
            }
        });
    });
}