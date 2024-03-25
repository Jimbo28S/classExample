const heading = document.getElementById("myHeading");
const hideButton = document.getElementById("hideButton");
const showButton = document.getElementById("showButton");
const colorButton = document.getElementById("colorButton");

hideButton.addEventListener("click", hideClicked);
showButton.addEventListener("click", showClicked);
colorButton.addEventListener("click", changeColor);

function hideClicked() {
    heading.classList.add("hide")
}

function showClicked() {
    heading.classList.remove("hide")
}

function changeColor() {
    let buttonText = colorButton.textContent;

    if (buttonText === "Red") {
        heading.classList.remove("red");
        heading.classList.add("green");
        colorButton.textContent = "Green";
    } else if (buttonText === "Green") {
        heading.classList.remove("green");
        heading.classList.add("blue");
        colorButton.textContent = "Blue";
    } else if (buttonText === "Blue") {
        heading.classList.remove("blue");
        heading.classList.add("red")
        colorButton.textContent = "Red";
    }
}
