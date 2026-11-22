const form = document.querySelector("#form");
const list = document.querySelector("#list");

const trainings=[];
const circles=document.querySelectorAll(".circle");
const message=document.querySelector("#tydzien p");
const goal = circles.length;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    const type = data.get("type");
    const minutes = Number(data.get("minutes"));

    const li = document.createElement('li');
    li.textContent = `${type} · ${minutes} min`;
    list.appendChild(li);

    trainings.push({type,minutes});
    updateProgress(); 
});

function updateProgress() {
    const count = trainings.length;

    circles.forEach(function (circle, index) {
        const done = index < count;
        circle.classList.toggle("done", done);
        circle.textContent = done ? "✓" : "+";
    });

    const rest = goal - count;

    if (rest > 0) {
        message.textContent = `Do celu brakuje: ${rest}`;
    } else {
        message.textContent = "Cel tygodnia zrobiony!";
    }
}