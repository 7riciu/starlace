function Found() {
    window.alert("Found the star!")
}

function randomPosition() {
    const star = document.getElementById("star");

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const starWidth = star.offsetWidth;
    const starHeight = star.offsetHeight;

    const maxHorizontal = screenWidth - starWidth;
    const maxVertical = screenHeight - starHeight;

    const randomHorizontal = Math.floor(Math.random() * maxHorizontal);
    const randomVertical = Math.floor(Math.random() * maxVertical);

    star.style.left = randomHorizontal + "px";
    star.style.top = randomVertical + "px";
}

window.onload = randomPosition;