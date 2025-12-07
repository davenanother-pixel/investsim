let homes = [
    { name: "Small House", price: 50000 },
    { name: "Apartment", price: 120000 },
    { name: "Villa", price: 500000 }
];

function buyHome(index) {
    if (money >= homes[index].price) {
        money -= homes[index].price;
        alert(`You bought: ${homes[index].name}`);
        updateDisplay();
        renderHomes();
    } else {
        alert("Not enough money!");
    }
}

function createCustomHome(name, price) {
    if (!name || !price) return alert("Name and price required!");
    homes.push({ name, price });
    alert(`Created home: ${name} for $${price}`);
    renderHomes();
}

function renderHomes() {
    const container = document.getElementById("homesList");
    container.innerHTML = "";
    homes.forEach((home, i) => {
        container.innerHTML += `<div>${home.name} - $${home.price}</div>`;
    });
}
setInterval(renderHomes, 1000);
