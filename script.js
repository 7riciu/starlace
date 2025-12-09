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
    counter = counter + 1;
    console.log(counter)
    if (counter === 4) {
        window.location.href = "level_two_end.html";
        counter = 0;
    }
}