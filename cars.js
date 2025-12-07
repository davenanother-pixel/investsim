let cars = [];

function createCar() {
    if (money >= 10000) {
        money -= 10000;
        cars.push({ name: `Car #${cars.length + 1}`, value: 10000 });
        renderCars();
    } else {
        alert("Not enough money for a car!");
    }
}

function renderCars() {
    const div = document.getElementById("yourCars");
    div.innerHTML = "";
    cars.forEach(car => {
        div.innerHTML += `${car.name} | $${car.value}<br>`;
    });
}

setInterval(renderCars, 500);
