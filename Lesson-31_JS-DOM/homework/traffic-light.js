const changeLightBtn = document.querySelector(".change-light-btn");
const trafficLight = document.querySelector(".traffic-light");

const redlight = document.querySelector(".red");
const yellowlight = document.querySelector(".yellow");
const greenlight = document.querySelector(".green");


changeLightBtn.addEventListener('click', () => {
    if (redlight.classList.contains("red")) {
        redlight.classList.remove("red");
        yellowlight.classList.add("yellow");
        yellowlight.classList.remove("unactive");
    } else if (yellowlight.classList.contains("yellow")) {
        yellowlight.classList.remove("yellow");
        greenlight.classList.add("green");
        greenlight.classList.remove("unactive");
    } else {
        greenlight.classList.remove("green");
        redlight.classList.add("red");
    }
});