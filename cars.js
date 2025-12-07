let cars = [
    { name: "Compact Car", price: 15000 },
    { name: "Sedan", price: 30000 },
    { name: "Sports Car", price: 100000 }
];

function buyCar(index) {
    if (money >= cars[index].price) {
        money -= cars[index].price;
        alert(`You bought: ${cars[index].name}`);
        updateDisplay();
        renderCars();
    } else {
        alert("Not enough money!");
    }
}

function createCustomCar(name, price) {
    if (!name || !price) return alert("Name and price required!");
    cars.push({ name, price });
    alert(`Created car: ${name} for $${price}`);
    renderCars();
}

function renderCars() {
    const container = document.getElementById("carsList");
    container.innerHTML = "";
    cars.forEach((car, i) => {
        container.innerHTML += `<div>${car.name} - $${car.price}</div>`;
    });
}

setInterval(renderCars, 1000);

